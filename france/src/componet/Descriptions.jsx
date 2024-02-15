import React from "react";
import { View, Text } from "react-native";

const slides = [
    {
        id: 1,
        title: 'Peruvian',
        description: 'Find amazing spats effortlssely, and be sure that that avery moment of your free time becomes truly unforgettable.',
        image: require('./src/assets/chica.jpg')

    }
]

export default function App(){
    const [showhomePague, setShowHomePague]= userState(false);

    return 
    <View style= {{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    }}>
        <Text>Home ascrim</Text>

    </View>
}