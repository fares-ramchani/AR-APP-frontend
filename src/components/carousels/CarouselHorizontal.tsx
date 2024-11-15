import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {Icon, Icons} from '../export.ts';
const SRC_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SRC_WIDTH * 0.42;
const DATA = [
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Third Item',
  },
  {
    title: 'First Item',
  },
  {
    title: 'Second Item',
  },
  {
    title: 'Third Item',
  },
];
const CarouselHorizontal = () => {
  return (
    <View>
      <FlatList
        numColumns={2}
        columnWrapperStyle={{gap: 10, paddingHorizontal: 12}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{gap: 10, paddingBottom: 12}}
        data={DATA}
        keyExtractor={(item, idx) => item?.title}
        renderItem={({item}) => (
          <View style={styles.card}>
            <View
              style={{
                flex: 1,
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
                padding: 15,
              }}>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  backgroundColor: 'white',
                  position: 'absolute',
                  zIndex: 10,
                  right: 20,
                  top: 20,
                  borderRadius: 50,
                  opacity: 0.7,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  color="black"
                  name="heart-outline"
                  type={Icons.Ionicons}
                  size={25}
                />
              </TouchableOpacity>

              <Image
                style={{
                  resizeMode: 'cover',
                  width: '100%',
                  height: '70%',
                  borderRadius: 10,
                }}
                source={require('asssets/img/wall.png')}
              />

              <Text
                style={{
                  color: 'grey',
                  fontSize: 14,
                  fontWeight: 'bold',
                  marginTop: 12,
                }}>
                Sverom chair
              </Text>
              <Text style={{color: 'black', fontSize: 14}}>65,000 TND</Text>
            </View>
          </View>
        )}></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_LENGTH,
    height: 180,
    overflow: 'hidden',
    borderRadius: 15,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 20,
  },
});

export default CarouselHorizontal;
