import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {primary} from 'constants/Colors.ts';
import Header from 'components/header/Header.tsx';

const Signup = ({navigation} : {navigation : any}) => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <Header />
        <View style={styles.header}>
          <Text style={styles.title}>SignUp</Text>
          <Text style={{color: 'gray'}}>
            Signup to your registered account.
          </Text>
        </View>
        <View style={styles.body}>
          <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>Email adress</Text>
            <TextInput
              placeholderTextColor="gray"
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
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
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>Confirm Password</Text>
            <TextInput
              placeholderTextColor="gray"
              style={styles.input}
              placeholder="Confirm Password"
              keyboardType="default"
              secureTextEntry={true}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Signin', {name: 'Signin'})}>
            <Text style={{color: 'white'}}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: 'white', borderColor: primary},
            ]}>
            <Text style={{color: primary}}>Signin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollview: {
    flexGrow: 1,
    width: '100%',
  },
  header: {
    width: '100%',
    height: 80,
    marginTop: 140,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  body: {
    width: '100%',
    height: 400,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    width: '100%',
    height: 80,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: primary,
  },
  subtitle: {
    fontSize: 16,
    color: primary,
  },
  imageBackground: {
    flex: 1,
    padding: 20,
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
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
    borderColor: primary,
    backgroundColor: '#fff1ef',
  },
});
export default Signup;
