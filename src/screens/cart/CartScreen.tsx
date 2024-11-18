/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {blue, gray, grayAlpha, primary} from 'constants/Colors.ts';

const CartScreen = () => {
  const cartItems = [
    {id: 1, name: 'Sofa', color: 'Gray', quantity: 2, price: 750},
    {id: 2, name: 'Chair', color: 'Black', quantity: 1, price: 250},
  ];
  return (
    <>
      <ScrollView style={styles.scrollview}>
        <View style={styles.container}>
          {cartItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.card}>
              <MaterialCommunityIcons
                name="close"
                size={28}
                style={styles.deleteicon}
                color={gray}
              />
              <View style={{width: '40%'}}>
                <Image
                  source={require('asssets/img/arwallpaper.png')}
                  style={styles.image}
                />
              </View>
              <View style={styles.infos}>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.subtitle}>Color: {item.color}</Text>
                  <Text style={styles.subtitle}>Quantity: {item.quantity}</Text>
                </View>
                <View>
                  <Text style={styles.title}>{item.price} TND</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View style={styles.summary}>
            <View style={[styles.summarySection, {borderTopColor: 'white'}]}>
              <Text style={styles.summarytitle}>Summary</Text>
            </View>
            <View style={styles.summarySection}>
              <View style={styles.summaryitem}>
                <Text style={styles.summarysubtitle}>Products</Text>
                <Text style={styles.summarysubtitle}>1000 TND</Text>
              </View>
              <View style={styles.summaryitem}>
                <Text style={styles.summarysubtitle}>Delivery & Handling </Text>
                <Text style={styles.summarysubtitle}>Free</Text>
              </View>
              <View style={styles.summaryitem}>
                <Text style={styles.summarysubtitle}>Taxes</Text>
                <Text style={styles.summarysubtitle}>No Taxes</Text>
              </View>
            </View>
            <View style={styles.summarySection}>
              <View style={styles.summaryitem}>
                <Text style={styles.summarytitle}>Total</Text>
                <Text style={styles.summarytitle}>1000 TND</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={{color: 'white', textAlign: 'center', fontSize:18, fontWeight: 500}}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollview: {
    flexGrow: 1,
    width: '100%',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    padding: 10,
    margin: 6,
    width: '90%',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  image: {width: 120, height: 120},
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '60%',
  },
  deleteicon: {
    position: 'absolute',
    right: 8,
    top: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
    color: primary,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: 500,
    color: 'gray',
  },
  summary: {
    width: '90%',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 2,
    padding: 10,
    marginBottom: 100,
    margin: 6,
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  summarySection: {
    width: '95%',
    justifyContent: 'center',
    padding: 4,
    borderTopWidth: 2,
    borderTopColor: grayAlpha,
  },
  summaryitem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  summarytitle: {
    fontSize: 18,
    fontWeight: 500,
    color: 'black',
  },
  summarysubtitle: {
    fontSize: 14,
    fontWeight: 400,
    color: 'gray',
    margin: 2,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
  },
  checkoutButton: {
    width: '70%',
    padding: 20,
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

export default CartScreen;
