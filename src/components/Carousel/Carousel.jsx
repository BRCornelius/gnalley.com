import React from 'react';
import { Rerousel } from 'rerousel';
import './Carousel.css';

export const CarouselComponent = ({children}, initialRef) => {

return <Rerousel itemRef={initialRef}>
    {children}
</Rerousel>;
}
