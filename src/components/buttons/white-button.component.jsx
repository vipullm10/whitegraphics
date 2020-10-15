import React from 'react';
import './white-button.styles.scss';
import {Spring} from 'react-spring/renderprops';

const WhiteButton = ({value}) => (
    <Spring
        from={{opacity:0}}
        to={{opacity:1}}
    >
    {props=>
        <button style={props} className="white-btn">{value}</button>
    }
    </Spring>
);

export default WhiteButton;