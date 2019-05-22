import React {Component} from 'react';

class Points extends Component {

    
    // Instantiate the Platform class with authentication and
    // authorization credentials:
    var platform = new H.service.Platform({
        app_id: '{YOUR_APP_ID}',
        app_code: '{YOUR_APP_CODE}'
    });
      // Instantiate a map inside the DOM element with id map. The
      // map center is in San Francisco, the zoom level is 10:
      var map = new H.Map(document.getElementById('map'),
        platform.createDefaultLayers().normal.map, {
        center: {lat: 37.7942, lng: -122.4070},
        zoom: 15
        });
  
      // Create a group object to hold map markers:
      var group = new H.map.Group();
  
      // Create the default UI components:
      var ui = H.ui.UI.createDefault(map, platform.createDefaultLayers());
  
      // Add the group object to the map:
      map.addObject(group);
  
      // Obtain a Search object through which to submit search
      // requests:
      var search = new H.places.Search(platform.getPlacesService()),
        searchResult, error;
  
      // Define search parameters:
      var params = {
      // Plain text search for places with the word "hotel"
      // associated with them:
        'q': 'hotel',
      //  Search in the Chinatown district in San Francisco:
        'at': '37.7942,-122.4070'
      };
  
      // Define a callback function to handle data on success:
      function onResult(data) {
        addPlacesToMap(data.results);
      }
  
      // Define a callback function to handle errors:
      function onError(data) {
        error = data;
      }
  
      // This function adds markers to the map, indicating each of
      // the located places:
      function addPlacesToMap(result) {
        group.addObjects(result.items.map(function (place) {
        var marker = new H.map.Marker({lat: place.position[0],
          lng: place.position[1]})
        return marker;
        }));
      }
  
      // Run a search request with parameters, headers (empty), and
      // callback functions:
      search.request(params, {}, onResult, onError);
  
  
    render() { 
        return (
            <div>
            
            </div>
        );
    }
}

export default Points;