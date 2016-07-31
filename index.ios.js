"use strict";
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
import PeopleIndexScreen from './app/screens/PeopleIndexScreen';
import PersonShowScreen from './app/screens/PersonShowScreen';
import AppNavigator from './app/navigation/AppNavigator';

class abcrn extends Component {

  render() {
    return (
      <AppNavigator />
    )
  }
}

const styles = {
  navigatorStyles: {

  }
}

AppRegistry.registerComponent('abcrn', () => abcrn);
