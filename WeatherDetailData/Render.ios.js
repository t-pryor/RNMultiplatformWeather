'use strict'

import React, {Component} from 'react';
import { Text, View, StyleSheet, TabBarIOS, NavigatorIOS,WebView } from "react-native";



export default function render() {
    let chosenCity = this.props.pushEvent;
    let uriString = this.weatherDictionary[chosenCity];

    return (
        <WebView
            source={{uri: uriString}}
            style={{marginTop: 10}}
        />
    );

}
