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

  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
  },

  contentcontainer: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    width: null,
    height: null
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
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
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
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: 'london',
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
          <Text style={styles.description}>
            Find your dream home!
          </Text>
          <Text style={styles.description}>
            Search by place-name, postcode or search near your location.
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