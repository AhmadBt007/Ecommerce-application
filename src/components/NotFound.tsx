import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ViewStyle } from 'react-native/types';
import SearchBar from './SearchBar';
import BackArrow from '../assets/images/backArrow.svg';
import { useNavigation } from '@react-navigation/native';
import Fuse from 'fuse.js';

// ⚠️ Temporary data (replace with your real categories & types)
const categories = [
  { name: 'T-Shirts', screen: 'TShirtScreen' },
  { name: 'Jeans', screen: 'JeansScreen' },
  { name: 'Jackets', screen: 'JacketScreen' },
];

type ScreenCategory = {
  name: string;
  screen: string;
};

const NotFound = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');

  // 🧠 Fuse instance for fuzzy search
  const fuse = new Fuse<ScreenCategory>(categories, {
    keys: ['name'],
    threshold: 0.3,
  });

  // 🔍 Search logic
  const handleSearch = () => {
    const result = fuse.search(query.trim().toLowerCase());

    if (result.length > 0) {
      const matchedCategory = result[0].item;
      // ✅ Dynamic navigation
      navigation.navigate(matchedCategory.screen as never);
    } else {
      Alert.alert('Not Found', `No results for "${query}"`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <SearchBar
          placeholder="Search categories..."
          value={query}
          onChangeText={setQuery}
          onSubmit={handleSearch}
        />
      </View>

      <View style={styles.outerBox}>
        <Image source={require('../assets/images/notFoundSearch.png')} />
        <View style={styles.innerBox as ViewStyle}>
          <Text style={styles.errorText}>
            Sorry, we couldn't find any matching result for your search.
          </Text>

          <TouchableOpacity style={styles.explore}>
            <Text style={styles.exploreText}>Explore Categories</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NotFound;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  outerBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerBox: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  errorText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'black',
    marginVertical: 10,
    fontWeight: '400',
    lineHeight: 28,
  },
  explore: {
    backgroundColor: '#8e6def',
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 10,
  },
  exploreText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '500',
  },
});
