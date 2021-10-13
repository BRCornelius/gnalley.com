import React from 'react';
import { isMobile } from '../../utils/browserUtils';
import './Wedge.css';

export const Wedge = ({children}) => <div className={isMobile ? "mobile-wedge-container" : "Wedge-container"}>{children}</div>
