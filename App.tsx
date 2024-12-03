/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {primary} from 'constants/Colors.ts';
import {BottomBar} from 'components/export.ts';
import {
  LandingScreen,
  Signin,
  Signup,
  ForgetPasswordEmail,
  ForgetPasswordCodeVirification,
  ForgetPasswordRestPassword,
  ProductDetails,
  CartScreen,
  ProductsScreen,
  CategoriesScreen,
} from 'screens/export.ts';
import DrawerNavigator from 'components/drawerNavigation/DrawerNavigator.tsx';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <View style={styles.AppView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{title: 'ARFY', headerShown: false}}
          />
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
          <Stack.Screen
            name="ForgetPasswordEmail"
            component={ForgetPasswordEmail}
            options={{
              title: 'Forget Password',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: primary,
              },
            }}
          />

          <Stack.Screen
            name="ForgetPasswordCodeVirification"
            component={ForgetPasswordCodeVirification}
            options={{
              title: 'Verify Your Email ',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: primary,
              },
            }}
          />

          <Stack.Screen
            name="ForgetPasswordRestPassword"
            component={ForgetPasswordRestPassword}
            options={{
              title: 'Create New Password',
              headerTitleAlign: 'center',
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: primary,
              },
            }}
          />
          <Stack.Screen
            name="BottomBar"
            component={BottomBar}
            options={{title: 'BottomBar', headerShown: false}}
          />
           <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{title: 'Details', headerShown: false}}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{title: 'Cart', headerShown: true}}
          />
          <Stack.Screen
            name="ProductsScreen"
            component={ProductsScreen}
            options={{ headerShown: true}}
          />
           <Stack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{ title: 'CategoriesScreen',headerShown: true}}
          />
            <Stack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
            options={{headerShown: true}}
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
