import React from 'react';
import data from 'models/db.json';
import {
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  interpolate,
  Extrapolate,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';
import {primary} from 'constants/Colors.ts';
import {Icon, Icons} from '../export.ts';

const SRC_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SRC_WIDTH * 0.62;
const SPACING = SRC_WIDTH * 0.01;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.05) / 5;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface itemProps {
  index: number;
  scrollX: Animated.SharedValue<number>;
  product: any;
}

function Item({index, scrollX, product}: itemProps) {
  const inputRange = [
    (index - 1) * (CARD_LENGTH + SPACING),
    index * (CARD_LENGTH + SPACING),
    (index + 1) * (CARD_LENGTH + SPACING),
  ];

  const cardStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      scrollX.value,
      inputRange,
      [0.8, 1, 0.8],
      Extrapolate.CLAMP,
    );

    const opacity = interpolate(
      scrollX.value,
      inputRange,
      [0.5, 1, 0.5],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale}],
      opacity,
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        cardStyle,
        {
          marginLeft: index === index - 1 ? SIDECARD_LENGTH : SPACING,
          marginRight: index === index + 1 ? SIDECARD_LENGTH : SPACING,
        },
      ]}>
      <View style={styles.cardContent}>
        <TouchableOpacity style={styles.heartIcon}>
          <Icon
            color="black"
            name="heart-outline"
            type={Icons.Ionicons}
            size={25}
          />
        </TouchableOpacity>

        <Image
          style={styles.image}
          source={{
            uri: product?.coverImage,
          }}
        />

        <Text style={styles.productName}>{product?.productName}</Text>
        <Text style={styles.productPrice}>{product?.price} TND</Text>
      </View>
    </Animated.View>
  );
}

export default function CarouselVertical() {
  const scrollX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollX.value = event.contentOffset.x;
      console.log('aaaaa= ' + scrollX.value);
    },
  });

  const DATA = data;

  return (
    <Animated.View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
        snapToInterval={0}
        disableIntervalMomentum
        disableScrollViewPanResponder
        snapToAlignment="center"
        data={DATA}
        horizontal
        renderItem={({item, index}) => {
          return <Item index={index} scrollX={scrollX} product={item} />;
        }}
        //@ts-ignore
        keyExtractor={item => item.id.toString()}
        onScroll={scrollHandler}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    width: CARD_LENGTH,
    height: 270,
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
  cardContent: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  heartIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    position: 'absolute',
    zIndex: 10,
    right: 25,
    top: 25,
    borderRadius: 50,
    opacity: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
  productName: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },
  productPrice: {
    color: 'black',
    fontSize: 20,
  },
});
