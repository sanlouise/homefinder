import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

class SearchResults extends Component {
 
  constructor(props) {
    super(props);
    var dataSource = new ListView.DataSource(
      {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
    this.state = {
      dataSource: dataSource.cloneWithRows(this.props.listings)
    };
  }
 
  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
          underlayColor='#dddddd'>
        <View>
          <Text>{rowData.title}</Text>
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