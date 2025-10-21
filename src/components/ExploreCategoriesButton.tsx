import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
// navigation
import { useNavigation } from '@react-navigation/native';
const ExploreCategoriesButton = () => {
    // navigation
    const navigation = useNavigation<any>();
    return (
        <View>
            <TouchableOpacity style={{ backgroundColor: '#8e6def', height: 60, width: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 40, marginTop: 30 }} onPress={() => navigation.navigate("ShopByCtg")}>
                <Text style={{ fontSize: 18, color: 'white' }}>Explore Categories</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ExploreCategoriesButton

const styles = StyleSheet.create({})