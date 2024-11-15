import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {gray, primary} from 'constants/Colors.ts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FavoritesScreen = ({navigation} : {navigation: any}) => {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View style={styles.cardsContainer}>
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetails')}>
            <ImageBackground
              source={require('asssets/img/arwallpaper.png')}
              style={styles.cardImage}>
              <TouchableOpacity style={styles.heartBox}>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  size={20}
                  style={styles.heartIcon}
                />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Chair</Text>
              <Text style={styles.cardPrice}>80 TND</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card}>
            <ImageBackground
              source={require('asssets/img/arwallpaper.png')}
              style={styles.cardImage}>
              <TouchableOpacity style={styles.heartBox}>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  size={20}
                  style={styles.heartIcon}
                />
              </TouchableOpacity>
            </ImageBackground>
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Chair</Text>
              <Text style={styles.cardPrice}>80 TND</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  scrollview: {
    flexGrow: 1,
    width: '100%',
  },
  cardsContainer: {
    width: '100%',
    height: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '50%',
    height: 200,
    backgroundColor: 'white',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    padding: 8,
    margin: 6,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 10,
  },
  cardBody: {
    width: '100%',
    padding: 10,
  },
  cardImage: {
    width: '100%',
    height: 120,
    backgroundColor: gray,
    borderRadius: 10,
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: primary,
    textAlign: 'left',
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: 500,
    color: gray,
  },
  heartBox: {
    width: 30,
    height: 30,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    margin: 6,
    position: 'absolute',
    right: 0,
  },
  heartIcon: {},
});

export default FavoritesScreen;
