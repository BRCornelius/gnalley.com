import React, {useRef} from 'react';
import { Rerousel } from 'rerousel';
import { Wedge } from '../../components';
import './ClientsWidget.css';

const clients = [
    {displayLabel: false, img: 'https://lirp-cdn.multiscreensite.com/00806831/dms3rep/multi/opt/Screen+Shot+2020-11-16+at+1.47.56+PM-1920w.png', name: 'Acuity Specialty Products Group, Inc.'},
    {displayLabel: false, img: 'https://3d21ht276z2728l03m40mbmo-wpengine.netdna-ssl.com/wp-content/uploads/2021/01/Alsco_UNIFORMS-1.svg', name: 'Alsco, Inc.'},
    {displayLabel: false, img: 'https://bkco.us/wp-content/uploads/2016/11/logo.png', name: 'Buck Kreihs Marine Repair, LLC'},
    {displayLabel: false, img: 'https://www.cargill.com/image/1432075835913/cargill-logo.png', name: 'Cargill, Incorporated'},
    {displayLabel: false, img: 'https://www.catofashions.com/images/Cato-Logo-New.jpg', name: 'The Cato Corporation'},
    {displayLabel: false, img: 'https://www.rpmpizza.com/wp-content/uploads/2017/07/Pantone_White_Type_Vert.png', name: 'Domino’s Pizza, LLC'},
    {displayLabel: false, img: 'https://assets.corneliuses.com/photos/gnalley/hope-services.png', name: 'Hope Services, Inc.'},
    {displayLabel: false, img: 'https://www.mosaicco.com/images/admin/logo-project.png', name: 'The Mosaic Company'},
    {displayLabel: false, img: 'https://www.retif.com/wp-content/uploads/2019/03/Retif-Logo.png', name: 'Retif Oil & Fuel'},
    {displayLabel: false, img: 'https://www.rpmpizza.com/wp-content/uploads/2019/09/001_RPMPIzzaColor_Vert_LargeDom_est_thick.jpg', name: 'RPM Pizza, LLC'},
    {displayLabel: false, img: 'https://terminixnola.com/wp-content/uploads/2020/02/Logo125.png', name: 'Terminix Service Company, Inc'},
    {displayLabel: false, img: 'http://www.appliedrisksolutions.com/wp-content/uploads/2018/02/ars-logo-1-250x60.png', name: 'Applied Risk Solutions'},
]

const IndividualClientDisplay = props => {
    const {client} = props;
    return <div className="individual-client-container">
        <img alt="client" className="client-image" src={client.img} />
        {client.displayLabel && <h3>{client.name}</h3>}
    </div>
}

const generateClientsDisplay = (client1, client2, client3, top) => <div className="clients-container">
    {top && <div className="one-client-row">
        <IndividualClientDisplay client={client3} />
    </div>}
    <div className="two-client-row">
        <IndividualClientDisplay client={client1} />
        <IndividualClientDisplay client={client2} />
    </div>
    {!top && <div className="one-client-row">
        <IndividualClientDisplay client={client3} />
    </div>}
</div>

const generateFirstClientsDisplay = (client1, client2, client3, top, initialRef) => <div className="clients-container" ref={initialRef}>
    {top && <div className="one-client-row">
        <IndividualClientDisplay client={client3} />
    </div>}
    <div className="two-client-row">
        <IndividualClientDisplay client={client1} />
        <IndividualClientDisplay client={client2} />
    </div>
    {!top && <div className="one-client-row">
        <IndividualClientDisplay client={client3} />
    </div>}
</div>

export const ClientsWidget = () => {
    const initialRef = useRef(null);
    return <Wedge>
        <div className="carousel-container-label">
            <h1>Who we have served:</h1>
        </div>
        <div className="carousel-container">
            <Rerousel itemRef={initialRef} stop={false} interval={3000}>
                {generateFirstClientsDisplay(clients[0], clients[1], clients[2], true, initialRef)}
                {generateClientsDisplay(clients[3], clients[4], clients[5], false)}
                {generateClientsDisplay(clients[6], clients[7], clients[8], true)}
                {generateClientsDisplay(clients[9], clients[10], clients[11], false)}
            </Rerousel>
        </div>
    </Wedge>
}