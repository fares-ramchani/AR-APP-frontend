/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
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
} from 'react-native-reanimated';
import { primary } from 'constants/Colors.ts';
import Icon, { Icons } from 'constants/Icons.tsx';

const SRC_WIDTH = Dimensions.get('window').width;
const CARD_LENGTH = SRC_WIDTH * 0.62;
const SPACING = SRC_WIDTH * 0.05;
const SIDECARD_LENGTH = (SRC_WIDTH * 0.1) / 5;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

interface itemProps {
  index: number;
  scrollX: number;
}

function Item({index, scrollX}: itemProps) {
  const size = useSharedValue(0.8);

  const inputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];

  size.value = interpolate(
    scrollX,
    inputRange,
    [0.8, 1, 0.8],
    Extrapolate.CLAMP,
  );

  const opacity = useSharedValue(1);
  const opacityInputRange = [
    (index - 1) * CARD_LENGTH,
    index * CARD_LENGTH,
    (index + 1) * CARD_LENGTH,
  ];
  opacity.value = interpolate(
    scrollX,
    opacityInputRange,
    [0.5, 1, 0.5],
    Extrapolate.CLAMP,
  );

  const cardStyle = useAnimatedStyle(() => {
    return {
      transform: [{scaleY: size.value}],
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View
      style={[
        styles.card,
        cardStyle,
        {
          marginLeft: index == 0 ? SIDECARD_LENGTH : SPACING,
          marginRight: index == 2 ? SIDECARD_LENGTH : SPACING,
        },
      ]}>
      <View
        
        style={{flex:1, width: '100%', height: '100%',backgroundColor:'white',padding:20 }}
      >
        <TouchableOpacity style={{width:40,height:40,backgroundColor:'white',position:'absolute',zIndex:10,right:25,top:25,borderRadius:50,opacity:0.7,justifyContent:'center',alignItems:'center'}}>
        <Icon color="black" name="heart-outline" type={Icons.Ionicons} size={25} />
        </TouchableOpacity>
        
        <Image
        style={{resizeMode:'cover', width: '100%', height: '70%',borderRadius:10 }}
        source={require('asssets/img/wall.png')} 
        />

       
        <Text style={{color:'grey',fontSize:20,fontWeight:'bold',marginTop:12}}>Sverom chair</Text>
        <Text  style={{color:'black',fontSize:20}}>65,000 TND</Text>
      </View>
    </Animated.View>
  );
}

export default function Carousel() {
  const [scrollX, setScrollX] = useState(0);

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '56454154',
      title: 'sdfdsfd',
    },
    {
      id: '00147',
      title: 'ddfsdfsdfsdf',
    },
    {
      id: '036847989',
      title: 'smfkmosjfusgfi',
    },
  ];

  return (
    <Animated.View>
      <AnimatedFlatList
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        decelerationRate={0.8}
        snapToInterval={CARD_LENGTH + SPACING * 1.5}
        disableIntervalMomentum={true}
        disableScrollViewPanResponder={true}
        snapToAlignment={'center'}
        data={DATA}
        horizontal={true}
        renderItem={({item, index}) => {
          return <Item index={index} scrollX={scrollX} />;
        }}
        //@ts-ignore
        keyExtractor={item => item.id}
        onScroll={event => {
          setScrollX(event.nativeEvent.contentOffset.x);
        }}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin:10,
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
});
