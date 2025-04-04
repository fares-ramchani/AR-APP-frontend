/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {blue, grayAlpha} from 'constants/Colors.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = async ({navigation}: {navigation: any}) => {
  const user = await AsyncStorage.getItem('user');
  let parsedUser: { name: string ,email: string} | null = null;
  if (user) {
    parsedUser = JSON.parse(user);
  }
  const logout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('user');
    navigation.navigate('Signin');
  };
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.profileInfos}>
          <Image />
          <View >
            <Text style={styles.title}>{parsedUser?.name || 'username'}</Text>
            <Text style={styles.title}>{parsedUser?.email || 'Email@gmail.Com'}</Text>
            </View>
          </View>
        <View style={styles.settings}>
          <View style={styles.settingsSection}>
            <TouchableOpacity style={styles.settingsItem}>
              <View style={styles.itempI}>
                <MaterialCommunityIcons
                  name="account-edit-outline"
                  size={30}
                  style={styles.arrow}
                />
                <Text style={styles.title}>Edit profile</Text>
              </View>

              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <View style={styles.itempI}>
                <Ionicons
                  name="notifications-outline"
                  size={30}
                  style={styles.arrow}
                />
                <Text style={styles.title}>Notification</Text>
              </View>
              <MaterialCommunityIcons
                name="toggle-switch"
                size={30}
                style={styles.arrow}
                color={blue}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <View style={styles.itempI}>
                <MaterialIcons name="language" size={30} style={styles.arrow} />
                <Text style={styles.title}>Language</Text>
              </View>
              <Text style={[styles.title, {color: blue}]}>English</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.settingsSection}>
            <TouchableOpacity style={styles.settingsItem}>
              <View style={styles.itempI}>
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={30}
                  style={styles.arrow}
                />
                <Text style={styles.title}>Orders</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <View style={styles.itempI}>
                <MaterialCommunityIcons
                  name="map-marker-radius-outline"
                  size={30}
                  style={styles.arrow}
                />
                <Text style={styles.title}>Delivery adress</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.settingsSection}>
            <TouchableOpacity style={styles.settingsItem}>
              <View style={styles.itempI}>
                <MaterialCommunityIcons
                  name="help-circle-outline"
                  size={30}
                  style={styles.arrow}
                />
                <Text style={styles.title}>Help & support</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <View style={styles.itempI}>
                <MaterialCommunityIcons
                  name="email-fast-outline"
                  size={30}
                  style={styles.arrow}
                />
                <Text style={styles.title}>Contact us</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                style={styles.arrow}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingsItem}>
              <View style={styles.itempI}>
                <MaterialCommunityIcons
                  name="shield-lock-outline"
                  size={30}
                  style={styles.arrow}
                />
                <Text style={styles.title}>Privacy policy</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={30}
                style={styles.arrow}
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <MaterialCommunityIcons
            name="logout"
            size={30}
            color={'white'}
            style={styles.arrow}
          />
          <Text style={{color: 'white', fontSize: 16, fontWeight: 500}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollview: {flexGrow: 1, width: '100%'},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: grayAlpha,
  },
  profileInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '90%',
    padding: 10,
    margin: 10,
    borderColor: 'white',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  settings: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  settingsSection: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%',
    padding: 10,
    margin: 10,
    borderColor: 'white',
    borderRadius: 2,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: grayAlpha,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  itempI: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '45%',
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: 'black',
    marginLeft: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    position: 'relative',
    top: 40,
    width: '70%',
    padding: 20,
    backgroundColor: blue,
    margin: 4,
    marginBottom: 140,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
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
  arrow: {},
});

export default Settings;
