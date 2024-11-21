import React from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import CarouselVertical from 'components/carousels/CarouselVertical.tsx';
import HeaderHomeScreen from 'components/headerHomeScreen/HeaderHomeScreen.tsx';
import {primary} from 'constants/Colors.ts';
import CarouselHorizontal from 'components/carousels/CarouselHorizontal.tsx';
import {Icon, Icons} from 'components/export.ts';

const HomeScreen = () => {
  const dummyData = [{id: 1}, {id: 2}];
  const premierComposant = () => (
    <>
      <View style={styles.header}>
        <HeaderHomeScreen />
      </View>
      <View style={styles.catigorycontainer}>
        {[
          {name: 'Popular', icon: {type: Icons.SimpleLineIcons, name: 'star'}},
          {
            name: 'Living room',
            icon: {
              type: Icons.MaterialCommunityIcons,
              name: 'sofa-single-outline',
            },
          },
          {name: 'Chair', icon: {type: Icons.MaterialIcons, name: 'chair-alt'}},
          {name: 'Bedroom', icon: {type: Icons.Ionicons, name: 'bed-outline'}},
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
      <CarouselVertical />
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
      <CarouselHorizontal />
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
    height: '100%',
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
  flatListStyle: {
    alignItems: 'center',
  },
});

export default HomeScreen;
