import React from 'react';
import {StyleSheet, View, Text, ScrollView, TouchableOpacity} from 'react-native';
import Carousel from 'components/Carousel.tsx';
import HeaderHomeScreen from 'components/headerHomeScreen/HeaderHomeScreen.tsx';
import Icon, {Icons} from 'constants/Icons.tsx';
import { primary } from 'constants/Colors.ts';

import Carouselal from 'components/Carouselal.tsx';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.header}>
          <HeaderHomeScreen />
        </View>
        <View style={styles.body}>
          
          <View style={styles.catigorycontainer}>
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.cardIcon}>
              <Icon
                color="gray"
                name="star"
                type={Icons.SimpleLineIcons}
                size={30}
              />
            </TouchableOpacity>
            <Text style={{fontSize:10}}>Popular</Text>
            </View>
            <View style={{alignItems:'center'}}><TouchableOpacity style={styles.cardIcon}>
              <Icon
                color="gray"
                name="sofa-single-outline"
                type={Icons.MaterialCommunityIcons}
                size={30}
              />
            </TouchableOpacity>
            <Text style={{fontSize:10}}>Living room</Text></View>
            
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.cardIcon}>
              <Icon
                color="gray"
                name="chair-alt"
                type={Icons.MaterialIcons}
                size={30}
              />
            </TouchableOpacity>
            <Text style={{fontSize:10}}>Chair</Text>
            </View>
            
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.cardIcon}>
              <Icon
                color="gray"
                name="bed-outline"
                type={Icons.Ionicons}
                size={30}
              />
            </TouchableOpacity>
            <Text style={{fontSize:10}}>Bedroom</Text>
            </View>
            
            <View style={{alignItems:'center'}}>
            <TouchableOpacity style={styles.cardIcon}>
              <Icon
                color="gray"
                name="table-furniture"
                type={Icons.MaterialCommunityIcons}
                size={30}
              />
            </TouchableOpacity>
            <Text style={{fontSize:10}}>Workstation</Text>
            </View>
        
          </View>
          <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Latest Release</Text>
          <View style={styles.styletexteIconContainer}>
          <Text style={{color:primary,fontSize:16}}>see all</Text>
          <Icon
                color={primary}
                name="arrowright"
                type={Icons.AntDesign}
                size={15}
              />
          </View>
          
          </View>
          <Carousel />
       
          <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Latest Release</Text>
          <View style={styles.styletexteIconContainer}>
          <Text style={{color:primary,fontSize:16}}>see all</Text>
          <Icon
                color={primary}
                name="arrowright"
                type={Icons.AntDesign}
                size={15}
              />
          </View>
          
          </View>
         
          <Carouselal></Carouselal>
        </View>
        
         <View style={styles.footer}></View> 
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
  textContainer:{
    width:'100%',
flexDirection:'row',
justifyContent:'space-between',
padding:20
  },
  styletexteIconContainer:{
    height:"100%",
    flexDirection:'row',
    alignItems:'center',
  },
  textStyle:{
    fontSize:24,
    color:'black',
    fontWeight:'bold'
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

  body: {
    width: '100%',
    height: '100%',
    padding: 10,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex:10,
    top:-25
  },
  footer:{
    width: '100%',
    height: 50,
    padding: 10,
    backgroundColor: '#ffffff',
    
    
  }
});

export default HomeScreen;
