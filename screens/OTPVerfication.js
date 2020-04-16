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
import OTPInputView from "@twotalltotems/react-native-otp-input/dist";
// import 'react-phone-number-input/style.css';
// import PhoneInput from 'react-phone-number-input';

const Verified: () => React$Node = () => {
    // const [value, setValue] = useState()
    return (
        <View>
            <StatusBar hidden />
            {/*<Icon name="left" size={30} color='#000000' />*/}
            <Image source={require('../assets/VErified.png')} style={styles.img1} />
            <Text style={styles.te1}>OTP Verification</Text>
            <Text style={styles.te2}>
                Enter the OTP sent +94-xxx-xxxxxx
            </Text>
            <OTPInputView pinCount={4} style={styles.OTPpin} codeInputFieldStyle={styles.fieldStyle}/>
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
        height: 350,
        width: 350,
        marginTop: 75,
    },

    te2: {
        textAlign: 'left',
        marginBottom: 10,
        color: '#808080',
        marginLeft: 20,
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

    OTPpin: {
        height: 40,
        marginLeft: 30,
        marginRight: 30,
    },

    fieldStyle: {
        borderWidth: 0,
        borderBottomWidth: 1,
        width: 60,

    },
});

export default Verified;
