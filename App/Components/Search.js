import React, { Component } from 'react';
import SearchResults from './SearchResults';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

const styles = StyleSheet.create({

  title: {
    fontSize: 45,
    textAlign: 'center',
    color: '#d81b60'
  },
  undertitle: {
    marginBottom: 95,
    fontSize: 45,
    textAlign: 'center',
    color: '#d81b60'
  },
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  contentcontainer: {
    justifyContent: 'center',
    marginTop: 210,
    padding: 40,
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
    height: 46,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#d81b60',
    borderColor: '#d81b60',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 20,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 46,
    padding: 10,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#d81b60',
    borderRadius: 4,
    color: '#d81b60',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  normal: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 20
  }
});

function urlForQueryAndPage(key, value, pageNumber) {
  var data = {
      country: 'uk',
      pretty: '1',
      encoding: 'json',
      listing_type: 'buy',
      action: 'search_listings',
      page: pageNumber
  };
  data[key] = value;
 
  var querystring = Object.keys(data)
    .map(key => key + '=' + encodeURIComponent(data[key]))
    .join('&');
 
  return 'http://api.nestoria.co.uk/api?' + querystring;
};


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      isLoading: false,
      message: ''
    };
  }

  onSearchInputChange(event) {
    console.log('onSearchInputChange');
    this.setState({ searchString: event.nativeEvent.text });
    console.log(this.state.searchString);
  }

  onSearchPressed() {
    var query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({ isLoading: true });
    fetch(query)
    .then(response => response.json())
    .then(json => this._handleResponse(json.response))
    .catch(error =>
       this.setState({
        isLoading: false,
        message: 'Oops, an error occurred. ' + error
     }));
  }

  _handleResponse(response) {
    this.setState({ isLoading: false , message: '' });
    if (response.application_response_code.substr(0, 1) === '1') {
      this.props.navigator.push({
      title: 'Results',
      component: SearchResults,
      passProps: {listings: response.listings}
    });
    } else {
      this.setState({ message: 'Oops, something went wrong.'});
    }
  }

  onLocationPressed() {
  navigator.geolocation.getCurrentPosition(
    location => {
      var search = location.coords.latitude + ',' + location.coords.longitude;
      this.setState({ searchString: search });
      var query = urlForQueryAndPage('centre_point', search, 1);
      this._executeQuery(query);
    },
    error => {
      this.setState({
        message: 'Oops, something went wrong: ' + error
      });
    });
  }
   
  render() {
    const spinner = this.state.isLoading ? ( 
      <ActivityIndicator 
        color="#fff"
        size="large" /> ) :
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
              onChange={this.onSearchInputChange.bind(this)}
              placeholder='Search a city or ZIP code'/>
            <TouchableHighlight 
              style={styles.button} 
              underlayColor='#99d9f4'
              onPress={this.onSearchPressed.bind(this)}
            >
              <Text style={styles.buttonText}>Go</Text>
            </TouchableHighlight>
          </View>

          <Text style={styles.normal}>
            or
          </Text>

          <TouchableHighlight style={styles.button} 
            underlayColor='#99d9f4'
            onPress={this.onLocationPressed.bind(this)}>
            <Text style={styles.buttonText}>Search Nearby Homes</Text>
          </TouchableHighlight>
          
          {spinner}

          <Text style={styles.description}>{this.state.message}</Text>

        </View>
      </Image>
    );
  }
}

module.exports = Search;