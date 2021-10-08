import React, { useRef } from 'react';
import { Rerousel } from 'rerousel';
import {Widget} from '../../components';
import './MockSecondWidget.css';

export const MockSecondWidget = () => {
    const initialRef = useRef(null);
    return <Widget>
        <div className="second-container">
            <Rerousel itemRef={initialRef} interval={1500} stop={false}>
                <img alt="first" src="http://placekitten.com/200/300" ref={initialRef} />
                <img alt="second" src="http://placekitten.com/200/300" />
                <img alt="third" src="http://placekitten.com/200/300" />
                <img alt="fourth" src="http://placekitten.com/200/300" />
            </Rerousel>
        </div>
    </Widget>
}