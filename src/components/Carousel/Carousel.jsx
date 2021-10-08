import React from 'react';
import { Rerousel } from 'rerousel';
import './Carousel.css';

export const CarouselComponent = ({children}, customerLogo) => {

return <Rerousel itemRef={customerLogo}>
    {children}
</Rerousel>;
}
