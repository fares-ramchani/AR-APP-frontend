import React, {useRef, useState} from 'react';
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

const NumberInputBox = React.forwardRef(
  ({value, onChange, onKeyPress, error, touched, isValid}, ref) => (
    <View style={styles.box}>
      <TextInput
        ref={ref}
        style={[
          styles.input,
          {
            backgroundColor: (error && !touched) || isValid ? '#fff1ef' : 'red',
          },
        ]}
        value={value}
        onChangeText={onChange}
        onKeyPress={onKeyPress}
        keyboardType="numeric"
        maxLength={1}
        textAlign="center"
      />
    </View>
  ),
);

const ForgetPasswordCodeVerification = ({navigation}) => {
  const inputRefs = useRef([]);
  const handleKeyPress = (e, name, index, values, setFieldValue) => {
    if (e.nativeEvent.key === 'Backspace' && values[name] === '' && index > 0) {
      inputRefs.current[index - 1].focus();
      setFieldValue(Object.keys(values)[index - 1], '');
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
        console.log(values);
        navigation.navigate('ForgetPasswordRestPassword');
      }}>
      {({
        handleChange,
        handleBlur,
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
                source={require('asssets/img/Forgot-password-cuate.png')}
                style={styles.imageStyle}
              />
            </View>
            <View style={styles.body}>
              <View style={styles.textcontainer}>
                <Text style={styles.textStyle}>
                  Please Enter The 4 Digit Code Sent To example@gmail.com
                </Text>
              </View>
              <View style={styles.conatinerInput}>
                <View style={styles.conatinerInput2}>
                  {['Firstcode', 'Secondcode', 'Thirdcode', 'Fourthcode'].map(
                    (name, index) => (
                      <View key={name} style={styles.inputWrapper}>
                        <NumberInputBox
                          ref={el => (inputRefs.current[index] = el)}
                          value={values[name]}
                          onChange={text => {
                            handleChange(name)(text);
                            if (text && index < inputRefs.current.length - 1) {
                              inputRefs.current[index + 1].focus();
                            }
                          }}
                          onKeyPress={e =>
                            handleKeyPress(
                              e,
                              name,
                              index,
                              values,
                              setFieldValue,
                            )
                          }
                          error={errors[name]}
                          touched={touched[name]}
                          isValid={isValid}
                        />
                      </View>
                    ),
                  )}
                </View>
                <View style={styles.textcontainer}>
                  <Text style={styles.textStyle2}>Resend Code</Text>
                </View>
              </View>
              <View style={styles.conatinerButtom}>
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                  <Text style={{color: 'white'}}>Verify</Text>
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
