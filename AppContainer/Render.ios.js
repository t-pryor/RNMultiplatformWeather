
import React from 'react';
import { Text, View, StyleSheet, TabBarIOS, NavigatorIOS } from "react-native";

var LocationListView = require ('../LocationListView/Component')

export default function render(styles) {
    return (
            <TabBarIOS
                barTintColor='#FCFFF5'
            >
                <TabBarIOS.Item
                    title="West"
                    selected={this.state.selectedTab == 'west'}
                    icon={require('../img/west-icon-smaller.png')}
                    onPress={()=> this.setState({selectedTab: 'west'})}
                >
                <NavigatorIOS
                    barTintColor='#FCFFF5'
                    style ={{
                        flex:1,
                    }}
                    initialRoute={{
                        component: LocationListView,
                        passProps: {
                            data: this.westLocations,
                            currentRegion: "west"
                        },
                        title: 'Western Canada',
                        backButtonTitle: 'Cities'
                    }}
                />
                </TabBarIOS.Item>
            <TabBarIOS.Item
                title="East"
                selected={this.state.selectedTab == 'east'}
                icon={require('../img/east-icon-smaller.png')}
                onPress={()=> this.setState({selectedTab: 'east'})}
            >
            <NavigatorIOS
                style ={{
                    flex:1
                }}
                initialRoute={{
                    component: LocationListView,
                    passProps: {
                        data: this.eastLocations,
                        curentLocation: "east"
                    },
                    title: 'Eastern Canada',
                    backButtonTitle: 'Cities'
                }}
            />
            </TabBarIOS.Item>
        </TabBarIOS>
    );
}
