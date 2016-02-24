import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

import profileImage from '../../images/profileImg.jpg';
import cv from './../../files/Azer_Safarov_CV_Full.pdf';
import imgIstanbul from '../../images/istanbul.jpg';
import imgMoscow from '../../images/moscow.jpg';
import imgBatumi from '../../images/batumi.jpg';
import imgTbilisi from '../../images/tbilisi.jpg';

export default class Home extends Component {

    render() {
        return (
            <div className="row no-margin cv-profile">
                <div className="container">
                    <div className="row cv-card">
                        <div className="col-lg-2 col-sm-3 col-md-4 col-xs-12 cv-profile-image fadeIn a1 animated">
                            <img src={profileImage} />
                        </div>
                        <div className="col-lg-10 col-sm-9 col-md-8 col-xs-12 cv-profile-header fadeIn a2 animated">
                            <h2>Hello, I am <b>Azer Safarov</b></h2>
                            <span>Frontend and UX/UI developer</span>
                        </div>
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <p>I am a Frontend developer with big experience of UX/UI management. I have a love of clean, modern frameworks, and I have lots of experience with different frameworks and architectures. I am a highly motivated, self-driven developer. Mainly I have focused on client side on Javascript, AngularJS, ReactJS. I always strive to extend my skills in programming and hone existing ones by self-study.</p>
                            <a href={cv}><RaisedButton backgroundColor="#2196f3" label="Download CV" secondary={true}></RaisedButton></a>
                            <a href="#/contact"><RaisedButton backgroundColor="#1EBF6E" label="Contact Me" secondary={true}></RaisedButton></a>
                        </div>
                    </div>
                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Interests</h3>
                            <div className="row cv-skills">
                                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 cv-skill">
                                    <i className="demo-icon icon-skiing" dangerouslySetInnerHTML={{__html:'&#xe800;'}} />
                                    <span>Skiing</span>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 cv-skill">
                                    <i className="demo-icon icon-bicycle" dangerouslySetInnerHTML={{__html:'&#xe801;'}} />
                                    <span>Cycling</span>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 cv-skill">
                                    <i className="demo-icon icon-skiing" dangerouslySetInnerHTML={{__html:'&#xe802;'}} />
                                    <span>Painting</span>
                                </div>
                                <div className="col-lg-2 col-md-3 col-sm-3 col-xs-3 cv-skill">
                                    <i className="demo-icon icon-skiing" dangerouslySetInnerHTML={{__html:'&#xe803;'}} />
                                    <span>Traveling</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Photos</h3>
                            <div className="row no-margin cv-images">
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <div className="cv-image-title">Istanbul - 2014</div>
                                    <img src={imgIstanbul} alt=""/>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <div className="cv-image-title">Moscow - 2013</div>
                                    <img src={imgMoscow} alt=""/>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <div className="cv-image-title">Tbilisi - 2015</div>
                                    <img src={imgTbilisi} alt=""/>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 cv-image">
                                    <div className="cv-image-title">Batumi - 2015</div>
                                    <img src={imgBatumi} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
