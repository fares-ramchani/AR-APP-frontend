import React, {useState} from 'react';
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
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';

const Signup = ({navigation}: {navigation: any}) => {
  const [state, setState] = useState({
    isValid: false,
    errors: false,
  });
  const navigationToScreenSignin= ()=>{
    navigation.navigate('Signin', {name: 'Signin'})
    
  }

  const onNextStep = () => {
    console.log('next');

    if (!state.isValid) {
      setState({isValid: false, errors: false});
    } else {
      setState({isValid: false, errors: false});
    }
  };
  return (
    //   <View style={{ flex: 1,flexDirection:'column-reverse'}}>
    //   <ProgressSteps>
    //   <ProgressStep
    //     label="First Step"
    //     onNext={onNextStep}
    //     errors={state.errors}>
    //     <View style={{alignItems: 'center'}}>
    //       <Text>This is the content within step 1!</Text>
    //     </View>
    //   </ProgressStep>
    //   <ProgressStep label="Second Step">
    //     <View style={{alignItems: 'center'}}>
    //       <Text>This is the content within step 2!</Text>
    //     </View>
    //   </ProgressStep>
    // </ProgressSteps>
    // </View>

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
        <View style={{flex: 1}}>
          <ProgressSteps >
            <ProgressStep
              label="First Step"
              onNext={onNextStep}
              errors={state.errors}
              nextBtnStyle={styles.buttonNext}  
              nextBtnTextStyle={styles.nextButtonText} >
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
            <ProgressStep label="Second Step"
              nextBtnStyle={styles.buttonSubmit}  
              nextBtnTextStyle={styles.nextButtonText}
              previousBtnStyle={styles.buttonPrevious } 
              previousBtnTextStyle={styles.PreviousButtonText}
              onSubmit={navigationToScreenSignin}>
               <View style={styles.containerProgressStep}>
                <View style={styles.inputContainer}>
                  <Text style={styles.subtitle}>Name</Text>
                  <TextInput
                    placeholderTextColor="gray"
                    style={styles.input}
                    placeholder="Name"
                    keyboardType="email-address"
                  />
                </View>
                <View style={styles.inputContainer}>
                  <Text style={styles.subtitle}>Phone</Text>
                  <TextInput
                    placeholderTextColor="gray"
                    style={styles.input}
                    placeholder="Phone"
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
          </ProgressSteps>
          </View>
        </View>
        {/* <View style={styles.footer}>
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
        </View> */}
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
    flex: 1,
    width: '100%',
    marginTop: 110,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  body: {
    flex: 5,
    width: '100%',
    padding: 20,

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
  containerProgressStep:{
    width: '100%',
    marginBottom:30
  },
  buttonNext: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf:'center',          
    marginHorizontal:20,
    backgroundColor: primary,
    borderWidth: 1,
    borderColor: primary,
    borderRadius: 40,
    position: 'absolute',       
    bottom: 10,   
    right:0,
    left:-60,
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
  nextButtonText:{
    color:'white',
    textAlign:'center'

  },
  PreviousButtonText:{
    color:primary,
    textAlign:'center'

  },

  inputContainer: {
    alignItems: 'flex-start',
  },
  input: {
    width: '100%',
    height: 55,
    padding: 10,
    margin: 0,
    borderRadius: 10,
    borderColor: primary,
    backgroundColor: '#fff1ef',
    marginTop:3
  },
});
export default Signup;
