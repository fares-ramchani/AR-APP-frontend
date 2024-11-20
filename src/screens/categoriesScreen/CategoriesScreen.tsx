import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon, {Icons} from 'components/icons/Icons.tsx';
import data from 'models/db.json';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <View style={styles.contentSearchContainer}>
            <Icon color="gray" name="search" type={Icons.Ionicons} size={20} />
            <TextInput
              placeholder="Search Item"
              placeholderTextColor="gray"
              style={styles.input}
            />
          </View>
          <View>
            <Icon color="gray" name="filter" type={Icons.Feather} size={20} />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.body}>
          {data.map((item, index) => (
            <TouchableOpacity key={index}>
              <Image
                style={styles.image}
                source={{
                  uri: item?.coverImage,
                }}
              />
              <Text style={styles.categoryName}>CategorieName</Text>
            </TouchableOpacity>
          ))}
        </View>
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
    paddingTop: 70,
    flexGrow: 1,
    width: '100%',
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    width: '90%',
  },
  contentSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    marginLeft: 10,
  },
  body: {
    width: '100%',
    padding: 20,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 110,
    borderRadius: 20,
    marginBottom: 25,
  },
  categoryName: {
    fontSize: 28,
    color: 'white',
    position: 'absolute',
    left: 20,
    bottom: 58,
  },
});

export default CategoriesScreen;
