import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {green, primary} from 'constants/Colors.ts';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import LinearGradient from 'react-native-linear-gradient';

const Signup = ({navigation}: {navigation: any}) => {
  const [state, setState] = useState({
    isValid: false,
    errors: false,
  });
  const navigationToScreenSignin = () => {
    navigation.navigate('BottomBar', {name: 'BottomBar'});
  };

  const onNextStep = () => {
    console.log('next');

    if (!state.isValid) {
      setState({isValid: false, errors: false});
    } else {
      setState({isValid: false, errors: false});
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
                  onNext={onNextStep}
                  errors={state.errors}
                  nextBtnStyle={styles.buttonNext}
                  nextBtnTextStyle={styles.nextButtonText}>
                  <View style={styles.containerProgressStep}>
                    <View style={styles.inputContainer}>
                      <Text style={styles.subtitle}>Name</Text>
                      <TextInput
                        placeholderTextColor="gray"
                        style={styles.input}
                        placeholder="Full name"
                        keyboardType="email-address"
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.subtitle}>Phone</Text>
                      <TextInput
                        placeholderTextColor="gray"
                        style={styles.input}
                        placeholder="Phone number"
                        keyboardType="phone-pad"
                        secureTextEntry={true}
                      />
                    </View>
                    <View style={styles.inputContainer}>
                      <Text style={styles.subtitle}>Adress</Text>
                      <TextInput
                        placeholderTextColor="gray"
                        style={styles.input}
                        placeholder="Adress"
                        keyboardType="default"
                      />
                    </View>
                  </View>
                </ProgressStep>
                <ProgressStep
                  label="Second Step"
                  nextBtnStyle={styles.buttonSubmit}
                  nextBtnTextStyle={styles.nextButtonText}
                  previousBtnStyle={styles.buttonPrevious}
                  previousBtnTextStyle={styles.PreviousButtonText}
                  finishBtnText={'Signup'}
                  onSubmit={navigationToScreenSignin}>
                  <View style={styles.containerProgressStep}>
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
                </ProgressStep>
              </ProgressSteps>
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
});
export default Signup;
