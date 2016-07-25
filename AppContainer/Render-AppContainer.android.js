
import React from 'react';
import { Text, View, StyleSheet, TabBarIOS, Navigator, DrawerLayoutAndroid } from "react-native";

var LocationListView = require ('../LocationListView/Component-LocationListView')

export default function render(styles) {

    var navigationView = ( <View style={{flex: 1, backgroundColor: '#333'}}></View> );

     return (
         <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
                        Hello
                    </Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>
                        World!
                    </Text>
                </View>
            </DrawerLayoutAndroid>
        );
}
