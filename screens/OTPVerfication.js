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

const App: () => React$Node = () => {
    // const [value, setValue] = useState()
    return (
        <View>
            <StatusBar hidden />
            {/*<Icon name="left" size={30} color='#000000' />*/}
            <Image source={require('../assets/VErified.png')} style={styles.img1} />

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

   
});

export default App;
