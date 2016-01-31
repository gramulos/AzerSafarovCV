'use strict';

import React, { Component } from 'react';
import Chart from '../../components/chart';
import RaisedButton from 'material-ui/lib/raised-button';

import i_react from '../../images/i_react.png';
import i_less from '../../images/i_less.png';
import i_sass from '../../images/i_sass.png';
import i_git from '../../images/i_git.png';
import i_js from '../../images/i_js.png';
import i_html from '../../images/i_html.png';
import i_css from '../../images/i_css.png';
import i_jquery from '../../images/i_jquery.png';

export default class Skills extends Component {
    render() {
        return (
            <div className="row no-margin cv-profile">
                <div className="container">
                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Skills</h3>

                            <div className="row no-margin">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 cv-skill-box">
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Web Development</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">React, Redux, Flux, AngularJS, ASP.NET Web API, HTML5, CSS3, LESS, SASS, Bootstrap, Material UI</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Programming Languages</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">JavaScript, C#</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Source Controls</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">Git, Team Foundation Server</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Based Knowledge</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">OOP, SOLID, TDD, Multithreading, Scrum Methodology</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Mobile Development</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">Android</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Database</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">Microsoft SQL, MySQL, MongoDB</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Graphic editors</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">Adobe Photoshop, Corel DRAW</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Web Servers</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">Apache, IIS</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Other Technologies</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">Spring, Windows Form</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">OS Systems</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">Windows, OS X</div>
                                    </div>
                                    <div className="row cv-skills-row">
                                        <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 no-padding cv-skill-heading">Development Environments</div>
                                        <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12 no-padding cv-skill-description">WebStorm, Visual Studio, Sublime Text, Atom</div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                    <Chart />
                                </div>
                            </div>
                            <div className="row cv-skills-images">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={i_git} alt="git"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={i_css} alt="css"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={i_html} alt="html"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={i_jquery} alt="jquery"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={i_js} alt="js"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={i_less} alt="less"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={i_react} alt="react"/>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                                    <img src={i_sass} alt="sass"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
