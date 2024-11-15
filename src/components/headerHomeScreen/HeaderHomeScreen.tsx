import React from 'react';
import {ImageBackground, StyleSheet, Text, TextInput, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon, Icons} from '../export.ts';

const HeaderHomeScreen = () => {
  return (
    <View style={styles.header}>
      <ImageBackground
        style={styles.image}
        source={require('asssets/img/wall.png')}>
        <LinearGradient
          colors={['#ded8d1', '#ded8d1']}
          style={styles.linearGradient}>
          <View style={styles.overlay}></View>
        </LinearGradient>
        <Text style={styles.title}>Set up your space easily</Text>
        <View style={styles.searchContainer}>
          <Icon color="gray" name="search" type={Icons.Ionicons} size={20} />
          <TextInput
            placeholder="Search Item"
            placeholderTextColor="gray"
            style={styles.input}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default HeaderHomeScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    zIndex: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: '90%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    color: 'black',
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.6,
  },
});
