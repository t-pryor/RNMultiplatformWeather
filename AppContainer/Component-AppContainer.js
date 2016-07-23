'use strict'

import React, {Component} from 'react';
import { Text, View, StyleSheet, TabBarIOS, NavigatorIOS } from "react-native";

import Render from './Render-AppContainer'

var LocationListView = require ('../LocationListView/Component-LocationListView')
// var westLocations = [ 'Victoria', 'Vancouver', 'Calgary', 'Edmonton', 'Saskatoon']
// var eastLocations = [ ]

class AppContainer extends Component {

    constructor(props) {
        super(props);

        this.westLocationsX = [ 'Victoria', 'Vancouver', 'Calgary', 'Edmonton', 'Saskatoon']; // could make each of these objects
        this.eastLocationsX = ['Toronto', 'Ottawa', 'Montreal', 'Quebec City', "St. John's"];

        this.westLocations = new Array();
        this.westLocations.push({name: 'Victoria', image: '../img/Victoria.png'},);
        this.westLocations.push({name: 'Vancouver', image: '../img/Vancouver.png'});
        this.westLocations.push({name: 'Calgary', image: '../img/Calgary.png'});
        this.westLocations.push({name: 'Edmonton', image: '../img/Edmonton.png'});
        this.westLocations.push({name: 'Saskatoon', image: '../img/Saskatoon.png'});


        this.eastLocations = new Array();
        this.eastLocations.push({name: 'Toronto', image: '../img/Toronto.png'})
        this.eastLocations.push({name: 'Ottawa', image: '../img/Ottawa.png'})
        this.eastLocations.push({name: 'Montreal', image: '../img/Montreal.png'})
        this.eastLocations.push({name: 'Quebec City', image: '../img/QuebecCity.png'})
        this.eastLocations.push({name: "St. John's", image: '../img/StJohns.png'})


        // this.westlocations = [
        //     {name: 'Victoria', image: './img/Victoria.png'},
        //     {name: 'Vancouver', image: './img/Vancouver.png'},
        //     {name: 'Calgary', image: './img/Calgary.png'},
        //     {name: 'Edmonton', image: './img/Edmonton.png'},
        //     {name: 'Saskatoon', image: './img/Saskatoon.png'}
        // ];

        // this.eastLocations = [
        //     {name: 'Toronto', image: './img/Toronto.png'},
        //     {name: 'Ottawa', image: './img/Ottawa.png'},
        //     {name: 'Montreal', image: './img/Montreal.png'},
        //     {name: 'Quebec City', image: './img/QuebecCity.png'},
        //     {name: "St. John's", image: './img/StJohns.png'}
        // ];

        this.state = {
            selectedTab: 'west'
        }
    }

    render() {
        return Render.bind(this)(styles);
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = AppContainer;
