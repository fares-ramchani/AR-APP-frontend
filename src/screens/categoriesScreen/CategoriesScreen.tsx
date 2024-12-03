import React, {useState} from 'react';
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

const CategoriesScreen = ({navigation}: {navigation: any}) => {
  const [searchValue, setSearchValue] = useState('');

  const filteredCategories = data.filter(item =>
    item.categorie.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <View style={styles.contentSearchContainer}>
            <Icon color="gray" name="search" type={Icons.Ionicons} size={20} />
            <TextInput
              placeholder="Search Categories"
              placeholderTextColor="gray"
              style={styles.input}
              value={searchValue}
              onChangeText={setSearchValue}
            />
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.body}>
          {filteredCategories.length > 0 ? (
            filteredCategories.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() =>
                  navigation.navigate('ProductsScreen', {
                    categoryName: item.categorie,
                  })
                }>
                <Image
                  style={styles.image}
                  source={{
                    uri: item?.coverImage,
                  }}
                />
                <Text style={styles.categoryName}>{item?.categorie}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.noResultsText}>No categories found.</Text>
          )}
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
    maxHeight: 50,
  },
  contentSearchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: 'black',
    marginLeft: 10,
    maxWidth: '84%',
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
  noResultsText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CategoriesScreen;
