'use strict';

import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';

import mhm from '../../images/mhm.png';
import accoders from '../../images/accoders.png';
import ict from '../../images/ict.png';

export default class Works extends Component {

    render() {
        return (
            <div className="row no-margin cv-profile">
                <div className="container">
                    <div className="row cv-card">
                        <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
                            <h3>Work experience</h3>

                            <div className="row">
                                <div className="col-xs-12 cv-job-img"><img src={mhm}/></div>
                                <div className="col-xs-12 cv-job-title">
                                    Full Stack Developer at Data Processing Center of Ministry of Communications and High Technologies, Azerbaijan
                                </div>
                                <div className="col-xs-12 cv-job-duration">
                                    October 2013 – Present
                                </div>
                                <div className="col-xs-12 cv-job-description">
                                    <li><i className="material-icons">done</i>Development and maintenance of existing PKI system.</li>
                                    <li><i className="material-icons">done</i>Responsible for implementation and design of new products and web applications in the organization.</li>
                                    <li><i className="material-icons">done</i>Client and Server side development using the latest frameworks and technologies (JavaScript, Node.JS, ASP Web API, AngularJS, React.JS)</li>
                                    <li><i className="material-icons">done</i>Working in Agile environment.</li>
                                    <li><i className="material-icons">done</i>Working with Web Services (REST and SOAP), Certificates, Cryptographic API's, Smart Cards, etc.</li>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 cv-job-img"><img src={accoders}/></div>
                                <div className="col-xs-12 cv-job-title">
                                    Cofounder and leading software designer at ACCODERS LLC, Azerbaijan
                                </div>
                                <div className="col-xs-12 cv-job-duration">
                                    October 2012 – October 2015
                                </div>
                                <div className="col-xs-12 cv-job-description">
                                    <li><i className="material-icons">done</i>Developing of web sites and services.</li>
                                    <li><i className="material-icons">done</i>UI/UX management.</li>
                                    <li><i className="material-icons">done</i>Working with startup projects.</li>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 cv-job-img"><img src={mhm}/></div>
                                <div className="col-xs-12 cv-job-title">
                                    CA Administrator at Data Processing Center of Ministry of Communications and High Technologies, Azerbaijan
                                </div>
                                <div className="col-xs-12 cv-job-duration">
                                    October 2012 – October 2013
                                </div>
                                <div className="col-xs-12 cv-job-description">
                                    <li><i className="material-icons">done</i>Maintenance of existing PKI system.</li>
                                    <li><i className="material-icons">done</i>Administration of databases.</li>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-xs-12 cv-job-img"><img src={ict}/></div>
                                <div className="col-xs-12 cv-job-title">
                                    Senior laboratory at Institute of Information Technology, National Academy of Sciences, Azerbaijan
                                </div>
                                <div className="col-xs-12 cv-job-duration">
                                    April 2010 – October 2010
                                </div>
                                <div className="col-xs-12 cv-job-description">
                                    <li><i className="material-icons">done</i>Support and maintenance of existing ‘EPrints’ system</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
