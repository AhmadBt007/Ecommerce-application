import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ViewStyle } from 'react-native/types_generated/index'

// icons
import BackArrow from '../assets/images/backArrow.svg';
// navigation
import { useNavigation } from '@react-navigation/native';
const NotFound = () => {
    // navigation
    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackArrow  />
            </TouchableOpacity>

            <View style={styles.outerBox}>
                <Image
                    source={require('../assets/images/notFoundSearch.png')}

                />
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
    )
}

export default NotFound

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    outerBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerBox: {


        alignItems: 'center',
        paddingHorizontal: 20, // 👈 text ko thoda margin mil gaya
        marginTop: 10,
    },
    errorText: {
        fontSize: 24,
        textAlign: 'center', // 👈 ye main property hai
        color: 'black',
        marginVertical: 10,
        fontWeight: '400',
        lineHeight: 28, // 👌 thoda readable spacing
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
