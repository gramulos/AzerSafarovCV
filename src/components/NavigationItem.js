import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import Ink from 'react-ink';

export default class NavigationItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Link to={this.props.link}>
                <li className="cv-navigation-item">
                    <i className="material-icons">{this.props.icon ? this.props.icon : ""}</i>
                    {this.props.text}
                    <Ink />
                </li>
            </Link>
        )
    }
}