import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useTheme } from '../context/ThemeContext';
// icon
import BackArrow from '../assets/images/backArrow.svg';
// navigation
import { useNavigation } from '@react-navigation/native';

const ShopByCtg = () => {
  // navigation
  const navigation = useNavigation()
  // theme
  const { isDark } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDark ? '#1d182a' : '#fff', paddingTop: 15 }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackArrow width={28} height={28} fill="#979dac" style={styles.backArrow} />
      </TouchableOpacity>
      {/* Choice */}
      <View style={styles.choiceContainer}>
        <View>
          <Text style={{ fontSize: 30, fontWeight: '900', color: isDark ? 'white' : 'black' }}>Shop by Categories</Text>
        </View>
        <View style={styles.ctgContainer}>
          {/* Items */}
          <TouchableOpacity onPress={()=>navigation.navigate('Hoodies')}>
            <View style={[[styles.ctgItems, { backgroundColor: isDark ? '#34303f' : '#f4f4f4' }], { backgroundColor: isDark ? '#34303f' : '#f4f4f4' }]}>
              <Image
                source={require('../assets/images/hoodCtg.png')}
                style={{ width: 60, height: 60 }}
              />
              <Text style={[styles.ctgText, { color: isDark ? '#f4f4f4' : 'black' }]}>Hoodies</Text>
            </View>
          </TouchableOpacity>

          <View style={[styles.ctgItems, { backgroundColor: isDark ? '#34303f' : '#f4f4f4' }]}>
            <Image
              source={require('../assets/images/accessoriesCtg.png')}
              style={{ width: 60, height: 60 }}
            />
            <Text style={[styles.ctgText, { color: isDark ? '#f4f4f4' : 'black' }]}>Accessories</Text>
          </View>
          <View style={[styles.ctgItems, { backgroundColor: isDark ? '#34303f' : '#f4f4f4' }]}>
            <Image
              source={require('../assets/images/shortsCtg.png')}
              style={{ width: 60, height: 60 }}
            />
            <Text style={[styles.ctgText, { color: isDark ? '#f4f4f4' : 'black' }]}>Shorts</Text>
          </View>
          <View style={[styles.ctgItems, { backgroundColor: isDark ? '#34303f' : '#f4f4f4' }]}>
            <Image
              source={require('../assets/images/Shoes.png')}
              style={{ width: 60, height: 60 }}
            />
            <Text style={[styles.ctgText, { color: isDark ? '#f4f4f4' : 'black' }]}>Shoes</Text>
          </View>
          <View style={[styles.ctgItems, { backgroundColor: isDark ? '#34303f' : '#f4f4f4' }]}>
            <Image
              source={require('../assets/images/bag.png')}
              style={{ width: 60, height: 60 }}
            />
            <Text style={[styles.ctgText, { color: isDark ? '#f4f4f4' : 'black' }]}>Bag</Text>
          </View>
        </View>
      </View>


    </SafeAreaView>
  );
};

export default ShopByCtg;

const styles = StyleSheet.create({
  choiceContainer: {
    marginTop: 10,
    padding: 10
  },
  ctgContainer: {
    gap: 20,
    padding: 10
  },
  ctgItems: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 90,
    // backgroundColor:,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 20,
    gap: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 9,


  },
  ctgText: {
    fontSize: 20,
    fontFamily: 'Circular Std',
    fontWeight: '700',
  }
})