import React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.header}></View>
        <View style={styles.body}></View>
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
  header: {
    width: '100%',
  },
  body: {
    width: '100%',
    height: '100%',
    padding: 10,
  },
});

export default CategoriesScreen;
