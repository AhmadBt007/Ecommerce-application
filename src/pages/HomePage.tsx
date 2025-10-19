import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    Animated,
    Alert,

} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput, FlatList, ScrollView } from 'react-native-gesture-handler';
import Switch from 'toggle-switch-react-native';
// pages
import ShopByCtg from './ShopByCtg';
import NotFound from '../components/NotFound';
// navigation
import { useNavigation } from '@react-navigation/native';
// Theme
import { useTheme } from '../context/ThemeContext';
// components
import SearchBar from '../components/SearchBar';
import { ImageStyle } from 'react-native/types_generated/index';

// fuse.js
import Fuse from 'fuse.js'
// Category from json 
import categories from '../data/categories.json'


// screenCategory
type ScreenCategory = {
    id: number;
    name: string;
    screen: string;
}


type CategoryItem = {
    id: string;
    img: any;
    name: string;
};
type TopSellItem = {
    id: string;
    img: any;
    name: String;
    price: number;
}

// 🟢 Ab Animated FlatList ko type ke sath define karo
const AnimatedFlatList = Animated.createAnimatedComponent(
    FlatList as new () => FlatList<CategoryItem>
);

const HomePage = () => {
    // navigation
    const navigation = useNavigation<any>();
    // Theme Change
    const { isDark, toggleTheme } = useTheme();
    const scrollX = useRef(new Animated.Value(0)).current;
    // fuse
    // const [fuse, setFuse] = useState<Fuse<any> | null>(null); //?
    const [query, setQuery] = useState('');
    // 🧠 Fuse instance for fuzzy search
    const fuse = new Fuse<ScreenCategory>(categories, {
        keys: ['name'],
        threshold: 0.3,
    });
    // 🔍 Search logic
    const handleSearch = () => {
        console.log('hello')
        const result = fuse.search(query.trim().toLowerCase());

        if (result.length > 0) {
            const matchedCategory = result[0].item;
           
            navigation.navigate(matchedCategory.screen); // ✅ dynamic navigation
        } else {
          navigation.navigate('NotFound')
        }
    };

    // New In 
    const ctgItem: CategoryItem[] = [
        { id: '1', img: require('../assets/images/hoodies.png'), name: 'Hoodies' },
        { id: '2', img: require('../assets/images/Shoes.png'), name: 'Shoes' },
        { id: '3', img: require('../assets/images/Shorts.png'), name: 'Shorts' },
        { id: '4', img: require('../assets/images/accessories.png'), name: 'Accessories' },
        { id: '5', img: require('../assets/images/bag.png'), name: 'Bag' },
        { id: '6', img: require('../assets/images/bag.png'), name: 'Bag' },
        { id: '7', img: require('../assets/images/hoodies.png'), name: 'Hoodies' },
        { id: '8', img: require('../assets/images/Shoes.png'), name: 'Shoes' },
        { id: '9', img: require('../assets/images/Shorts.png'), name: 'Shorts' },
        { id: '10', img: require('../assets/images/accessories.png'), name: 'Accessories' },
        { id: '11', img: require('../assets/images/bag.png'), name: 'Bag' },
        { id: '12', img: require('../assets/images/bag.png'), name: 'Bag' },
    ];

    // Top Selling Item
    const topSellItem: TopSellItem[] = [
        {
            id: '1',
            img: require('../assets/images/menPic.png'),
            name: "Men's  Jacket",
            price: 100
        },
        {
            id: '2',
            img: require('../assets/images/sandal.png'),
            name: "Sandal",
            price: 40
        },
        {
            id: '3',
            img: require('../assets/images/menPic.png'),
            name: "Men's  Jacket",
            price: 120
        },
        {
            id: '4',
            img: require('../assets/images/sandal.png'),
            name: "Men's  Jacket",
            price: 120
        },
        {
            id: '5',
            img: require('../assets/images/menPic.png'),
            name: "Men's  Jacket",
            price: 120
        },

    ];




    return (
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor: isDark ? '#1d182a' : '#ffff' },
            ]}
        >
        
            <ScrollView>
                {/* Header */}
                <View style={styles.header}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Switch
                            isOn={isDark}
                            onColor="black"
                            offColor="gray"
                            thumbOnStyle={{ backgroundColor: '#f5dd4b' }}
                            thumbOffStyle={{ backgroundColor: '#f4f3f4' }}
                            onToggle={toggleTheme}
                        />
                        <Text
                            style={{
                                marginLeft: 8,
                                fontSize: 16,
                                color: isDark ? '#fff' : '#000',
                            }}
                        >
                            {isDark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
                        <Image
                            source={require('../assets/images/profile.png')}
                            style={{ width: 40, height: 40 }}
                        />
                        <Image
                            source={require('../assets/images/cart.png')}
                            style={{ width: 40, height: 40 } as ImageStyle}
                        />
                    </View>
                </View>

                {/* Search Bar */}
                <View style={styles.searchContainer}>
                    <SearchBar
                        placeholder="Search categories..."
                        value={query}
                        onChangeText={setQuery}
                        onSubmit={handleSearch}
                        
                    />

                </View>

                {/* Categories */}
                <View style={styles.ctgContainer}>
                    <View style={styles.ctgHeading}>
                        <Text style={[styles.ctgText, { color: isDark ? "white" : "black" }]}>Categories</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("ShopByCtg")}>

                            <Text style={{ fontSize: 15, fontWeight: '400', color: isDark ? "white" : "black" }}>See All</Text>
                        </TouchableOpacity>
                    </View>

                    <AnimatedFlatList
                        horizontal={true}
                        data={ctgItem}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        // contentContainerStyle={{ paddingVertical: 20 }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                            { useNativeDriver: true },
                        )}
                        renderItem={({ item, index }) => {
                            const inputRange = [(index - 1) * 80, index * 80, (index + 1) * 80];
                            const scale = scrollX.interpolate({
                                inputRange,
                                outputRange: [0.8, 1, 0.8],
                                extrapolate: 'clamp',
                            });
                            const opacity = scrollX.interpolate({
                                inputRange,
                                outputRange: [0.5, 1, 0.5],
                                extrapolate: 'clamp',
                            });

                            return (
                                <Animated.View
                                    style={{
                                        alignItems: 'center',
                                        marginRight: 10,
                                        transform: [{ scale }],
                                        opacity,


                                    }}
                                >
                                    <Image
                                        source={item.img}
                                        style={{ width: 60, height: 60, borderRadius: 30 }}
                                    />
                                    <Text
                                        style={{
                                            marginTop: 5,
                                            color: isDark ? '#fff' : '#000',
                                            fontSize: 14,
                                            fontWeight: '700',
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </Animated.View>
                            );
                        }}
                        snapToInterval={80}
                        decelerationRate="fast"
                    />
                </View>

                {/* Top selling */}
                <View style={styles.topSellContainer}>
                    <View style={styles.ctgHeading}>
                        <Text style={[styles.ctgText, { color: isDark ? "white" : "black" }]}>Top Selling</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: isDark ? "white" : "black" }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topSellDisplay}>

                        <FlatList<TopSellItem>
                            horizontal={true}
                            data={topSellItem}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ alignItems: 'center', marginVertical: 10, justifyContent: 'space-between', marginLeft: 10, backgroundColor: isDark ? "#34303f" : "#f6f6f6", borderRadius: 20 }}>
                                    <Image
                                        source={item.img}
                                        style={{ maxWidth: 200, maxHeight: 300, borderRadius: 10, }}
                                    />
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '600', color: isDark ? "white" : "black" }}>
                                            {item.name}

                                        </Text>
                                        <Text style={{ marginTop: 4, color: isDark ? "white" : "black" }}>${item.price}</Text>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>

                {/* New in  */}
                <View style={styles.newInContainer}>
                    <View style={styles.ctgHeading}>
                        <Text style={[styles.ctgText, { color: '#8e6def' }]}>New In </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: 15, fontWeight: '400', color: isDark ? "white" : "black" }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.topSellDisplay}>
                        <FlatList<TopSellItem>
                            horizontal={true}
                            data={topSellItem}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={{ alignItems: 'center', marginVertical: 10, justifyContent: 'space-between', marginLeft: 10, backgroundColor: isDark ? "#34303f" : "#f6f6f6", borderRadius: 20 }}>
                                    <Image
                                        source={item.img}
                                        style={{ maxWidth: 200, maxHeight: 300, borderRadius: 10, }}
                                    />
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ marginTop: 10, fontSize: 15, fontWeight: '600', color: isDark ? "white" : "black" }}>
                                            {item.name}

                                        </Text>
                                        <Text style={{ marginTop: 4, color: isDark ? "white" : "black" }}>${item.price}</Text>
                                    </View>
                                </View>
                            )}
                        />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: { flex: 1, width: '100%', height: '100%' },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 20,
    },
    searchContainer: { padding: 10, width: 'auto', height: 80 },
    search: { borderRadius: 16, paddingLeft: 20, height: 50 },
    ctgContainer: { padding: 30, gap: 10 },
    ctgHeading: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ctgText: { fontSize: 20, fontWeight: '900' },
    topSellContainer: {
        paddingLeft: 30,
        paddingRight: 30,


    },
    topSellDisplay: {
        display: 'flex',

    },
    newInContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 15
    }
});
