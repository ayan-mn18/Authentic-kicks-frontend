import React from 'react';
import Ellipse from '../../../../assets/Ellipse.svg';
import './Ellipse.css';

function EllipseSmall() {
    return (
        <div className='ellipse_container small' >
            <img className='Ellipse' src={Ellipse} alt="EllipseSmall" />
        </div>
    )
}

export default EllipseSmall;