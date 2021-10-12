import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Rerousel } from 'rerousel';
import {Wedge} from '../../components';
import './TeamWidget.css';

export const TeamWidget = () => {
    const initialRef = useRef(null);
    const history = useHistory();
    const handleClick = () => {
        history.push("/team");
    }
    return <Wedge>
        <div className="carousel-container-label" onClick={handleClick}>
            <h1>Meet our Team:</h1>
        </div>
        <div className="carousel-container">
            <Rerousel itemRef={initialRef} stop={false} interval={2000}>
                <img alt="first" className="photo" src="http://www.gnalley.com/wp-content/uploads/2014/09/GeorgeDSC_4698.jpg" ref={initialRef} />
                <img alt="second" className="photo" src="http://www.gnalley.com/wp-content/uploads/2014/09/DSC_2585.jpg" />
                <img alt="third" className="photo" src="http://www.gnalley.com/wp-content/uploads/2014/09/DSC_2415.jpg" />
                <img alt="fourth" className="photo" src="http://www.gnalley.com/wp-content/uploads/2014/09/DSC_2350.jpg" />
                <img alt="fourth" className="photo" src="http://www.gnalley.com/wp-content/uploads/2014/08/DSC_2488.jpg" />
            </Rerousel>
        </div>
    </Wedge>
}