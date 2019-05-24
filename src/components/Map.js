import React from 'react';
import { faGrimace } from '@fortawesome/free-solid-svg-icons';
import { faAdobe } from '@fortawesome/free-brands-svg-icons';

// import { Marker } from 'react-leaflet';

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            useHTTPS: true,
            center: {
                lat: props.lat,
                lng: props.lng,
            },
            zoom: props.zoom,
            
        }
    }

    componentDidMount() {
        this.platform = new window.H.service.Platform(this.state);

        var layer = this.platform.createDefaultLayers();
        var container = this.refs["here-map"];

        this.map = new window.H.Map(container, layer.normal.map, {
            center: this.state.center,
            zoom: this.state.zoom,
        })

        var events = new window.H.mapevents.MapEvents(this.map);
        // eslint-disable-next-line
        var behavior = new window.H.mapevents.Behavior(events);
        // eslint-disable-next-line
        var ui = new window.H.ui.UI.createDefault(this.map, layer)

        var pngIcon = new window.H.map.Icon("https://i.imgur.com/MbZ6QdK.png", {size: {w: 50, h: 45}})
        var pngIcon1 = new window.H.map.Icon("https://i.imgur.com/8y9vT3N.png", {size: {w: 50, h: 45}})
        var pngIcon2 = new window.H.map.Icon("https://i.imgur.com/a8XYtio.png", {size: {w: 50, h: 45}})
        // Create a marker for the point:

        this.startMarker = new window.H.map.Marker({
            lat: -33.41907,
            lng: -70.641816,
        }, {
                icon: pngIcon
            });

        this.startMarker1 = new window.H.map.Marker({ /* Museo de muebles */
            lat: -33.39471,
            lng: -70.64264
        }, {
            icon: pngIcon1
        });

        this.startMarker2 = new window.H.map.Marker({ /* Heroinas */ 
            lat: -33.417769,
            lng: -70.650747
        }, {
            icon: pngIcon1
        });

        this.startMarker3 = new window.H.map.Marker({ /* La chascona PAGADO*/
            lat: -33.43107,
            lng: -70.60454
        }, {
            icon: pngIcon2
        });

        this.startMarker4 = new window.H.map.Marker({ /* Cementerio  */
            lat: -33.4162901,
            lng: -70.6483638,
        }, {
            icon: pngIcon1
        });

        this.startMarker5 = new window.H.map.Marker({ /* Recorrido cementerio */
            lat: -33.3991974,
            lng: -70.6428294,
        }, {
            icon: pngIcon1
        });

        /*this.endMarker1 = new window.H.map.Marker({
            lat: -33.4190702,
            lng: -70.6418162
        });*/



        this.map.addObjects([this.startMarker, this.startMarker1, this.startMarker2, this.startMarker3, this.startMarker4, this.startMarker5 /*this.endMarker1*/])

    }


    componentDidUpdate() {

        console.log("primer if");

        this.routingParameters = {
            'mode': 'fastest;pedestrian',
            'waypoint0': "geo!" + this.props.lat + "," + this.props.lng,
            'waypoint1': "geo!" + this.props.lat + "," + this.props.lng,
            'representation': 'display'
        };
        if (this.routeLine) {
            console.log("segundo if");

            this.map.removeObjects([this.routeLine, this.startMarker, this.endMarker]);
        }
        console.log("fuera de los if");

        this.onResult = result => {
            console.log(result)
            var route,
                routeShape,
                startPoint,
                endPoint,
                linestring;
            if (result.response && result.response.route) {
                // Pick the first route from the response:
                route = result.response.route[0];
                // Pick the route's shape:
                routeShape = route.shape;
                // Create a linestring to use as a point source for the route line
                linestring = new window.H.geo.LineString();
                // Push all the points in the shape into the linestring:
                routeShape.forEach(function (point) {
                    var parts = point.split(',');
                    linestring.pushLatLngAlt(parts[0], parts[1]);
                });
                // Retrieve the mapped positions of the requested waypoints:
                startPoint = route.waypoint[0].mappedPosition;
                endPoint = route.waypoint[1].mappedPosition;

                this.startMarker = new window.H.map.Marker({
                    lat: startPoint.latitude,
                    lng: startPoint.longitude,
                });
                this.endMarker = new window.H.map.Marker({
                    lat: endPoint.latitude,
                    lng: endPoint.longitude,
                });
                // Create a polyline to display the route:
                this.routeLine = new window.H.map.Polyline(linestring, {
                    style: {
                        strokeColor: 'blue',
                        lineWidth: 2
                    }
                });

                // Add the route polyline and the two markers to the map:
                this.map.addObjects([this.routeLine, this.startMarker, this.endMarker]);
                // Set the map's viewport to make the whole route visible:
                this.map.setViewBounds(this.routeLine.getBounds());
            }
        };

        // Get an instance of the routing service:
        this.router = this.platform.getRoutingService();

    // Call calculateRoute() with the routing parameters,
    // the callback and an error callback function (called if a
    // communication error occurs):
    this.router.calculateRoute(this.routingParameters, this.onResult,
        function (error) {
            alert(error.message);
        });

    }

    render() {
        return (<div ref="here-map"
            style={
                {
                    width: '100%',
                    height: '570px',
                    background: 'grey',
                    marginTop: '8%'
                }
            } >
        </div>
        );
    }
}
