/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import Signin from 'screens/authentification/signin/Signin.tsx';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from 'screens/authentification/signup/Signup.tsx';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <View style={styles.AppView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{title: 'Signup', headerShown: false}}
          />
          <Stack.Screen
            name="Signin"
            component={Signin}
            options={{title: 'Signin', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
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
