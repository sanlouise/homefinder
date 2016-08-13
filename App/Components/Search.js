import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image
} from 'react-native';

const styles = StyleSheet.create({

  title: {
    fontSize: 35,
    textAlign: 'center',
    color: '#d81b60'
  },
  undertitle: {
    marginBottom: 90,
    fontSize: 40,
    textAlign: 'center',
    color: '#d81b60'
  },
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },
  contentcontainer: {
    justifyContent: 'center',
    marginTop: 250,
    padding: 20,
    width: null,
    height: null,
    backgroundColor:'transparent'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d81b60',
    borderColor: '#d81b60',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d81b60',
    borderRadius: 8,
    color: '#d81b60',
    backgroundColor: 'white',
    justifyContent: 'center'
  }
});


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'New York, San Francisco..',
      isLoading: false,
      message: ''
    };
  }

  render() {
    var spinner = this.state.isLoading ?
    ( <ActivityIndicatorIOS
        size='large'/> ) :
    ( <View/>);
    return (
      <Image source={require('./Common/home-finder.gif')} style={styles.container}>
        <View style={styles.contentcontainer}>
          <Text style={styles.title}>
            Find your
          </Text>
          <Text style={styles.undertitle}>
            Dream Home
          </Text>


          <View style={styles.flowRight}>
            <TextInput
              style={styles.searchInput}
              value={this.state.searchString}
              placeholder='Search via name or postcode'/>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4'
                >
              <Text style={styles.buttonText}>Go</Text>
            </TouchableHighlight>
          </View>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'
              >
            <Text style={styles.buttonText}>Location</Text>
          </TouchableHighlight>
          
          {spinner}
          <Text style={styles.description}>{this.state.message}</Text>
        </View>
      </Image>
    );
  }
}

module.exports = Search;