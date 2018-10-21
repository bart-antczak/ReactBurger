import React, { Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import Auxi from '../../hoc/Auxi';
import classes from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
                return {showSideDrawer: !prevState.showSideDrawer}
            });
    };

    render () {
        return (
            <Auxi>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
};

export default Layout;