'use strict';

import React, {Component} from 'react';
import { AppRegistry, ListView, Text, View, TouchableHighlight, StyleSheet, Image, NavigatorIOS } from "react-native";

import Render from './Render'

var WeatherDetailData = require('../WeatherDetailData/Component')

class LocationListView extends Component {
    // Initialize the hardcoded data
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(props.data)
        }
    }


    pressRow(rowDataName) {

        this.props.navigator.push({
            title: rowDataName,
            component: WeatherDetailData,
            passProps: {
                pushEvent: rowDataName
            }
        });




    }

    render() {
        return Render.bind(this)(styles);
    }

    renderRow(rowData) {

        let photoString = this._getCity(rowData['name']);

        if (this.props.currentRegion == "west") {
            console.log("west locations");
        } else {
            console.log("east locations");
        }
        console.log(rowData['image']);
        //let photoString = require(rowData['image']);

        return (
            <TouchableHighlight
                onPress={()=> {this.pressRow(rowData['name'])}}
                underlayColor='#ddd'
            >
            <View style={styles.row}>
            <Image
                source={photoString}
                style={styles.image}
            />

            <Text style={{fontSize: 30}}> {rowData['name']} </Text>
            </View>
            </TouchableHighlight>
        );


    }



    _getCity(cityname) {
        switch(cityname) {
            case 'Victoria':
                return require('../img/Victoria.png');
                break;
            case 'Vancouver':
                return require('../img/Vancouver.png');
                break;
            case 'Calgary':
                return require('../img/Calgary.png');
                break;
            case 'Edmonton':
                return require('../img/Edmonton.png');
                break;
            case 'Saskatoon':
                return require('../img/Saskatoon.png');
                break;
            case 'Toronto':
                return require('../img/Toronto.png');
                break;
            case 'Ottawa':
                return require('../img/Ottawa.png');
                break;
            case 'Montreal':
                return require('../img/Montreal.png');
                break;
            case 'Quebec City':
                return require('../img/QuebecCity.png');
                break;
            case "St. John's":
                return require('../img/StJohns.png');
                break;
        }

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



module.exports = LocationListView;
