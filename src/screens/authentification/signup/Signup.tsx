import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import LinearGradient from 'react-native-linear-gradient';
import {
  green,
  primary,
  inputbackgroundColor,
  secondary,
} from 'constants/Colors.ts';
import api from '../../../services/axios/api'; // Assure-toi que le chemin est correct

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6).required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm Password is required'),
});

const Signup = ({navigation}: {navigation: any}) => {
  const [loading, setLoading] = useState(false);
  const handleSignup = async (values: any) => {
    try {
      setLoading(true);
      const response = await api.post('/auth/signup', {
        name: values.name,
        phone: values.phone,
        adress: values.address,
        email: values.email,
        password: values.password,
      });

      Alert.alert('Success', 'Signed up successfully!');
      navigation.navigate('Signin'); // remplace 'Home' par ton écran cible
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
            'gray',
          ]}
          style={styles.linear}>
          <LinearGradient
            colors={['white', 'white', 'white', 'white', 'white']}
            style={styles.signup}>
            <View style={styles.header}>
              <View style={styles.images}>
                <Image
                  source={require('asssets/img/signup.png')}
                  style={styles.signupimage}
                />
              </View>
            </View>

            <Formik
              initialValues={{
                name: '',
                phone: '',
                address: '',
                email: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={values => {
                console.log('Submitting', values);
                handleSignup(values);
              }}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View style={styles.body}>
                  <Text style={styles.title}>Signup</Text>
                  <ProgressSteps
                    activeStepIconBorderColor={primary}
                    completedProgressBarColor={green}
                    completedStepIconColor={green}
                    completedLabelColor={green}
                    activeLabelColor={primary}>
                    <ProgressStep
                      label="First Step"
                      nextBtnStyle={styles.buttonNext}
                      nextBtnTextStyle={styles.nextButtonText}
                      errors={
                        !!errors.name || !!errors.phone || !!errors.address
                      }>
                      <View style={styles.containerProgressStep}>
                        <View style={styles.inputContainer}>
                          <Text style={styles.subtitle}>Name</Text>
                          {errors.name && touched.name && (
                            <Text style={styles.errorText}>{errors.name}</Text>
                          )}
                          <TextInput
                            style={[
                              styles.input,
                              {
                                borderWidth:
                                  errors.name && touched.name ? 1 : 0,
                                borderColor:
                                  errors.name && touched.name
                                    ? secondary
                                    : inputbackgroundColor,
                              },
                            ]}
                            placeholder="Full name"
                            placeholderTextColor="gray"
                            onChangeText={handleChange('name')}
                            onBlur={handleBlur('name')}
                            value={values.name}
                          />
                        
                        </View>
                        <View style={styles.inputContainer}>
                          <Text style={styles.subtitle}>Phone</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Phone number"
                            placeholderTextColor="gray"
                            keyboardType="phone-pad"
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                          />
                          {errors.phone && touched.phone && (
                            <Text style={styles.errorText}>{errors.phone}</Text>
                          )}
                        </View>
                        <View style={styles.inputContainer}>
                          <Text style={styles.subtitle}>Address</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Address"
                            placeholderTextColor="gray"
                            onChangeText={handleChange('address')}
                            onBlur={handleBlur('address')}
                            value={values.address}
                          />
                          {errors.address && touched.address && (
                            <Text style={styles.errorText}>
                              {errors.address}
                            </Text>
                          )}
                        </View>
                      </View>
                    </ProgressStep>

                    <ProgressStep
                      label="Second Step"
                      onSubmit={handleSubmit}
                      nextBtnStyle={styles.buttonSubmit}
                      nextBtnTextStyle={styles.nextButtonText}
                      previousBtnStyle={styles.buttonPrevious}
                      previousBtnTextStyle={styles.PreviousButtonText}
                      finishBtnText={'Signup'}>
                      <View style={styles.containerProgressStep}>
                        <View style={styles.inputContainer}>
                          <Text style={styles.subtitle}>Email</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="gray"
                            keyboardType="email-address"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                          />
                          {errors.email && touched.email && (
                            <Text style={styles.errorText}>{errors.email}</Text>
                          )}
                        </View>
                        <View style={styles.inputContainer}>
                          <Text style={styles.subtitle}>Password</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="gray"
                            secureTextEntry
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                          />
                          {errors.password && touched.password && (
                            <Text style={styles.errorText}>
                              {errors.password}
                            </Text>
                          )}
                        </View>
                        <View style={styles.inputContainer}>
                          <Text style={styles.subtitle}>Confirm Password</Text>
                          <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            placeholderTextColor="gray"
                            secureTextEntry
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                          />
                          {errors.confirmPassword &&
                            touched.confirmPassword && (
                              <Text style={styles.errorText}>
                                {errors.confirmPassword}
                              </Text>
                            )}
                        </View>
                      </View>
                    </ProgressStep>
                  </ProgressSteps>
                </View>
              )}
            </Formik>
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
  signup: {
    // backgroundColor: primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: '#ededed',
    borderRightColor: '#ededed',
    borderLeftColor: '#ededed',
    borderTopColor: primary,
    borderTopWidth: 6,
    borderRadius: 10,
    padding: 10,
    marginBottom: 0,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
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
  images: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  signupimage: {
    width: '40%',
    height: 160,
    alignSelf: 'flex-end',
    marginTop: 20,
  },
  body: {
    width: '100%',
    padding: 0,
    justifyContent: 'center',
    marginTop: 50,
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
    fontSize: 26,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#c8c7c7',
  },
  imageBackground: {
    flex: 1,
    padding: 20,
  },
  containerProgressStep: {
    width: '100%',
    marginBottom: 30,
  },
  buttonNext: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    marginHorizontal: 20,
    backgroundColor: primary,
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 40,
    position: 'absolute',
    bottom: 10,
    right: 0,
    left: -60,
    width: 100,
    shadowColor: primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  buttonSubmit: {
    backgroundColor: primary,
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 40,
    width: 100,
    shadowColor: primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  buttonPrevious: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 40,
    shadowColor: primary,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  nextButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  PreviousButtonText: {
    color: primary,
    textAlign: 'center',
  },

  inputContainer: {
    alignItems: 'flex-start',
    width: '100%',
    height: '26%',
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
  errorText: {
    color: 'red',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    right: 15,
  },
});
export default Signup;
