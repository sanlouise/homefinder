import React, { Component } from 'react';
import Search from './App/Components/Search';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';


class HomeFinder extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.wrapper}
        initialRoute={{
          title: 'Home Finder',
          component: Search,
        }}
      />
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
  wrapper: {
    flex: 1,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HomeFinder', () => HomeFinder);
