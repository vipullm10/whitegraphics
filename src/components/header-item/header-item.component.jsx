import React from 'react';
import './header-item.styles.scss';

const HeaderItem = ({title}) => (
    <li className="header-item">{title}</li>
);

export default HeaderItem;