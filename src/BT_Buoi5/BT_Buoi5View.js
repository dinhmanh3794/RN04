import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export default class BT_Buoi5View extends Component {
  state = { iconSelected: null }

  icons = [
    require('../images/angry.png'),
    require('../images/care.png'),
    require('../images/haha.png'),
    require('../images/like.png'),
    require('../images/love.png'),
    require('../images/sad.png')
  ]

  renderIcon = (icon, index) => {
    return (
      <TouchableOpacity
        onPress={() => this.handleTouchIcon(icon)}
        key={`${index}`}
      >
        <Image source={icon} style={styles.icon} />
      </TouchableOpacity>
    );
  }

  handleTouchIcon = (icon) => {
    this.setState({ iconSelected: icon })
  }

  render() {
    const { iconSelected } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Bạn đang cảm thấy như thế nào?</Text>
        {iconSelected !== null ? <Image source={iconSelected} style={styles.iconsSelected} /> : null }
        <View style={styles.listIconContainer}>
          {this.icons.map((icon, index) => this.renderIcon(icon, index))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt: {
    fontSize: 20,
    fontWeight: '600'
  },
  listIconContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: 20
  },
  icon: {
    height: 40,
    width: 40,
    margin: 10
  },
  iconsSelected: {
    height: 150,
    width: 150,
    marginVertical: 20
  }
});
