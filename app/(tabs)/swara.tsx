import { Image, StyleSheet, Platform, _Text } from 'react-native';

import React, { useState, useEffect } from 'react';
import {
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    Dimensions,
    TouchableOpacity
} from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { FontDisplay } from 'expo-font';
import { red } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


export default function SwaraScreen() {
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;
    const [buttonTitle, setButtonTitle] = useState('ಅ');
    const handlePress = () => {
        const letters = ['ಅ', 'ಆ', 'ಇ', 'ಈ', 'ಉ', 'ಊ', 'ಋ', 'ಎ', 'ಏ', 'ಐ', 'ಒ', 'ಓ', 'ಔ', 'ಅಂ', 'ಅಃ']
        var i = Math.round((Math.random()) * 14);
        setButtonTitle(letters[i]); // Change the title to 'y' when the button is pressed
    };
    return (
    
        <View style={styles.container}>
            <Text style={styles.titleContainer}>ಸ್ವರಗಳು</Text>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
                <Text style={styles.buttonText}>{buttonTitle}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 1,
        fontSize:48,
        padding:25
    },
    flash: {
        height: 200, top: 100, alignItems: 'center', flexDirection: 'column', flex: 1, width: 100


    },
   
    buttonContainer: {
        // Optionally, you can add styles like padding or margin here
        borderColor: 'blue',
        borderWidth: 3,
        alignItems: 'center',
        flexDirection: 'row',
        textAlign: 'center',

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button: {
        backgroundColor: '#007BFF', // Button background color
        paddingVertical: 10, // Vertical padding
        paddingHorizontal: 20, // Horizontal padding
        borderRadius: 5, // Rounded corners
      },
      buttonText: {
        fontSize: 224, // Font size of 48
        color: '#FFF', // Text color
        textAlign: 'center',
      },
});
