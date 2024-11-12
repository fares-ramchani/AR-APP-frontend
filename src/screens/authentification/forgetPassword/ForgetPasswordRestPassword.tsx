import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {primary} from 'constants/Colors.ts';
import * as yup from 'yup';
import {Formik} from 'formik';
const ForgetPasswordResetPasswordForm = yup.object().shape({
  Password: yup.string().required('Password is required'),
  ConfirmPassword: yup.string().required('Confirm Password  is required'),
});

const ForgetPasswordRestPassword = ({navigation}: {navigation: any}) => {
  return (
    <Formik
      initialValues={{Password: '', ConfirmPassword: ''}}
      validateOnMount={true}
      validationSchema={ForgetPasswordResetPasswordForm}
      onSubmit={values => console.log(values)}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
      }) => (
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
                  Your New Password Must Be Differnt From Previously Used
                  Password
                </Text>
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
                          ? '#fff1ef'
                          : 'red',
                    },
                  ]}
                  placeholder="Password"
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
                          ? '#fff1ef'
                          : 'red',
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
              </View>

              <View style={styles.conatinerButtom}>
                <TouchableOpacity
                  style={[styles.button, {opacity: isValid ? 1 : 0.7}]}
                  disabled={!isValid}
                  onPress={() =>
                    navigation.navigate('Signin', {name: 'Signin'})
                  }>
                  <Text style={{color: 'white'}}>save</Text>
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
    marginTop: 30,
    height: 240,
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
    color: primary,
  },
  button: {
    alignItems: 'center',
    backgroundColor: primary,
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 40,
    padding: 10,
    margin: 6,
    width: '80%',
    marginTop: 40,
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
