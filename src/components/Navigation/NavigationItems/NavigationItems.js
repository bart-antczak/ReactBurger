import React from 'react';
//import {Link} from 'react-router-dom';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        { props.isAuthentitacted ? <NavigationItem link="/orders">Orders</NavigationItem> : null }
        { props.isAuthentitacted
            ? <NavigationItem link="/logout">Logout</NavigationItem>
            : <NavigationItem link="/auth">Authenticate</NavigationItem> }
    </ul>
);

export default navigationItems;