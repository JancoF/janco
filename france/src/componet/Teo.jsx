import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    TouchableOpacity,
} from 'react-native';


const App = () => (
    <SafeAreaView style={styles.container}>

        <View>
            <Text style={styles.title}>
                Dicover!
            </Text>
            
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => Alert.alert('Suivant button pressed')}
                >
                    <Text style={styles.buttonText}>Suivant</Text>
                </TouchableOpacity>
        </View>
        
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        
    },
    title: {
        textAlign: 'center',
        fontSize: 50,
        padding:100,
        marginVertical: 8,
        fontWeight: 'bold',


    },
   
    button: {
        backgroundColor: '#ff801c',
        borderRadius: 60,
        width:150,
        marginHorizontal: 300,

    },
   
    buttonText: {
        fontWeight: 'bold',
        fontSize: 20,
        padding:10,
        color:'#ffffff',
        marginHorizontal: 30,
        

    },

});

export default App;