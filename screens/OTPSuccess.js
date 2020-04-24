import React, {Component} from 'react';
import {
    Image,
    View,
    StatusBar,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';

export class Success extends Component {
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
        const {user, confirmResult} = this.state;
        return (
            <View>
                {!user && !confirmResult && this.renderPhoneNumberInput()}
                {this.renderMessage()}
                {!user && confirmResult && this.renderVerificationCodeInput()}
                <StatusBar hidden />
                <Image
                    source={require('../assets/MessageSuccess.png')}
                    style={styles.img1}
                />
                <Text style={styles.te1}>Registered</Text>
                <Text style={styles.te2}>Successfully</Text>
                <TouchableHighlight style={styles.b1}>
                    <Text style={styles.te3}>Done</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    te1: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: 'product-sans',
        marginBottom: 5,
        marginTop: 30,
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
        fontWeight: 'bold',
    },

    b1: {
        backgroundColor: '#4bd16f',
        color: '#000000',
        marginTop: 70,
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
