'use strict';

import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Education extends Component {

    render() {
        return (
            <div className="row no-margin cv-profile">
                <div className="container">
                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Education</h3>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">Azerbaijan, Baku – Baku State University</div>
                                <div className="col-xs-12 cv-job-duration">BSc Computer Science (2007 – 2011)</div>
                            </div>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">Azerbaijan, Baku – Baku State University</div>
                                <div className="col-xs-12 cv-job-duration">MSc Computer Science (2012 – 2015)</div>
                            </div>
                        </div>
                    </div>

                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Certification</h3>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">MS: Programming in C# - Microsoft, License F252-8054</div>
                                <div className="col-xs-12 cv-job-duration">April 2015</div>
                            </div>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">MCPS: Microsoft Certified Professional - Microsoft, License F252-8056</div>
                                <div className="col-xs-12 cv-job-duration">April 2015</div>
                            </div>
                        </div>
                    </div>

                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Courses</h3>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">Front End Web Development: Get Started (by Joe Eames)</div>
                                <div className="col-xs-12 cv-job-duration">Pluralsight</div>
                            </div>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">JavaScript the Good Parts (by Douglas Crockford)</div>
                                <div className="col-xs-12 cv-job-duration">Pluralsight</div>
                            </div>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">Build Web Apps with React JS and Flux (by Stephen Grider)</div>
                                <div className="col-xs-12 cv-job-duration">Udemy</div>
                            </div>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">Modern React with Redux (by Stephen Grider)</div>
                                <div className="col-xs-12 cv-job-duration">Udemy</div>
                            </div>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">JavaScript: Understanding the Weird Parts (by Anthony Alicea)</div>
                                <div className="col-xs-12 cv-job-duration">Udemy</div>
                            </div>

                            <div className="row cv-education-box">
                                <div className="col-xs-12 cv-job-title">Getting Started with Redux (by Dan Abramov)</div>
                                <div className="col-xs-12 cv-job-duration">Egghead</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
