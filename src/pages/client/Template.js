'use strict';

import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import {connect} from 'react-redux';

import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import HomePage from './Home';

import './Site.less';

export default class ClientPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(true) {
            return (
                <div className="site-root-container eg-activate">
                    <NavigationBar />
                    <div className="cv-body">
                        {this.renderContent()}
                    </div>
                    <Footer />
                </div>
            );
        }
        else {
            return <Loader />
        }
    }

    renderContent() {
        if(this.props.children) {
            return this.props.children
        }
        else {
            return <HomePage />
        }
    }
}