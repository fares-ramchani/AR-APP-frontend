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
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../../services/axios/api'; // <-- Assure-toi que le chemin est correct
const ForgetPasswordResetPasswordForm = yup.object().shape({
  Password: yup.string().required('Password is required'),
  ConfirmPassword: yup.string().required('Confirm Password  is required'),
});
type resetPassword = {
  email: string;
  password: string;
  token: string;
  isVerified: true;
};

const ForgetPasswordRestPassword = ({navigation}: {navigation: any}) => {
  const [resetPassword, setresetPassword] = useState<resetPassword>({
    email: '',
    password: '',
    token: '',
    isVerified: true,
  });
  const [loading, setLoading] = useState(false);
  const handleresetPassword = async (values: any) => {
    try {
      setLoading(true);
      const storedResetPassword =
        (await AsyncStorage.getItem('resetPassword')) || '';
      setresetPassword(JSON.parse(storedResetPassword));

      const response = await api.put('/auth/reset-password', {
        email: resetPassword.email,
        password: values.Password,
        token: resetPassword.token,
      });
      await AsyncStorage.removeItem('resetPassword');
      navigation.navigate('Signin'); // remplace 'Home' par ton écran cible
    } catch (error: any) {
      Alert.alert(
        'reset password failed',
        error.message || 'Something went wrong',
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{Password: '', ConfirmPassword: ''}}
      validateOnMount={true}
      validationSchema={ForgetPasswordResetPasswordForm}
      onSubmit={values => handleresetPassword(values)}>
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
                <Text style={styles.textStyle}>Type Your New Password .</Text>
              </View>
              <View style={styles.conatinerInput}>
                <Text style={styles.subtitle}>Password</Text>
                <TextInput
                  placeholderTextColor="gray"
                  style={[
                    styles.input,
                    {
                      backgroundColor:
                        (errors.Password && !touched.Password) ||
                        (!isValid && !errors.Password)
                          ? inputbackgroundColor
                          : secondary,
                    },
                  ]}
                  placeholder="New Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  onChangeText={handleChange('Password')}
                  onBlur={handleBlur('Password')}
                  value={values.Password}
                />
                {errors.Password && touched.Password && (
                  <Text style={styles.errorText}>{errors.Password}</Text>
                )}
                <Text style={styles.subtitle}>Confirm Password</Text>
                <TextInput
                  placeholderTextColor="gray"
                  style={[
                    styles.input,
                    {
                      backgroundColor:
                        (errors.ConfirmPassword && !touched.ConfirmPassword) ||
                        (!isValid && !errors.ConfirmPassword)
                          ? inputbackgroundColor
                          : secondary,
                    },
                  ]}
                  placeholder="Confirm Password"
                  keyboardType="default"
                  secureTextEntry={true}
                  onChangeText={handleChange('ConfirmPassword')}
                  onBlur={handleBlur('ConfirmPassword')}
                  value={values.ConfirmPassword}
                />
                {errors.ConfirmPassword && touched.ConfirmPassword && (
                  <Text style={styles.errorText}>{errors.ConfirmPassword}</Text>
                )}
                <View style={styles.textcontainer}>
                  <Text style={styles.textStyle2}>Try another way</Text>
                </View>

                <View style={styles.conatinerButtom}>
                  <TouchableOpacity
                    style={[styles.button, {opacity: isValid ? 1 : 0.7}]}
                    disabled={!isValid}
                    onPress={() => handleresetPassword(values)}>
                    <Text style={{color: 'white', textAlign: 'center'}}>
                      {' '}
                      {loading ? 'save...' : 'save'}
                    </Text>
                  </TouchableOpacity>
                </View>
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
  },

  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 230,
    marginTop: 35,
  },
  body: {
    height: 400,
    padding: 25,
  },
  conatinerInput: {
    marginTop: 5,
    height: 240,
  },
  conatinerButtom: {
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    width: '92%',
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
    justifyContent: 'center',
    backgroundColor: primary,
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 40,
    padding: 10,
    margin: 6,
    width: '80%',
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
export default ForgetPasswordRestPassword;
