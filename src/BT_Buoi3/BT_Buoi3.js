import React, { Component } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';

export default class BTBuoi3View extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.yellowView} />
          <View style={styles.yellowView} />
        </View>
        <View style={styles.footerView}>
          <View style={{flex: 1}}>
            <View style={styles.greenView} />
            <View style={styles.greenView} />
          </View>
          <View style={{flex: 1}}>
            <View style={styles.greenView} />
            <View style={styles.greenView} />
          </View>
        </View>
      </View>
    );
  }
}

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerView: {
    flex: 1,
    backgroundColor: '#A1c99A',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    justifyContent: 'space-around'
  },
  footerView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#c8c8fA',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: 20
  },
  yellowView: {
    flex: 1,
    backgroundColor: '#ffffc2',
    marginVertical: 40,
    marginHorizontal: 20,
    borderRadius: 15
  },
  greenView: {
    flex: 1,
    backgroundColor: '#4f82c0',
    borderRadius: 15,
    margin: 20
  }
});