'use strict';

import React, {Component} from 'react';
import { Text, View, StyleSheet, TabBarIOS, NavigatorIOS, ListView, WebView } from "react-native";

import Render from './Render-WeatherDetailData';

class WeatherDetailData extends Component {

    constructor(props) {
        super(props);

        this.weatherDictionary = {
            'Victoria': 'https://weather.gc.ca/city/pages/bc-85_metric_e.html',
            'Vancouver': 'https://weather.gc.ca/city/pages/bc-74_metric_e.html',
            'Calgary': 'https://weather.gc.ca/city/pages/ab-52_metric_e.html',
            'Edmonton': 'https://weather.gc.ca/city/pages/ab-50_metric_e.html',
            'Saskatoon': 'https://weather.gc.ca/city/pages/sk-40_metric_e.html',
            'Toronto': 'https://weather.gc.ca/city/pages/on-143_metric_e.html',
            'Ottawa': 'https://weather.gc.ca/city/pages/on-118_metric_e.html',
            'Montreal': 'https://weather.gc.ca/city/pages/qc-147_metric_e.html',
            'Quebec City': 'https://weather.gc.ca/city/pages/qc-133_metric_e.html',
            "St. John's": 'https://weather.gc.ca/city/pages/nl-24_metric_e.html'
        }
    }

    render() {
        return Render.bind(this)(styles);
    }
}


const styles = StyleSheet.create({
  row: {
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      backgroundColor: '#FCFFF5',
      borderColor: '#335075',
      borderBottomWidth: 1,
      justifyContent: 'flex-start'
  },
  image: {
      height: 65,
      width: 107,
      borderRadius: 5,
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


module.exports = WeatherDetailData;
