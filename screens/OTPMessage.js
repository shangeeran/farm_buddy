import React from 'react';
import {Image, View, StatusBar, Text, StyleSheet} from 'react-native';

const App: () => React$Node = () => {
    return (
        <View>
            <StatusBar hidden />
            <Image source={require('../assets/Message.png')} style={styles.img1} />
            <Text style={styles.te1}>OTP Verification</Text>
            <Text style={styles.te2}>We will send you a One Time Password on this mobile number</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    te1: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'product-sans',
    },

    img1: {
        justifyContent: 'center',
        height: 300,
        width: 350,
        marginTop: 100,
        marginBottom: 10,
    },

    te2: {
        textAlign: 'center',
    },
});

export default App;
