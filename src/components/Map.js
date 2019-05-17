import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Map extends Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            position: null,
            zoom: props.zoom,
            map: null,
            theme: props.theme,
            style: props.style,
        }
    }

    getPlatform() {
        return new window.H.service.Platform(this.state);
    }

    getMap(container, layers, settings) {
        return new window.H.Map(container, layers, settings);
    }

    getEvents(map) {
        return new window.H.mapevents.MapEvents(map);
    }

    // getBehavior(events) {
    //     return new window.H.mapevents.Behavior(events);
    // }

    getUI(map, layers) {
        return new window.H.ui.UI.createDefault(map, layers);
    }

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.map.setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => this.setState({
                    error: error.message
                })
            );
        }

        this.platform = this.getPlatform();
        var layers = this.platform.createDefaultLayers();
        var element = document.getElementById('here-map');
        this.map = this.getMap(element, layers.normal.map, {
            center: this.state.center,
            zoom: this.state.zoom,
        });
        var behavior = new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(this.map));
        // eslint-disable-next-line
        // eslint-disable-next-line
        var ui = this.getUI(this.map, layers);
        this.setState({
            ...this.state,
            map: this.map
        });

// Retrieve the target element for the map:
var targetElement = document.getElementById('root');

// Get the default map types from the platform object:
var defaultLayers = this.platform.createDefaultLayers();


// Create the parameters for the routing request:
var routingParameters = {
  // The routing mode:
  'mode': 'fastest;car',
  // The start point of the route:
  'waypoint0': 'geo!-33.417442,-70.6057',
  // The end point of the route:
  'waypoint1': 'geo!-33.454103,-70.688219',
  // To retrieve the shape of the route we choose the route
  // representation mode 'display'
  'representation': 'display'
};

// Define a callback function to process the routing response:
var onResult =(result) => {
  var route,
    routeShape,
    startPoint,
    endPoint,
    linestring;
  if(result.response.route) {
  // Pick the first route from the response:
  route = result.response.route[0];
  // Pick the route's shape:
  routeShape = route.shape;

  // Create a linestring to use as a point source for the route line
  linestring = new window.H.geo.LineString();

  // Push all the points in the shape into the linestring:
  routeShape.forEach(function(point) {
    var parts = point.split(',');
    linestring.pushLatLngAlt(parts[0], parts[1]);
  });

  // Retrieve the mapped positions of the requested waypoints:
  startPoint = route.waypoint[0].mappedPosition;
  endPoint = route.waypoint[1].mappedPosition;

  // Create a polyline to display the route:
  var routeLine = new window.H.map.Polyline(linestring, {
    style: { strokeColor: 'blue', lineWidth: 10 }
  });

  // Create a marker for the start point:
  var startMarker = new window.H.map.Marker({
    lat: startPoint.latitude,
    lng: startPoint.longitude
  });

  // Create a marker for the end point:
  var endMarker = new window.H.map.Marker({
    lat: endPoint.latitude,
    lng: endPoint.longitude
  });

  // Add the route polyline and the two markers to the map:
  this.map.addObjects([routeLine, startMarker, endMarker]);

  // Set the map's viewport to make the whole route visible:
  this.map.setViewBounds(routeLine.getBounds());
  }
};

// Get an instance of the routing service:
var router = this.platform.getRoutingService();

// Call calculateRoute() with the routing parameters,
// the callback and an error callback function (called if a
// communication error occurs):
router.calculateRoute(routingParameters, onResult,
  function(error) {
    alert(error.message);
    });
    }

    shouldComponentUpdate(props, state) {
        this.changeTheme(props.theme, props.style);
        return false;
    }

    changeTheme(theme, style) {
        var tiles = this.platform.getMapTileService({
            'type': 'base'
        });
        var layer = tiles.createTileLayer(
            'maptile',
            theme,
            256,
            'png', {
                'style': 'flame'
            }
        );
        this.map.setBaseLayer(layer);
    }

    render() {
        return ( 
        <div id = "here-map"
            style = {
                {
                    width: '100%',
                    height: '400px',
                    background: 'grey'
                }
            }
            />
        );
    }
}

export default Map;