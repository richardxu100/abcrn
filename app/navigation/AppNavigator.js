"use strict";
import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import PeopleIndexScreen from '../screens/PeopleIndexScreen';
import PersonShowScreen from '../screens/PersonShowScreen';

const people = [
  {firstName: 'rich', lastName: 'xu', roomNumber: 31},
  {firstName: 'pat', lastName: 'wu', roomNumber: 24},
  {firstName: 'hannah', lastName: 'fredericks', roomNumber: 59},
];

export default class AppNavigator extends Component {

  renderScene(route, navigator) {
    const globalNavigatorProps = { navigator }

    switch(route.ident) {
      case "PeopleIndex":
        return (
          <PeopleIndexScreen {...globalNavigatorProps} />
        )
      case "PersonShow":
        return (
          <PersonShowScreen
            {...globalNavigatorProps}
            person={route.person}
          />
        )
      default:
        return (
          <Text>You Messed Something Up</Text>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this.renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
        })}
      />
    )
  }
}

const styles = {
  navigatorStyles: {

  }
}
