import React from 'react';
import Ellipse from '../../../../assets/Ellipse.svg';
import './Ellipse.css';

function EllipseBig() {
    return (
        <div className='ellipse_container big' >
            <img className='Ellipse' src={Ellipse} alt="EllipseBig" />
        </div>
    )
}

export default EllipseBig