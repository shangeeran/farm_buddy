import React from 'react';
import {
    Image,
    View,
    StatusBar,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
} from 'react-native';
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';

const Success: () => React$Node = () => {
    // const [value, setValue] = useState()
    return (
        <View>
            <StatusBar hidden />
            <Image source={require('../assets/MessageSuccess.png')} style={styles.img1} />
            <Text style={styles.te1}>Registered</Text>
            <Text style={styles.te2}>
                Successfully
            </Text>
            <TouchableHighlight style={styles.b1}>
                <Text style={styles.te3}>Done</Text>
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
        marginBottom: 10,
        fontSize: 30,
        fontWeight: "bold",
    },

    b1: {
        backgroundColor: '#4bd16f',
        color: '#000000',
        marginTop: 40,
        marginRight: 100,
        marginLeft: 100,
        textAlign: 'center',
        borderRadius: 50,
        height: 50,
    },

    te3: {
        marginTop: 10,
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
    },
});

export default Success;
