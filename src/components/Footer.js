import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="cv-footer">
                <div className="row no-margin">
                    <div className="container fadeIn a2 animated">
                        <div className="col-lg-8 col-sm-7 col-md-6 col-xs-12">
                            Copyright 2016 - Azer Safarov. All Rights Reserved
                        </div>
                        <div className="col-lg-4 col-sm-5 col-md-6 col-xs-12">
                            <a href="https://github.com/gramulos"><i className="fa fa-github"></i></a>
                            <a href="https://www.linkedin.com/in/azersafarov"><i className="fa fa-linkedin"></i></a>
                            <a href="https://www.youtube.com/c/AzerSafarov"><i className="fa fa-youtube-play"></i></a>
                            <a href="https://www.facebook.com/azer.safarov"><i className="fa fa-facebook-official"></i></a>
                            <a href="https://plus.google.com/+AzerSafarov"><i className="fa fa-google-plus"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}