import React from 'react';
import Ellipse from '../../../../assets/Ellipse.svg';
import './Ellipse.css';

function EllipseMid() {
    return (
        <div className='ellipse_container mid' >
            <img className='Ellipse' src={Ellipse} alt="EllipseMid" />
        </div>
    )
}

export default EllipseMid;