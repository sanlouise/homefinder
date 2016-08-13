import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 65
  },
  heading: {
    backgroundColor: '#fce4ec',
    justifyContent: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: '#fce4ec'
  },
  image: {
    width: 430,
    height: 300,
    justifyContent: 'center'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    color: '#48BBEC',
    textAlign: 'center',
    color: '#d81b60'
  },
  title: {
    fontSize: 20,
    margin: 5,
    color: '#d81b60',
    textAlign: 'center'
  },
  description: {
    fontSize: 18,
    margin: 5,
    color: '#656565'
  }
});

class DetailView extends Component {
 
  render() {
    const property = this.props.property;
 
    const price = property.price_formatted.split(' ')[0];
 
    return (
      <View style={styles.container}>
        <Image style={styles.image}
            source={{uri: property.img_url}} />
        <View style={styles.heading}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{property.summary}</Text>
      </View>
    );
  }
}

module.exports = DetailView;