import React, { useRef } from 'react';
import {CarouselComponent as Carousel, Widget} from '../../components';
import './MockSecondWidget.css';

export const MockSecondWidget = () => {
    const customerLogo = useRef(null);
    return <Widget>
        <div className="second-container">
            <Carousel customerLogo={customerLogo}>
                <img alt="first" src="http://placekitten.com/200/300" ref={customerLogo} />
                <img alt="second" src="http://placekitten.com/200/300" />
                <img alt="third" src="http://placekitten.com/200/300" />
                <img alt="fourth" src="http://placekitten.com/200/300" />
            </Carousel>
        </div>
    </Widget>
}