import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CategoriesScreen, ProductsScreen} from 'screens/export.ts';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#6200ee'},
        headerTintColor: 'white',
        drawerStyle: {
          backgroundColor: '#f4f4f4',
          width: 240,
        },
      }}>
      <Drawer.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{title: 'Products'}}
      />
      <Drawer.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{title: 'Products'}}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
