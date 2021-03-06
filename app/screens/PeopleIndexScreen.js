"use strict";
import React, { Component } from 'react';
import { View, Text, AppRegistry, ListView, StyleSheet, TouchableOpacity, Navigator } from 'react-native';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
import StatusBarBackground from '../components/StatusBarBackground';
import ViewContainer from '../components/ViewContainer';

const people = [
  {firstName: 'rich', lastName: 'xu', roomNumber: 31},
  {firstName: 'pat', lastName: 'wu', roomNumber: 24},
  {firstName: 'hannah', lastName: 'fredericks', roomNumber: 59},
];

export default class PeopleIndexScreen extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      peopleDataSource: ds.cloneWithRows(people)
    };
  }

  render() {
    return (
      <ViewContainer>
        <StatusBarBackground style={{backgroundColor: 'honeydew'}}/>
        <ListView
          style={{marginTop: 100}}
          dataSource={this.state.peopleDataSource}
          /* renderWithRows={(person) => this.renderPersonRow(person)} */
          renderRow={(person) => { return this.renderPersonRow(person) }}
        />
      </ViewContainer>
    )
  }

  renderPersonRow(person) {
    console.count('rendering person');
    return (
      <TouchableOpacity style={styles.personRow} onPress={(event) => this.navigateToPersonShow(person)}>
        <Text style={styles.personName}>
          {`${_.capitalize(person.firstName)} ${_.capitalize(person.lastName)}`}
        </Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" style={styles.personMoreIcon} />
      </TouchableOpacity>
    )
  }

  navigateToPersonShow(person) {
    this.props.navigator.push({
      ident: "PersonShow",
      person,
      sceneConfig: Navigator.SceneConfigs.FloatFromBottom
    })
  }
}

const styles = StyleSheet.create({
  personRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50
  },
  personName: {
    // color: 'blue',
    marginLeft: 25,
  },
  personMoreIcon: {
    color: 'green',
    // height: 20,
    // width: 20,
    marginRight: 25,
  }
});
