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

const ForgetPasswordCodeVirification = ({navigation}: {navigation: any}) => {
  return (
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
              Please Enter The 4 Digit Code Sent To exemple@gmail.come
            </Text>
          </View>
          <View style={styles.conatinerInput}>
            <View style={styles.conatinerInput2}>
              <TextInput
                placeholderTextColor="gray"
                style={styles.input}
                placeholder="....."
                keyboardType="phone-pad"
              />
              <TextInput
                placeholderTextColor="gray"
                style={styles.input}
                placeholder="....."
                keyboardType="phone-pad"
              />
              <TextInput
                placeholderTextColor="gray"
                style={styles.input}
                placeholder="....."
                keyboardType="phone-pad"
              />
              <TextInput
                placeholderTextColor="gray"
                style={styles.input}
                placeholder="....."
                keyboardType="phone-pad"
              />
              <TextInput
                placeholderTextColor="gray"
                style={styles.input}
                placeholder="....."
                keyboardType="phone-pad"
              />
            </View>

            <View style={styles.textcontainer}>
              <Text style={styles.textStyle2}>Resend Code</Text>
            </View>
          </View>

          <View style={styles.conatinerButtom}>
            <TouchableOpacity style={styles.button} onPress={() =>
              navigation.navigate('ForgetPasswordRestPassword', {name: 'ForgetPasswordRestPassword'})
            }>
              <Text style={{color: 'white'}}>verify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
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
    height: 280,
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
    backgroundColor: 'white',
    shadowColor: primary,
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
    marginBottom:15
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
    width: '15%',
    height: 60,
    padding: 10,
    margin: 0,
    borderRadius: 10,
    borderColor: primary,
    backgroundColor: '#fff1ef',
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
});
export default ForgetPasswordCodeVirification;
