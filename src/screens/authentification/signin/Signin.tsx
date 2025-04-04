/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/axios/api'; // <-- Assure-toi que le chemin est correct
import {blue, primary} from 'constants/Colors.ts';
import { jwtDecode } from 'jwt-decode';

const Signin = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/auth/login', {
        email,
        password,
      });

      const token = response.data.data; 
      const decoded = jwtDecode(token);
  
      await AsyncStorage.setItem('token', token);
      await AsyncStorage.setItem('user', JSON.stringify(decoded));
   

      Alert.alert('Success', 'Logged in successfully!');
      navigation.navigate('BottomBar'); // remplace 'Home' par ton écran cible
    } catch (error: any) {
      Alert.alert('Login failed', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
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
          ]}
          style={styles.linear}>
          <LinearGradient
            colors={['white', 'white', 'white', 'white', 'white']}
            style={styles.login}>
            <View style={styles.header}>
              <View style={styles.images}>
                <Image
                  source={require('asssets/img/loginarfy.png')}
                  style={styles.loginimage}
                />
              </View>
            </View>
            <View style={styles.body}>
              <Text style={styles.title}>Login</Text>
              <Text style={[styles.subtitle, {fontSize: 12}]}>
                And place your furniture with ease.
              </Text>
              <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Email</Text>
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.input}
                  placeholder="Email address"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Password</Text>
                <TextInput
                  placeholderTextColor="gray"
                  style={styles.input}
                  placeholder="Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  value={password}
                  onChangeText={setPassword}
                />
              </View>
              <View style={[styles.inputContainer, {alignItems: 'flex-end'}]}>
                <Text
                  style={{color: blue}}
                  onPress={() =>
                    navigation.navigate('ForgetPasswordEmail', {
                      name: 'ForgetPasswordEmail',
                    })
                  }>
                  Forgot password ?
                </Text>
              </View>
              <View style={styles.buttons}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={handleLogin}
                  disabled={loading}>
                  <Text style={{color: 'white'}}>
                    {loading ? 'Signing in...' : 'Signin'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.button,
                    {backgroundColor: 'white', borderColor: primary},
                  ]}
                  onPress={() =>
                    navigation.navigate('Signup', {name: 'Signup'})
                  }>
                  <Text style={{color: primary}}>Signup</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.iconBox}>
                <FontAwesome name="facebook" size={20} color={blue} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <FontAwesome name="google" size={20} color={'red'} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconBox}>
                <FontAwesome name="twitter" size={20} color={blue} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </LinearGradient>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    paddingHorizontal: 15,
  },
  scrollview: {
    flexGrow: 1,
    width: '100%',
  },
  linear: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    borderRadius: 10,
  },
  images: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  loginimage: {
    width: '60%',
    height: 160,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  login: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderTopColor: primary,
    borderTopWidth: 6,
    borderRadius: 10,
    padding: 10,
    marginBottom: 0,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 4,
  },
  header: {
    width: '100%',
    height: 100,
    marginTop: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  body: {
    width: '100%',
    height: 400,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  footer: {
    flexDirection: 'row',
    width: '70%',
    height: 80,
    padding: 0,
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#f9f9f9',
    borderTopWidth: 1,
  },
  iconBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: primary,
    borderBottomWidth: 2,
    borderRadius: 10,
    padding: 18,
    margin: 4,
    width: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
    color: '#c8c7c7',
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: primary,
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 40,
    padding: 10,
    margin: 6,
    width: '40%',
    shadowColor: primary,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 10,
  },
  inputContainer: {
    alignItems: 'flex-start',
    width: '100%',
    height: '20%',
    margin: 8,
  },
  input: {
    width: '100%',
    height: 60,
    padding: 10,
    margin: 0,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: '#f9f9f9',
  },
});

export default Signin;
