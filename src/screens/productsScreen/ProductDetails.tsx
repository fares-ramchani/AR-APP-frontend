/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  blue,
  gray,
  grayAlpha,
  primary,
  primaryBackground,
} from 'constants/Colors.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ProductDetails = () => {
  const [quatity, setQuantity] = useState(1);
  const [heart, setHeart] = useState(true);
  return (
    <>
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          <ImageBackground
            resizeMode="cover"
            source={{
              uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={styles.imageBackground}>
            <TouchableOpacity style={styles.arrowBox} onPress={() => {}}>
              <MaterialCommunityIcons name="keyboard-backspace" size={28} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.heartBox}
              onPress={() => {
                heart === true ? setHeart(false) : setHeart(true);
              }}>
              <MaterialCommunityIcons
                name={heart === true ? 'cards-heart' : 'cards-heart-outline'}
                size={24}
                color={heart === true ? '#ff1741' : 'black'}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.specs}>
            <View style={styles.specsContainer}>
              <Text style={[styles.title]}> Couch Sofa </Text>
            </View>
            <View style={styles.specsContainer}>
              <Text style={[styles.title, {color: primary, fontWeight: 700}]}>
                850 TND
              </Text>
              <View style={styles.quantity}>
                <TouchableOpacity
                  style={styles.plusminusBox}
                  onPress={() => {
                    setQuantity(quatity - 1);
                  }}>
                  <FontAwesome
                    name="minus-square-o"
                    size={30}
                    color={primary}
                  />
                </TouchableOpacity>
                <Text>{quatity}</Text>
                <TouchableOpacity
                  style={styles.plusminusBox}
                  onPress={() => {
                    setQuantity(quatity + 1);
                  }}>
                  <FontAwesome name="plus-square-o" size={30} color={primary} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.specsContainer, {marginBottom: 20}]}>
              <TouchableOpacity
                style={[styles.colorBox, {shadowColor: '#235c23'}]}>
                <FontAwesome name="circle" size={34} color={'#235c23'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.colorBox, {shadowColor: '#3a589e'}]}>
                <FontAwesome name="circle" size={34} color={'#3a589e'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.colorBox, {shadowColor: '#dbd027'}]}>
                <FontAwesome name="circle" size={34} color={'#dbd027'} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.description}>
            <Text
              style={[
                styles.title,
                {
                  color: primary,
                  backgroundColor: primaryBackground,
                  padding: 8,
                  borderRadius: 6,
                  width: '34%',
                },
              ]}>
              Description
            </Text>
            <Text style={styles.text}>
              Cool hipster green couch sofa with brown wooden legs on wooden
              floor
            </Text>
          </View>
          <View style={styles.reviews}>
            <Text
              style={[
                styles.title,
                {
                  color: gray,
                  backgroundColor: grayAlpha,
                  padding: 8,
                  borderRadius: 6,
                  width: '28%',
                },
              ]}>
              Reviews
            </Text>
            <View style={styles.starContainer}>
              <View style={styles.starBox}>
                <FontAwesome
                  name="star"
                  size={34}
                  color={primary}
                  style={styles.star}
                />
              </View>
              <View style={styles.starBox}>
                <FontAwesome
                  name="star"
                  size={34}
                  color={primary}
                  style={styles.star}
                />
              </View>
              <View style={styles.starBox}>
                <FontAwesome
                  name="star"
                  size={34}
                  color={primary}
                  style={styles.star}
                />
              </View>
              <View style={styles.starBox}>
                <FontAwesome
                  name="star"
                  size={34}
                  color={gray}
                  style={styles.star}
                />
              </View>
              <View style={styles.starBox}>
                <FontAwesome
                  name="star"
                  size={34}
                  color={gray}
                  style={styles.star}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.cartButton}>
          <Text style={{color: blue, textAlign: 'center'}}>Add to cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.previewButton}>
          <Text style={{color: 'white', textAlign: 'center'}}>
            AR live preview
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollview: {flexGrow: 1, width: '100%'},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: grayAlpha,
  },
  imageBackground: {width: '100%', height: 300},
  specs: {
    width: '100%',
    padding: 12,
    backgroundColor: 'white',
  },
  specsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
  },
  description: {
    width: '100%',
    padding: 12,
    backgroundColor: 'white',
    marginTop: 4,
  },
  reviews: {
    width: '100%',
    height: 300,
    padding: 12,
    backgroundColor: 'white',
    marginTop: 4,
  },
  heartBox: {
    width: 40,
    height: 40,
    backgroundColor: grayAlpha,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    margin: 6,
    position: 'absolute',
    right: 10,
    top: 20,
  },
  arrowBox: {
    width: 40,
    height: 40,
    backgroundColor: grayAlpha,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 6,
    position: 'absolute',
    top: 20,
    left: 10,
  },
  quantity: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: 0,
    borderRadius: 20,
    backgroundColor: grayAlpha,
  },
  plusminusBox: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    margin: 6,
  },
  colorBox: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    margin: 4,
    borderColor: 'transparent',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  starContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  starBox: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4,
  },
  star: {
    borderRadius: 80,
    borderColor: 'transparent',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 500,
  },
  text: {
    fontSize: 16,
    fontWeight: 400,
    color: gray,
    padding: 8,
    width: '100%',
  },
  bottomButtons: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 2,
    borderTopColor: grayAlpha,
    padding: 6,
  },
  cartButton: {
    width: '30%',
    padding: 16,
    backgroundColor: 'white',
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: blue,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  previewButton: {
    width: '50%',
    padding: 16,
    backgroundColor: blue,
    margin: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'white',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
});
export default ProductDetails;
