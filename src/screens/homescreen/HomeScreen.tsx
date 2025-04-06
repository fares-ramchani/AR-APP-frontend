import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Alert,
  Animated,
} from 'react-native';
import CarouselVertical from 'components/carousels/CarouselVertical.tsx';
import HeaderHomeScreen from 'components/headerHomeScreen/HeaderHomeScreen.tsx';
import {primary} from 'constants/Colors.ts';
import CarouselHorizontal from 'components/carousels/CarouselHorizontal.tsx';
import {Icon, Icons} from 'components/export.ts';
import api from '../../services/axios/api';
import {Product} from '../../models/product';

const HomeScreen = () => {
  const dummyData = [{id: 1}, {id: 2}];
  const [productsList, setproductsList] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const opacity = useRef(new Animated.Value(0.5)).current;

  const getproducts = async () => {
    try {
      setLoading(true);
      const response = await api.get('/product');
      setproductsList(response.data.data);
    } catch (error: any) {
      Alert.alert(
        'Récupération de produit échouée',
        error.message || 'Something went wrong',
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getproducts();
  }, []);

  useEffect(() => {
    if (loading) {
      Animated.loop(
        Animated.sequence([
          Animated.timing(opacity, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0.5,
            duration: 7000,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    }
  }, [loading]);

  const premierComposant = () => (
    <>
      <View style={styles.header}>
        <HeaderHomeScreen />
      </View>

      <View style={styles.catigorycontainer}>
        {loading
          ? Array.from({length: 5}).map((_, index) => (
              <View style={{alignItems: 'center'}} key={index}>
                <Animated.View style={[styles.skeletonIcon, {opacity}]} />
                <View
                  style={{
                    width: 30,
                    height: 10,
                    backgroundColor: '#e0e0e0',
                    borderRadius: 5,
                    marginTop: 5,
                  }}
                />
              </View>
            ))
          : [
              {
                name: 'Popular',
                icon: {type: Icons.SimpleLineIcons, name: 'star'},
              },
              {
                name: 'Living room',
                icon: {
                  type: Icons.MaterialCommunityIcons,
                  name: 'sofa-single-outline',
                },
              },
              {
                name: 'Chair',
                icon: {type: Icons.MaterialIcons, name: 'chair-alt'},
              },
              {
                name: 'Bedroom',
                icon: {type: Icons.Ionicons, name: 'bed-outline'},
              },
              {name: 'All', icon: {type: Icons.Feather, name: 'menu'}},
            ].map((item, index) => (
              <View style={{alignItems: 'center'}} key={index}>
                <TouchableOpacity style={styles.cardIcon}>
                  <Icon
                    color="gray"
                    name={item.icon.name}
                    type={item.icon.type}
                    size={30}
                  />
                </TouchableOpacity>
                <Text style={{fontSize: 10}}>{item.name}</Text>
              </View>
            ))}
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Latest Viewed</Text>
        <View style={styles.styletexteIconContainer}>
          <Text style={{color: primary, fontSize: 16}}>See all</Text>
          <Icon
            color={primary}
            name="arrowright"
            type={Icons.AntDesign}
            size={15}
          />
        </View>
      </View>
      {loading ? (
        <View style={[styles.containerskeleton, {paddingHorizontal: 20}]}>
          {Array.from({length: 1}).map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.skeletonCard1, {opacity}]}
            />
          ))}
          {Array.from({length: 1}).map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.skeletonCard2, {opacity}]}
            />
          ))}
        </View>
      ) : (
        <CarouselVertical DATA={productsList} />
      )}
    </>
  );

  const dusiemeComposant = () => (
    <>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>Latest Release</Text>
        <View style={styles.styletexteIconContainer}>
          <Text style={{color: primary, fontSize: 16}}>See all</Text>
          <Icon
            color={primary}
            name="arrowright"
            type={Icons.AntDesign}
            size={15}
          />
        </View>
      </View>

      {loading ? (
        <View style={[styles.containerskeleton, {paddingHorizontal: 20}]}>
          {Array.from({length: 6}).map((_, index) => (
            <Animated.View
              key={index}
              style={[styles.skeletonCard, {opacity}]}
            />
          ))}
        </View>
      ) : (
        <View style={styles.containerCarouselHerisontal}>
          <CarouselHorizontal DATA={productsList} />
        </View>
      )}
    </>
  );

  return (
    <FlatList
      data={dummyData}
      keyExtractor={item => item.id.toString()}
      ListHeaderComponent={premierComposant}
      ListFooterComponent={dusiemeComposant}
      renderItem={null}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  styletexteIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  cardIcon: {
    width: 55,
    height: 55,
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    height: 260,
  },
  catigorycontainer: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerskeleton: {
    width: '100%',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  skeletonCard: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 15,
  },
  skeletonCard1: {
    width: 230,
    height: 250,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 15,
  },
  skeletonCard2: {
    width: 60,
    height: 250,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
    marginBottom: 15,
  },
  skeletonIcon: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#e0e0e0',
  },
  containerCarouselHerisontal: {
    marginBottom: 70,
  },
});

export default HomeScreen;
