'use strict'

import React, {Component} from 'react';
import { ListView, Text, View, StyleSheet, TabBarIOS, NavigatorIOS } from "react-native";

export default function render() {
    return (
        <ListView
            contentInset={{
                bottom: 0
            }}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
        />
    );
}
