'use strict';

import React, { Component } from 'react';

import supermarket from '../../images/supermarket.jpg';
import summerbreeze from '../../images/summerbreeze.jpg';
import soschidlder from '../../images/SOSChildrenAzerbaijan.jpg';
import karaoke from '../../images/EasyKaraoke.jpg';
import trainer from '../../images/trainer.jpg';
import university from '../../images/university.jpg';
import epsilon from '../../images/epsilon.jpg';

export default class Portfolio extends Component {

    render() {
        return (
            <div className="row no-margin cv-profile">
                <div className="container">
                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Product design - WEB</h3>
                            <div className="row no-margin cv-images">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <img src={supermarket} alt=""/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <img src={summerbreeze} alt=""/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <img src={soschidlder} alt=""/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <img src={karaoke} alt=""/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <img src={university} alt=""/>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <img src={epsilon} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Product design - Desktop</h3>
                            <div className="row no-margin cv-images">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <img src={trainer} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
