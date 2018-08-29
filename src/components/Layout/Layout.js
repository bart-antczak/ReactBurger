import React from 'react';

import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';

const layout = (props) => (
    <Auxi>
        <div>Toolbar, SideDrawer</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxi>

);

export default layout;