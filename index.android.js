/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

var AppContainer = require('./AppContainer/Component-AppContainer')

class RNMultiplatformWeather extends Component {
    render() {
     return (
         <View style={{
             flex: 1,
             backgroundColor: '#81B0A0'
         }}>
            <AppContainer />
         </View>

     );
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

AppRegistry.registerComponent('RNMultiplatformWeather', () => RNMultiplatformWeather);
