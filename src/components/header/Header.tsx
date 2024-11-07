import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <ImageBackground
        style={styles.image}
        source={require('asssets/img/header.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {width: '100%', height: 0},
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 300,
  },
});
