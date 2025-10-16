import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    Image,
    ScrollView,
    ViewStyle,
    TextStyle,
    ImageStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BackArrow from '../assets/images/backArrow.svg';
import { useTheme } from '../context/ThemeContext';

// ✅ Type for Item
type Items = {
    id: string;
    name: string;
    img: any;
    price: string
};

const Hoodies = () => {
    const HoodItems: Items[] = [
        { id: '1', name: "Men's Fleece Pullover Hoodie", img: require('../assets/images/hood1.png'), price: '342' },
        { id: '2', name: 'Fleece Pullover Skate Hoodie', img: require('../assets/images/hood2.png'), price: '342' },
        { id: '3', name: 'Fleece Skate Hoodie', img: require('../assets/images/hood3.png'), price: '212' },
        { id: '4', name: "Men's Ice Dry Pullover Hoodie", img: require('../assets/images/hood4.png'), price: '140' },
        { id: '5', name: 'Black Venom Hoodie', img: require('../assets/images/hood5.png'), price: '300' },
        { id: '6', name: "Men's Basketball Gray Hoodie", img: require('../assets/images/hood6.png'), price: '299' },
    ];

    const navigation = useNavigation();
    const { isDark } = useTheme();

    return (
        <SafeAreaView style={[{ backgroundColor: isDark ? '#1d182a' : '#ffffff', flex: 1 } as ViewStyle]}>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <BackArrow width={28} height={28} fill="#979dac" style={styles.backArrow as ViewStyle} />
                    </TouchableOpacity>
                </View>

                {/* Hoodies Display */}
                <View style={styles.hoodContainer}>
                    <Text style={{ fontSize: 20, fontWeight: '900', color: isDark ? 'white' : 'black' } as TextStyle}>Hoodies (240)</Text>
                </View>

                <View style={{ padding: 15 } as ViewStyle}>
                    <View>
                        <FlatList
                            data={HoodItems}
                            keyExtractor={(item) => item.id}
                            numColumns={2}
                            nestedScrollEnabled={true}
                            columnWrapperStyle={{
                                justifyContent: 'space-between',
                                marginBottom: 15,
                            } as ViewStyle}
                            renderItem={({ item }) => (
                                <View
                                    style={{
                                        backgroundColor: isDark ? '#34303f' : '#eee',
                                        borderRadius: 10,
                                        padding: 10,
                                        width: '48%',
                                        alignItems: 'center',
                                    } as ViewStyle}
                                >
                                    <Image
                                        source={item.img}
                                        style={{ width: 170, height: 240, borderRadius: 10 } as ImageStyle}
                                    />
                                    <Text
                                        style={{ marginTop: 5, alignSelf: 'flex-start', fontSize: 15, fontWeight: 'condensed', color: isDark ? 'white' : 'black' } as TextStyle}
                                        numberOfLines={1}
                                        ellipsizeMode="tail"
                                    >
                                        {item.name}
                                    </Text>
                                    <Text style={{ marginTop: 1, alignSelf: 'flex-start', fontWeight: 900, fontSize: 15, color: isDark ? 'white' : 'black' } as TextStyle}>${item.price}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Hoodies;

const styles = StyleSheet.create({
    hoodContainer: {
        padding: 25,
    } as ViewStyle,
    backArrow: {
        margin: 15,
    } as ViewStyle,
});
