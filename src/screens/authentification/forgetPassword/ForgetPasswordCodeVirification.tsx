/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState} from 'react';
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
import {inputbackgroundColor, primary, secondary} from 'constants/Colors.ts';
import * as yup from 'yup';
import {Formik} from 'formik';
import api from '../../../services/axios/api'; // <-- Assure-toi que le chemin est correct
import AsyncStorage from '@react-native-async-storage/async-storage';

const ForgetPasswordCodeVerificationSchema = yup.object().shape({
  Firstcode: yup
    .string()
    .matches(/^[0-9]$/, 'Must be a single digit')
    .required('Required'),
  Secondcode: yup
    .string()
    .matches(/^[0-9]$/, 'Must be a single digit')
    .required('Required'),
  Thirdcode: yup
    .string()
    .matches(/^[0-9]$/, 'Must be a single digit')
    .required('Required'),
  Fourthcode: yup
    .string()
    .matches(/^[0-9]$/, 'Must be a single digit')
    .required('Required'),
});

type FormValues = {
  Firstcode: string;
  Secondcode: string;
  Thirdcode: string;
  Fourthcode: string;
};
type VerifyCode = {
  email: string;
  verificationCode: string;
};

type NumberInputBoxProps = {
  value: string;
  onChange: (text: string) => void;
  onKeyPress: (event: any) => void;
  error: string | undefined;
  touched: boolean | undefined;
  isValid: boolean;
};

const NumberInputBox = React.forwardRef<TextInput, NumberInputBoxProps>(
  ({value, onChange, onKeyPress, error, touched, isValid}, ref) => (
    <View style={styles.box}>
      <TextInput
        ref={ref}
        style={[
          styles.input,
          {
            backgroundColor:
              (!error && !touched) || isValid
                ? inputbackgroundColor
                : secondary,
          },
        ]}
        value={value}
        onChangeText={onChange}
        onKeyPress={onKeyPress}
        keyboardType="numeric"
        maxLength={1}
        textAlign="center"
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  ),
);

const ForgetPasswordCodeVerification = ({navigation}: {navigation: any}) => {
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const handleKeyPress = (
    e: any,
    name: keyof FormValues,
    index: number,
    values: FormValues,
    setFieldValue: (field: keyof FormValues, value: string) => void,
  ) => {
    if (e.nativeEvent.key === 'Backspace' && values[name] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
      setFieldValue(Object.keys(values)[index - 1] as keyof FormValues, '');
    }
  };
  const [loading, setLoading] = useState(false);
  const [verifyCode, setVerifyCode] = useState<VerifyCode>({
    email: '',
    verificationCode: '',
  });

  const handleVerificationCode = async (values: any) => {
    try {
      setLoading(true);
      verifyCode.email =
        (await AsyncStorage.getItem('emailResetPassWord')) || '';

      verifyCode.verificationCode = values.Firstcode.concat(
        values.Secondcode,
        values.Thirdcode,
        values.Fourthcode,
      );
      const response = await api.post('/auth/verify-code', {
        email: verifyCode.email,
        verificationCode: verifyCode.verificationCode,
      });
      await AsyncStorage.removeItem('emailResetPassWord');
      await AsyncStorage.setItem(
        'resetPassword',
        JSON.stringify(response.data?.data),
      );

      navigation.navigate('ForgetPasswordRestPassword'); // remplace 'Home' par ton écran cible
    } catch (error: any) {
      Alert.alert(
        'verification failed',
        error.message || 'Something went wrong',
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Formik
      initialValues={{
        Firstcode: '',
        Secondcode: '',
        Thirdcode: '',
        Fourthcode: '',
      }}
      validationSchema={ForgetPasswordCodeVerificationSchema}
      onSubmit={values => {
        handleVerificationCode(values);
      }}>
      {({
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        isValid,
        setFieldValue,
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
                  Please Enter The 4 Digit Code Sent To Your Email .
                </Text>
              </View>
              <View style={styles.conatinerInput}>
                <View style={styles.conatinerInput2}>
                  {(
                    [
                      'Firstcode',
                      'Secondcode',
                      'Thirdcode',
                      'Fourthcode',
                    ] as const
                  ).map((name, index) => (
                    <View key={name} style={styles.inputWrapper}>
                      <NumberInputBox
                        ref={el => (inputRefs.current[index] = el)}
                        value={values[name]}
                        onChange={text => {
                          handleChange(name)(text);
                          if (text && index < inputRefs.current.length - 1) {
                            inputRefs.current[index + 1]?.focus();
                          }
                        }}
                        onKeyPress={e =>
                          handleKeyPress(e, name, index, values, setFieldValue)
                        }
                        error={errors[name]}
                        touched={touched[name]}
                        isValid={isValid}
                      />
                    </View>
                  ))}
                </View>
                <View style={styles.textcontainer}>
                  <Text style={styles.textStyle2}>Resend Code</Text>
                </View>
              </View>
              <View style={styles.conatinerButtom}>
                <TouchableOpacity
                  style={[styles.button, {opacity: isValid ? 1 : 0.7}]}
                  disabled={!isValid}
                  onPress={() => handleSubmit()}>
                  <Text style={{fontSize: 16, fontWeight: 500, color: 'white'}}>
                    {loading ? 'Verify...' : 'Verify'}
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
  conatinerInput2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
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
    marginBottom: 15,
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
  inputWrapper: {
    alignItems: 'center',
  },
  input: {
    height: 50,
    padding: 10,
    margin: 0,
    borderRadius: 10,
    borderColor: primary,
    fontSize: 24,
    color: '#333',
    width: 50,
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
  box: {
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
});

export default ForgetPasswordCodeVerification;
