/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Signin from 'screens/authentification/signin/Signin.tsx';


function App() {
  return (
    <View style={styles.AppView}>
      <Signin />
    </View>
  );
}

const styles = StyleSheet.create({
  AppView: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default App;
