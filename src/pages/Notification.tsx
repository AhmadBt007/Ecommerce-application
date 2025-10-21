import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
//component
import BrowseBtn from '../components/ExploreCategoriesButton'

// images
import Bell from '../assets/images/bell.png'
const Notification = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ alignItems: "center", flex: 0.5 }}>
                <Text style={{ fontSize: 29, fontWeight: 900 }}>Notification</Text>
            </View>
            <View style={{ alignItems: "center", flex: 1 }}>

                <Image source={Bell} />
                <Text style={{marginTop:10,fontSize:25,fontWeight:400}}>No Notification Yet</Text>
                <BrowseBtn/>
               
            </View>
        </SafeAreaView>
    )
}

export default Notification

const styles = StyleSheet.create({})