/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import FavoritesScreen from 'screens/favoritesScreen/FavoritesScreen.tsx';
import * as Animatable from 'react-native-animatable';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {primary} from 'constants/Colors.ts';
import {CategoriesScreen, HomeScreen} from 'screens/export.ts';
import {Icons} from '../icons/Icons';
import Icon from '../icons/Icons';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Ionicons,
    activeIcon: 'grid',
    inActiveIcon: 'grid-outline',
    component: HomeScreen,
  },
  {
    route: 'Products',
    label: 'Products',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'shopping',
    inActiveIcon: 'shopping-outline',
    component: CategoriesScreen,
  },
  {
    route: 'Favorites',
    label: 'Favorites',
    type: Icons.MaterialCommunityIcons,
    activeIcon: 'heart-plus',
    inActiveIcon: 'heart-plus-outline',
    component: FavoritesScreen,
  },
  {
    route: 'setting',
    label: 'setting',
    type: Icons.Ionicons,
    activeIcon: 'settings',
    inActiveIcon: 'settings-outline',
    component: FavoritesScreen,
  },
];
const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<Animatable.View | null>(null);

  useEffect(() => {
    if (viewRef.current) {
      if (focused) {
        viewRef.current.animate({
          0: {transform: [{scale: 0.5}, {rotate: '0deg'}]},
          1: {transform: [{scale: 1.5}, {rotate: '360deg'}]},
        });
      } else {
        viewRef.current.animate({
          0: {transform: [{scale: 1.5}, {rotate: '360deg'}]},
          1: {transform: [{scale: 1}, {rotate: '0deg'}]},
        });
      }
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {top: 0}]}>
      <Animatable.View ref={viewRef} duration={1000}>
        <Icon
          type={item.type}
          name={focused ? item.activeIcon : item.inActiveIcon}
          color={focused ? primary : Colors.primaryLite}
        />
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function AnimTab1() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                /* Action à réaliser quand l'icône est pressée */
              }}>
              <Icon
                color="black"
                name="shoppingcart"
                type={Icons.AntDesign}
                size={30}
                style={{marginRight: 24}}
              />
            </TouchableOpacity>
          ),
          tabBarStyle: {
            height: 60,
            position: 'absolute',
            margin: 16,
            borderRadius: 16,
            justifyContent: 'center',
            alignItems: 'center',
          },
        }}>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
});
