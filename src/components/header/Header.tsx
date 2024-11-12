import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* <ImageBackground
        style={styles.image}
        source={require('asssets/img/header.png')} /> */}
      {/* <LinearGradient
        colors={['#ded8d1', 'white']}
        style={styles.linearGradient}></LinearGradient> */}
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
  linearGradient: {
    width: '30%',
    height: 120,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 300,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
