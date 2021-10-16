import React from 'react';
import { Wedge } from '../../components';
import { isMobile } from '../../utils';
import './SplashWidget.css'

export const SplashWidget = () => <Wedge>
    <div className="splash-container">
        <img alt="office" className={isMobile ? "full-image" : "splash-image"} src="http://www.gnalley.com/wp-content/uploads/2018/12/Severn-Exterior-photo-North-Side.jpg" />
    </div>
</Wedge>