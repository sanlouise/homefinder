import React, { Component } from 'react';
import DetailView from './DetailView';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create({
  thumb: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#d81b60'
  },
  price: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#d81b60'
  },
  title: {
    fontSize: 20,
    color: '#656565'
  },
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  }
});

class SearchResults extends Component {
 
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.title !== r2.title});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }

	rowPressed(propertyTitle) {
	  var property = this.props.listings.filter(prop => prop.title === propertyTitle)[0];
	 
	  this.props.navigator.push({
	    title: "Your New Home?",
	    component: DetailView,
	    passProps: {property: property}
	  });
	}
 
	renderRow(rowData, sectionID, rowID) {
	  var price = rowData.price_formatted.split(' ')[0];
	 
	  return (
	    <TouchableHighlight onPress={() => this.rowPressed(rowData.title)}
	        underlayColor='#fce4ec'>
	      <View>
	        <View style={styles.rowContainer}>
	          <Image style={styles.thumb} source={{ uri: rowData.img_url }} />
	          <View  style={styles.textContainer}>
	            <Text style={styles.price}>{price}</Text>
	            <Text style={styles.title}
	                  numberOfLines={3}>{rowData.title}</Text>
	          </View>
	        </View>
	        <View style={styles.separator}/>
	      </View>
	    </TouchableHighlight>
	  );
	}
 
  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}/>
    );
  }
 
}

module.exports = SearchResults;