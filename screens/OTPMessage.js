import React from 'react';
import {
    Image,
    View,
    StatusBar,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

const App: () => React$Node = () => {
    return (
        <View>
            <StatusBar hidden />
            <Image source={require('../assets/Message.png')} style={styles.img1} />
            <Text style={styles.te1}>OTP Verification</Text>
            <Text style={styles.te2}>
                We will send you a One Time Password on this mobile number
            </Text>
            <TouchableHighlight style={styles.b1}>
                <Text style={styles.te3}>Proceed</Text>
            </TouchableHighlight>
        </View>
    );
};

const styles = StyleSheet.create({
    te1: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'product-sans',
        marginBottom: 5,
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

    b1: {
        backgroundColor: '#4bd16f',
        color: '#000000',
        marginTop: 100,
        marginRight: 100,
        marginLeft: 100,
        textAlign: 'center',
        borderRadius: 50,
        height: 40,
    },

    te3: {
        margin: 10,
        textAlign: 'center',
        fontSize: 15,
        color: '#ffffff',
    },
});

export default App;
