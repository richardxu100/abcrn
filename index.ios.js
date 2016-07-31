"use strict";
import React, { Component } from 'react';
import { AppRegistry, TabBarIOS } from 'react-native'; // not cross compatible b/c tabbarIOS
import AppNavigator from './app/navigation/AppNavigator';

class abcrn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "tab1"
    }
  }

  render() {
    return (
      <TabBarIOS
        selectedTab={this.state.selectedTab}>
        <TabBarIOS.Item
          selected={this.state.selectedTab === "tab1"}
          title='Tab 1'
          onPress={() => this.setState({selectedTab: "tab1"})}>
           <AppNavigator
             initialRoute={{ident: "PeopleIndex"}}
           />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === "tab2"}
          title='Tab 2'
          onPress={() => this.setState({selectedTab: "tab2"})}>
          <AppNavigator
            initialRoute={{ident: "PersonShow",
                          person: {firstName: 'rich', lastName: 'xu', roomNumber: 31},}}
          />
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

const styles = {
  navigatorStyles: {

  }
}

AppRegistry.registerComponent('abcrn', () => abcrn);
