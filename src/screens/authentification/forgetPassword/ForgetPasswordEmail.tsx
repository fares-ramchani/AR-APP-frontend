import React from 'react';
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

const ForgetPasswordEmailForm = yup.object().shape({
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Adress is required'),
});

const ForgetPasswordEmail = ({navigation}: {navigation: any}) => {
  return (
    <Formik
      initialValues={{email: ''}}
      validateOnMount={true}
      validationSchema={ForgetPasswordEmailForm}
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
                source={require('asssets/img/Forgot-password-cuate.png')}
                style={styles.imageStyle}></Image>
            </View>
            <View style={styles.body}>
              <View style={styles.textcontainer}>
                <Text style={styles.textStyle}>
                  Please Enter Your Email Address To Recieve a Verification Cord
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
                          ? '#fff1ef'
                          : 'red',
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
                  onPress={() =>
                    navigation.navigate('ForgetPasswordCodeVirification', {
                      name: 'ForgetPasswordCodeVirification',
                    })
                  }>
                  <Text style={{color: 'white'}}>Send</Text>
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
