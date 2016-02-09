'use strict';

import React, { Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import SimpleMap from './SimpleMap';
import dateFormat from 'dateformat';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";

import profileImage from '../../images/profileImg.jpg';

const GoogleApiKey = 'AIzaSyDaTAno-dBxwq0fKN__kqm0qHtaZ5yaTZU';

export default class Contact extends Component {

  render () {
    let markers = [
      {position: {lat: 40.381846, lng: 49.853927}, key: 'Azer Safarov'}
    ]

    let now = new Date();

    return (
      <div className="row no-margin cv-profile">
        <div className="container">
          <div className="row cv-card">
            <div className="col-xs-12 cv-profile-text fadeIn a2 animated">
              <h3>Contact info</h3>

              <div id="map">
                <section className='map-container'>
                  <GoogleMapLoader
                    containerElement={<div {...this.props} style={{ height: '100%' }} />}
                    googleMapElement={
                      <GoogleMap
                        disableDefaultUI={true}
                        defaultZoom={5}
                        defaultCenter={{lat: 40.3896884, lng: 49.8494403}}>
                        {markers.map((marker, index) => {return (<Marker {...marker}/>)})}
                      </GoogleMap>
                    }
                  />
                </section>
              </div>
              <div className="row no-margin cv-contact-time">
                Current time in Baku, Azerbaijan: {dateFormat(now, "h:MM TT")}
              </div>
              <div className="row no-margin cv-contact">
                <li><i className="fa fa-envelope"></i> gramulos@gmail.com</li>
                <li><i className="fa fa-phone"></i> +994 55 339 2243</li>
                <li><i className="fa fa-skype"></i> mr.hellmuth</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
