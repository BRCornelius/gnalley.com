import React, {useRef} from 'react';
import { Rerousel } from 'rerousel';
import { Wedge } from '../../components';
import { isMobile, clients } from '../../utils';
import './ClientsWidget.css';

const IndividualClientDisplay = ({client}) => <div className="individual-client-container">
        <img alt="client" className={isMobile ? "mobile-client-image" : "client-image"} src={client.img} />
        {client.displayLabel && <h3>{client.name}</h3>}
    </div>

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