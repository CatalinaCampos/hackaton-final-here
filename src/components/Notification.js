import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'

import { fab } from '@fortawesome/free-brands-svg-icons';
import { faWifi, faSignal, faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faWifi, faSignal, faBatteryThreeQuarters)


class Notification extends Component{
    render(){
        return(
            <div>
                    <h1>PRUEBAS</h1>
            </div>
        )
    }
}
export default Notification;