import React, { Component } from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

import Auxi from '../Auxi/Auxi';
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
                <Toolbar
                    isAuth={this.props.isAuthentitacted}
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={this.props.isAuthentitacted}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthentitacted: state.auth.token !== null
    }
};

export default connect(mapStateToProps)(Layout);