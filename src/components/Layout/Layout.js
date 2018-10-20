import React from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';

const layout = (props) => (
    <Auxi>
        <SideDrawer/>
        <Toolbar/>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxi>

);

export default layout;