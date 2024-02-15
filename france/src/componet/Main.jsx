import React from "react"
import Constants from 'expo-constants'
import { Text, View } from "react-native"
import Teo from "./Teo.jsx"
import Descriptions from "./Descriptions.jsx"
const Main = () => {
    return (
        <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1 }}>
            
            <Teo />
        </View>
    )
}

export default Main