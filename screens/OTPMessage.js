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

const App: () => React$Node = () => {
    // const [value, setValue] = useState()
    return (
        <View>
            <StatusBar hidden />
            <Image source={require('../assets/Message.png')} style={styles.img1} />
            <Text style={styles.te1}>OTP Verification</Text>
            <Text style={styles.te2}>
                We will send you a One Time Password on this mobile number
            </Text>
            {/*<PhoneInput placeholder="Enter phone number" value={value} onChange={setValue} />*/}
            <TextInput placeholder="Enter Mobile Number" keyboardType='phone-pad' style={styles.TextInputStyle}/>
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
        marginBottom: 10,
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

    TextInputStyle: {
        textAlign: 'center',
        borderWidth: 0.5,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        marginLeft: 15,
        marginRight: 15,
    },
});

export default App;
