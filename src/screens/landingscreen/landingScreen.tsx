/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {secondary} from 'constants/Colors.ts';

const LandingScreen = ({navigation}: {navigation: any}) => {
  return (
    <ImageBackground
      source={require('asssets/img/wall.png')}
      style={styles.container}>
      <LinearGradient
        colors={[
          '#ffeedf',
          'transparent',
          'transparent',
          'transparent',
          'transparent',
          'gray',
        ]}
        style={styles.linear}>
        <View style={styles.imagebackground}>
          <Image
            source={require('asssets/img/arwallpaper.png')}
            style={{width: '140%', height: 200, marginRight: 190}}
          />
        </View>
        <View style={styles.logoContainer}>
          <LinearGradient
            colors={['transparent', 'white']}
            style={styles.box}
          />
          <Image
            source={require('asssets/img/arfy.png')}
            style={{width: 170, height: 110}}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Set up your home with ease.</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Signin')}
          style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  linear: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  imagebackground: {
    width: '70%',
    height: 580,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  box: {width: '60%', height: 40, position: 'absolute', top: 60, left: 77},
  logoContainer: {
    flexDirection: 'row',
    width: '50%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginRight: 120,
    borderRadius: 200,
    borderColor: 'white',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white',
  },
  textContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginTop: 4,
  },
  button: {
    flexDirection: 'row',
    width: '80%',
    height: 60,
    position: 'absolute',
    bottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: secondary,
    borderRadius: 200,
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
  },
});

export default LandingScreen;
