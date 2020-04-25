import React, {Component} from 'react';
import {
    Image,
    View,
    StatusBar,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input/dist';
import firebase from 'react-native-firebase';

export class Verified extends Component {
    constructor() {
        super();
        this.unsubscribe = null;
        this.state = {
            user: null,
            message: '',
            codeInput: '',
            phoneNumber: '+94',
            confirmResult: null,
        };
    }
    render() {
        const {codeInput} = this.state;
        return (
            <View>
                <StatusBar hidden />
                <Image source={require('../assets/VErified.png')} style={styles.img2} />
                <Text style={styles.tex1}>OTP Verification</Text>
                <Text style={styles.tex2}>Enter the OTP sent +94-xxx-xxxxxx</Text>
                <OTPInputView
                    pinCount={4}
                    autoFocus
                    onChangeText={(value) => this.setState({codeInput: value})}
                    placeholder={'Code ... '}
                    value={codeInput}
                    style={styles.OTPpin}
                    codeInputFieldStyle={styles.fieldStyle}
                />
                <TouchableHighlight
                    style={styles.bt1}
                    onPress={
                        (this.props.navigation.navigate('Success', {
                            screenName: 'Success',
                        }),
                            this.confirmCode)
                    }>
                    <Text style={styles.tex3}>Confirm</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tex1: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'product-sans',
        marginBottom: 5,
        marginTop: 15,
    },

    img2: {
        justifyContent: 'center',
        height: 350,
        width: 350,
        marginTop: 75,
    },

    tex2: {
        textAlign: 'left',
        marginBottom: 10,
        color: '#808080',
        marginLeft: 20,
    },

    bt1: {
        backgroundColor: '#4bd16f',
        color: '#000000',
        marginTop: 70,
        marginRight: 100,
        marginLeft: 100,
        textAlign: 'center',
        borderRadius: 50,
        height: 50,
    },

    tex3: {
        marginTop: 10,
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        color: '#ffffff',
    },

    OTPpin: {
        height: 50,
        marginLeft: 30,
        marginRight: 30,
    },

    fieldStyle: {
        borderWidth: 0,
        borderBottomWidth: 1,
        width: 60,
    },
});
