import React from 'react';

import burgerLogo from '../../assets/img/burger-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="myBurger" />
    </div>
);

export default logo;