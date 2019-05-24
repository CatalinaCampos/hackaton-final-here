import React from 'react';
import './Map.css'
import bubble1 from '../images/bubble1.png'
import bubble2 from '../images/bubble2.png'
import bubble3 from '../images/bubble3.jpg'
import bubble4 from '../images/bubble4.png'
import bubble5 from '../images/bubble5.png'
//import { faGrimace } from '@fortawesome/free-solid-svg-icons';
//import { faAdobe } from '@fortawesome/free-brands-svg-icons';

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

        var pngIcon = new window.H.map.Icon("https://i.imgur.com/MbZ6QdK.png", { size: { w: 50, h: 45 } })
        var pngIcon1 = new window.H.map.Icon("https://i.imgur.com/sLnNP8I.png", { size: { w: 50, h: 45 } })
        var pngIcon2 = new window.H.map.Icon("https://i.imgur.com/tduwYUo.png", { size: { w: 50, h: 45 } })
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

            this.startMarker1.setData(
                `<img src=${bubble1} alt="Notificacion" class="detailBubble1" />  
                <p class="pBubble1">Museo de guardar</p> 
                <p class="pBubble"> Av. Recoleta 683</p>
                <form action="https://wego.here.com/directions/mix/Calle-Schlack-528,-8420000-Recoleta,-Regi%C3%B3n-Metropolitana-de-Santiago,-Rep%C3%BAblica-de-Chile:-33.41881,-70.64231/Avenida-Libertador-Bernardo-OHiggins-3349,-9160000-Estaci%C3%B3n-Central,-Estaci%C3%B3n-Central,-Regi%C3%B3n-Metropolitana-de-Santiago,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUF2ZW5pZGErTGliZXJ0YWRvcitCZXJuYXJkbytPJTI3SGlnZ2lucyszMzQ5O2xhbmc9ZXM7bGF0PS0zMy40NTA2ODc0MDg0NDcyNjY7bG9uPS03MC42NzkzNjcwNjU0Mjk2OTtzdHJlZXQ9QXZlbmlkYStMaWJlcnRhZG9yK0Jlcm5hcmRvK08lMjdIaWdnaW5zO2hvdXNlPTMzNDk7Y2l0eT1Fc3RhY2klQzMlQjNuK0NlbnRyYWw7cG9zdGFsQ29kZT05MTYwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PUVzdGFjaSVDMyVCM24rQ2VudHJhbDtzdGF0ZT1SZWdpJUMzJUIzbitNZXRyb3BvbGl0YW5hK2RlK1NhbnRpYWdvO3N0YXRlQ29kZT1STTtjb3VudHk9U2FudGlhZ287Y2F0ZWdvcnlJZD1idWlsZGluZztzb3VyY2VTeXN0ZW09aW50ZXJuYWw7bmxhdD0tMzMuNDUwNzkwNDA1MjczNDQ7bmxvbj0tNzAuNjc5MzQ0MTc3MjQ2MTtwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.43428,-70.66094,14,normal">
                                <input type="submit" value="¿Cómo llegar?" class="goTo" />
                            </form>`);
            this.startMarker1.addEventListener('tap', event => {
                const bubble = new window.H.ui.InfoBubble(
                    event.target.getPosition(),
                    {
                        content: event.target.getData()
                    }
                );
                ui.addBubble(bubble)
            }, false);

        this.startMarker2 = new window.H.map.Marker({ /* Heroinas */
            lat: -33.417769,
            lng: -70.650747
        }, {
                icon: pngIcon1
            });

            this.startMarker2.setData(`
            <img src=${bubble2} alt="Notificacion" class="detailBubble1" />  
            <p class="pBubble1">Heroínas de nuestra historia</p> 
            <p class="pBubble">Profesor Alberto Zañartu 951</p>
            <form action="https://wego.here.com/directions/mix/Calle-Florencio-Bahamondes-2104,-8320000-Santiago,-Regi%C3%B3n-Metropolitana-de-Santiago,-Rep%C3%BAblica-de-Chile:-33.47415,-70.66780/Calle-Profesor-Alberto-Za%C3%B1artu-951,-8420000-Cementerios,-Recoleta,-Regi%C3%B3n-Metropolitana-de-Santiago,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUNhbGxlK1Byb2Zlc29yK0FsYmVydG8rWmElQzMlQjFhcnR1Kzk1MTtsYW5nPWVzO2xhdD0tMzMuNDE3NDY5MDI0NjU4Mjtsb249LTcwLjY1MTU4ODQzOTk0MTQ7c3RyZWV0PUNhbGxlK1Byb2Zlc29yK0FsYmVydG8rWmElQzMlQjFhcnR1O2hvdXNlPTk1MTtjaXR5PVJlY29sZXRhO3Bvc3RhbENvZGU9ODQyMDAwMDtjb3VudHJ5PUNITDtkaXN0cmljdD1DZW1lbnRlcmlvcztzdGF0ZT1SZWdpJUMzJUIzbitNZXRyb3BvbGl0YW5hK2RlK1NhbnRpYWdvO3N0YXRlQ29kZT1STTtjb3VudHk9U2FudGlhZ287Y2F0ZWdvcnlJZD1idWlsZGluZztzb3VyY2VTeXN0ZW09aW50ZXJuYWw7bmxhdD0tMzMuNDE3NTcyMDIxNDg0Mzc1O25sb249LTcwLjY1MTYwMzY5ODczMDQ3O3Bkc0NhdGVnb3J5SWQ9OTAwLTkzMDAtMDAwMA?map=-33.4186,-70.64688,15,normal">
                                <input type="submit" value="¿Cómo llegar?" class="goTo" />
                            </form>`);
            this.startMarker2.addEventListener('tap', event => {
                const bubble = new window.H.ui.InfoBubble(
                    event.target.getPosition(),
                    {
                        content: event.target.getData()
                    }
                );
                ui.addBubble(bubble)
            }, false);

        this.startMarker3 = new window.H.map.Marker({ /* La chascona PAGADO*/
            lat: -33.43107,
            lng: -70.60454
        }, {
                icon: pngIcon2
            });

            this.startMarker3.setData(`
            <img src=${bubble3} alt="Notificacion" class="detailBubble1" />  
            <p class="pBubble1">Casa museo la Chascona</p> 
            <p class="pBubble">Fernando Márquez de la Plata 0192</p>
            <form action="https://wego.here.com/directions/mix/Calle-Florencio-Bahamondes-2104,-8320000-Santiago,-Regi%C3%B3n-Metropolitana-de-Santiago,-Rep%C3%BAblica-de-Chile:-33.47415,-70.66780/Pasaje-Fernando-M%C3%A1rquez-de-la-Plata-0192,-7500000-Providencia,-Providencia,-Regi%C3%B3n-Metropolitana-de-Santiago,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPVBhc2FqZStGZXJuYW5kbytNJUMzJUExcnF1ZXorZGUrbGErUGxhdGErMDE5MjtsYW5nPWVzO2xhdD0tMzMuNDMxMTk4MTIwMTE3MTk7bG9uPS03MC42MzQ1MzY3NDMxNjQwNjtzdHJlZXQ9UGFzYWplK0Zlcm5hbmRvK00lQzMlQTFycXVleitkZStsYStQbGF0YTtob3VzZT0wMTkyO2NpdHk9UHJvdmlkZW5jaWE7cG9zdGFsQ29kZT03NTAwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PVByb3ZpZGVuY2lhO3N0YXRlPVJlZ2klQzMlQjNuK01ldHJvcG9saXRhbmErZGUrU2FudGlhZ287c3RhdGVDb2RlPVJNO2NvdW50eT1TYW50aWFnbztjYXRlZ29yeUlkPWJ1aWxkaW5nO3NvdXJjZVN5c3RlbT1pbnRlcm5hbDtubGF0PS0zMy40MzEyMjEwMDgzMDA3ODtubG9uPS03MC42MzQ1NTIwMDE5NTMxMjtwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.45269,-70.65109,13,normal">
                                <input type="submit" value="¿Cómo llegar?" class="goTo" />
                            </form>`);
            this.startMarker3.addEventListener('tap', event => {
                const bubble = new window.H.ui.InfoBubble(
                    event.target.getPosition(),
                    {
                        content: event.target.getData()
                    }
                );
                ui.addBubble(bubble)
            }, false);

        this.startMarker4 = new window.H.map.Marker({ /* Cementerio  */
            lat: -33.4162901,
            lng: -70.6483638,
        }, {
                icon: pngIcon1
            });

            this.startMarker4.setData(`
            <img src=${bubble4} alt="Notificacion" class="detailBubble1" />  
            <p class="pBubble1">Historia, memoria y derechos humanos</p> 
            <p class="pBubble">Av. Valdivieso 596</p>
            <form action="https://wego.here.com/directions/mix/Calle-Florencio-Bahamondes-2104,-8320000-Santiago,-Regi%C3%B3n-Metropolitana-de-Santiago,-Rep%C3%BAblica-de-Chile:-33.47415,-70.66780/Calle-Profesor-Alberto-Za%C3%B1artu-951,-8420000-Cementerios,-Recoleta,-Regi%C3%B3n-Metropolitana-de-Santiago,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUNhbGxlK1Byb2Zlc29yK0FsYmVydG8rWmElQzMlQjFhcnR1Kzk1MTtsYW5nPWVzO2xhdD0tMzMuNDE3NDY5MDI0NjU4Mjtsb249LTcwLjY1MTU4ODQzOTk0MTQ7c3RyZWV0PUNhbGxlK1Byb2Zlc29yK0FsYmVydG8rWmElQzMlQjFhcnR1O2hvdXNlPTk1MTtjaXR5PVJlY29sZXRhO3Bvc3RhbENvZGU9ODQyMDAwMDtjb3VudHJ5PUNITDtkaXN0cmljdD1DZW1lbnRlcmlvcztzdGF0ZT1SZWdpJUMzJUIzbitNZXRyb3BvbGl0YW5hK2RlK1NhbnRpYWdvO3N0YXRlQ29kZT1STTtjb3VudHk9U2FudGlhZ287Y2F0ZWdvcnlJZD1idWlsZGluZztzb3VyY2VTeXN0ZW09aW50ZXJuYWw7bmxhdD0tMzMuNDE3NTcyMDIxNDg0Mzc1O25sb249LTcwLjY1MTYwMzY5ODczMDQ3O3Bkc0NhdGVnb3J5SWQ9OTAwLTkzMDAtMDAwMA?map=-33.42418,-70.64302,15,normal">
                                <input type="submit" value="¿Cómo llegar?" class="goTo" />
                            </form>`);
            this.startMarker4.addEventListener('tap', event => {
                const bubble = new window.H.ui.InfoBubble(
                    event.target.getPosition(),
                    {
                        content: event.target.getData()
                    }
                );
                ui.addBubble(bubble)
            }, false);

        this.startMarker5 = new window.H.map.Marker({ /* Recorrido cementerio */
            lat: -33.3991974,
            lng: -70.6428294,
        }, {
                icon: pngIcon1
            });

            this.startMarker5.setData(`
            <img src=${bubble5} alt="Notificacion" class="detailBubble1" />  
            <p class="pBubble1">Recorrido patrimonial Recoleta Franciscana</p> 
            <p class="pBubble">Av. Recoleta 220</p>
            <form action="https://wego.here.com/directions/mix/Calle-Florencio-Bahamondes-2104,-8320000-Santiago,-Regi%C3%B3n-Metropolitana-de-Santiago,-Rep%C3%BAblica-de-Chile:-33.47415,-70.66780/Avenida-Recoleta-220,-8420000-Vega-Central,-Recoleta,-Regi%C3%B3n-Metropolitana-de-Santiago,-Chile:loc-dmVyc2lvbj0xO3RpdGxlPUF2ZW5pZGErUmVjb2xldGErMjIwO2xhbmc9ZXM7bGF0PS0zMy40MzA2NzU1MDY1OTE4O2xvbj0tNzAuNjQ3NTIxOTcyNjU2MjU7c3RyZWV0PUF2ZW5pZGErUmVjb2xldGE7aG91c2U9MjIwO2NpdHk9UmVjb2xldGE7cG9zdGFsQ29kZT04NDIwMDAwO2NvdW50cnk9Q0hMO2Rpc3RyaWN0PVZlZ2ErQ2VudHJhbDtzdGF0ZT1SZWdpJUMzJUIzbitNZXRyb3BvbGl0YW5hK2RlK1NhbnRpYWdvO3N0YXRlQ29kZT1STTtjb3VudHk9U2FudGlhZ287Y2F0ZWdvcnlJZD1idWlsZGluZztzb3VyY2VTeXN0ZW09aW50ZXJuYWw7bmxhdD0tMzMuNDMwNzUxODAwNTM3MTE7bmxvbj0tNzAuNjQ3NDYwOTM3NTtwZHNDYXRlZ29yeUlkPTkwMC05MzAwLTAwMDA?map=-33.45244,-70.65767,13,normal">
                                <input type="submit" value="¿Cómo llegar?" class="goTo" />
                            </form>`);
            this.startMarker5.addEventListener('tap', event => {
                const bubble = new window.H.ui.InfoBubble(
                    event.target.getPosition(),
                    {
                        content: event.target.getData()
                    }
                );
                ui.addBubble(bubble)
            }, false);

        /*this.endMarker1 = new window.H.map.Marker({
            lat: -33.4190702,
            lng: -70.6418162
        });*/



        this.map.addObjects([this.startMarker, this.startMarker1, this.startMarker2, this.startMarker3, this.startMarker4, this.startMarker5 /*this.endMarker1*/])

        /*ui.addBubble(startMarker1);
        startMarker1.addEventListener('tap', () => {
            startMarker1.getElement().addEventListener('mouseover', function (e) {
                console.log('hello there');
            })
            }); */

        }

    componentDidUpdate() {

                console.log("primer if");

                this.routingParameters = {
                    'mode': 'fastest;pedestrian',
                    'waypoint0': "geo!" + this.props.lat + "," + this.props.lng,
                    'waypoint1': "geo!" + this.props.lat + "," + this.props.lng,
                    'representation': 'display'
                };
                if(this.routeLine) {
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