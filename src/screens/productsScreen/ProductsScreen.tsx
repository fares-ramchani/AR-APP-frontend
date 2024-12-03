import React, {useState, useMemo, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import data from 'models/db.json';
import {CarouselHorizontal} from 'components/export.ts';
import Icon, {Icons} from 'components/icons/Icons.tsx';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {Drawer} from 'react-native-drawer-layout';
import {debounce} from 'lodash';

const ProductsScreen = ({route, navigation}: {route: any; navigation: any}) => {
  const [open, setOpen] = useState(false);
  const {categoryName} = route.params;

  const defaultPriceValues = [200, 900];
  const defaultReviewValues = [1, 5];

  const [priceValues, setPriceValues] = useState(defaultPriceValues);
  const [reviewValues, setReviewValues] = useState(defaultReviewValues);
  const [searchValue, setSearchValue] = useState('');

  const filteredProducts = useMemo(() => {
    return data.filter(product => {
      const averageRating =
        product.reviews.length > 0
          ? product.reviews.reduce((sum, r) => sum + r.rating, 0) /
            product.reviews.length
          : 0;
      return (
        product.price >= priceValues[0] &&
        product.price <= priceValues[1] &&
        averageRating >= reviewValues[0] &&
        averageRating <= reviewValues[1] &&
        product.productName.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
  }, [priceValues, reviewValues, searchValue]);

  React.useEffect(() => {
    if (categoryName) {
      navigation.setOptions({
        title: categoryName,
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity
            style={{padding: 15}}
            onPressIn={() => {
              navigation.navigate('BottomBar', {screen: 'Categories'});
            }}>
            <Icon
              color="black"
              name="arrow-left"
              type={Icons.Feather}
              size={26}
            />
          </TouchableOpacity>
        ),
      });
    }
  }, [navigation, categoryName]);

  const priceSliderChange = useCallback(
    debounce(newValues => setPriceValues(newValues), 300),
    [],
  );

  const reviewSliderChange = useCallback(
    debounce(newValues => setReviewValues(newValues), 300),
    [],
  );

  const resetFilters = () => {
    setPriceValues(defaultPriceValues);
    setReviewValues(defaultReviewValues);
    setSearchValue('');
  };

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => (
        <View style={[styles.navigationContainer]}>
          <View>
            <View>
              <Text style={styles.drawerTitle}>Filter</Text>
              <TouchableOpacity
                style={styles.styleCloseDrawer}
                onPress={() => setOpen(prevOpen => !prevOpen)}>
                <Icon
                  color="gray"
                  name="close"
                  type={Icons.AntDesign}
                  size={26}
                />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.text}>Price</Text>
              <MultiSlider
                sliderLength={300}
                values={[priceValues[0], priceValues[1]]}
                onValuesChange={priceSliderChange}
                min={200}
                max={1200}
                step={1}
              />
              <View style={styles.priceRangeContainer}>
                <Text style={styles.text}>{priceValues[0]}</Text>
                <Text style={styles.text}>{priceValues[1]}</Text>
              </View>
            </View>
            <View>
              <Text style={styles.text}>Reviews</Text>
              <MultiSlider
                sliderLength={300}
                values={[reviewValues[0], reviewValues[1]]}
                onValuesChange={reviewSliderChange}
                min={1}
                max={5}
                step={1}
              />
              <View style={styles.priceRangeContainer}>
                <Text style={styles.text}>{reviewValues[0]} ★</Text>
                <Text style={styles.text}>{reviewValues[1]} ★</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={resetFilters} style={styles.resetButton}>
            <Text style={styles.resetButtonText}>Reset Filters</Text>
          </TouchableOpacity>
        </View>
      )}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.searchContainer}>
            <TextInput
              placeholder="Search Item"
              placeholderTextColor="gray"
              style={styles.input}
              value={searchValue}
              onChangeText={setSearchValue}
            />
          </View>
          <TouchableOpacity onPress={() => setOpen(prevOpen => !prevOpen)}>
            <Icon color="gray" name="filter" type={Icons.Feather} size={28} />
          </TouchableOpacity>
        </View>
        <View style={styles.carouselStyle}>
          {filteredProducts.length > 0 ? (
            <CarouselHorizontal DATA={filteredProducts} />
          ) : (
            <Text>No products found with selected filters.</Text>
          )}
        </View>
      </View>
    </Drawer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselStyle: {
    marginTop: 75,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
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
  navigationContainer: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  styleCloseDrawer: {
    position: 'absolute',
    top: 10,
    right: -20,
  },
  text: {
    fontSize: 17,
    marginVertical: 5,
    padding: 10,
  },
  drawerTitle: {
    fontSize: 28,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  priceRangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  resetButton: {
    width: '80%',
    backgroundColor: '#ff851b',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 30,
  },
  resetButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductsScreen;
