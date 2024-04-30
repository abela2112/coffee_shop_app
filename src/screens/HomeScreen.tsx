import {ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useStore} from '../store/store';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme/theme';
import HeaderBar from '../components/HeaderBar';
const getCatagoriesFromData = (data: any) => {
  let temp: any = {};
  for (let i = 0; i < data.length; i++) {
    if (temp[data[i].name] == undefined) {
      temp[data[i].name] = 1;
    } else {
      temp[data[i].name] += 1;
    }
  }

  let catagories = Object.keys(temp);
  catagories.unshift('All');
  return catagories;
};

const getCoffeeList = (data: Array<any>, category: string) => {
  if (category == 'All') {
    return data;
  } else {
    return data.filter((item: any) => item.name === category);
  }
};
const HomeScreen = () => {
  const coffeeList = useStore((state: any) => state.CoffeeList);
  const [categories, setCategories] = useState(
    getCatagoriesFromData(coffeeList),
  );
  const [categoryIndex, setCategoryIndex] = useState({
    index: 0,
    category: categories[0],
  });
  const [sortedCoffeeList, setSortedCoffeeList] = useState(
    getCoffeeList(coffeeList, categoryIndex.category),
  );
  const [searchText, setSearchText] = useState('');

  const tabBarHeight = useBottomTabBarHeight();
  return (
    <View style={styles.screenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        {/* headerbar */}
        <HeaderBar title="Coffee List" />
        {/* categories */}
        <Text style={styles.screenText}>
          Find the best {'\n'} coffee for you
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  statusBar: {
    backgroundColor: COLORS.primaryBlackHex,
  },
  scrollView: {
    flexGrow: 1,
  },
  screenText: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    padding: SPACING.space_30,
  },
});
export default HomeScreen;
