/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  gray,
  inputbackgroundColor,
  primary,
  secondary,
} from 'constants/Colors.ts';
import * as yup from 'yup';
import {Formik} from 'formik';
import api from '../../../services/axios/api'; // <-- Assure-toi que le chemin est correct
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgetPasswordEmailForm = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Adress is required'),
});

const ForgetPasswordEmail = ({navigation}: {navigation: any}) => {
  const [loading, setLoading] = useState(false);
  const handleSendEmail = async (values: any) => {
    try {
      setLoading(true);
      const response = await api.post('/auth/code', {
        email: values.email,
      });
      await AsyncStorage.setItem('emailResetPassWord', response.data.data);

      Alert.alert('Success', 'code sent to your email! ' + values.email);
      navigation.navigate('ForgetPasswordCodeVirification'); // remplace 'Home' par ton écran cible
    } catch (error: any) {
      Alert.alert('Send email failed', error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{email: ''}}
      validateOnMount={true}
      validationSchema={ForgetPasswordEmailForm}
      onSubmit={values => handleSendEmail(values)}>
      {({handleChange, handleBlur, values, touched, errors, isValid}) => (
        <View style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollview}>
            <View style={styles.header}>
              <Image
                source={require('asssets/img/forget-password.png')}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.body}>
              <View style={styles.textcontainer}>
                <Text style={styles.textStyle}>
                  Please Enter Your Email Address To Recieve a Verification Code
                  .
                </Text>
              </View>
              <View style={styles.conatinerInput}>
                <Text style={styles.subtitle}>Email adress</Text>
                <TextInput
                  placeholderTextColor="gray"
                  style={[
                    styles.input,
                    {
                      backgroundColor:
                        (errors.email && !touched.email) || isValid
                          ? inputbackgroundColor
                          : secondary,
                    },
                  ]}
                  placeholder="Email"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />

                {errors.email && touched.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
                <View style={styles.textcontainer}>
                  <Text style={styles.textStyle2}>Try another way</Text>
                </View>
              </View>

              <View style={styles.conatinerButtom}>
                <TouchableOpacity
                  style={[styles.button, {opacity: isValid ? 1 : 0.7}]}
                  disabled={!isValid}
                  onPress={() => handleSendEmail(values)}>
                  <Text style={{fontSize: 16, fontWeight: 500, color: 'white'}}>
                    {loading ? 'Send...' : 'Send'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollview: {
    flexGrow: 1,
    width: '100%',
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 240,
  },
  body: {
    height: 400,
    padding: 25,
  },
  conatinerInput: {
    marginTop: 30,
    height: 210,
  },
  conatinerButtom: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 40,
    width: '100%',
  },
  imageStyle: {
    width: '70%',
    height: 220,
    borderRadius: 100,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 30,
  },
  textcontainer: {
    height: 70,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    width: '80%',
    textAlign: 'center',
  },
  textStyle2: {
    width: '80%',
    textAlign: 'center',
    color: primary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  input: {
    width: '100%',
    height: 60,
    padding: 10,
    margin: 0,
    borderRadius: 10,
    borderColor: primary,
  },
  subtitle: {
    fontSize: 16,
    color: gray,
  },
  button: {
    alignItems: 'center',
    backgroundColor: primary,
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 40,
    padding: 12,
    margin: 6,
    width: '60%',
    shadowColor: primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default ForgetPasswordEmail;
