'use strict';

import React, { Component } from 'react';

import NavigationItem from './NavigationItem';
import Paper from 'material-ui/lib/paper';
import Ink from 'react-ink';

export default class NavigationBar extends Component {
    render() {
        return (
            <Paper className="row no-margin cv-navigation fadeIn a2 animated" zDepth={1} rounded={false}>
                <nav className="container cv-desktop-navigation">
                    {this.renderMenuItems(false)}
                </nav>

                <nav className="cv-mobile-navigation">
                    <ul className="no-padding cv-mobile-main no-margin">
                        <li><i className="fa fa-bars"></i> Azer Safarov
                            <ul className="no-padding cv-mobile-sub no-margin">
                                {this.renderMenuItems(true)}
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Paper>
        );
    }

    renderMenuItems(isMobile) {
        var navigation = [
            {"title": "Profile", "link": "/", "icon": "person"},
            {"title": "Skills", "link": "/skills", "icon": "palette"},
            {"title": "Work experience", "link": "/works", "icon": "code"},
            {"title": "Portfolio", "link": "/portfolio", "icon": "view_carousel"},
            {"title": "Education", "link": "/education", "icon": "school"},
            {"title": "contact", "link": "/contact", "icon": "email"}
        ];

        if(!isMobile) {
            return navigation.map(function (menuItem) {
                return <NavigationItem text={menuItem.title} link={menuItem.link} key={menuItem.title}/>
            });
        }
        else {
            return navigation.map(function (menuItem) {
                return <NavigationItem text={menuItem.title} link={menuItem.link} key={menuItem.title} icon={menuItem.icon}/>
            });
        }
    }
}
