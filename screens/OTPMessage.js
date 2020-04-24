import React, {Component} from 'react';
import {
    Image,
    View,
    StatusBar,
    Text,
    StyleSheet,
    TouchableHighlight,
    TextInput,
} from 'react-native';
import firebase from 'react-native-firebase';

export class Message extends Component {
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

    componentDidMount() {
        this.unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user: user.toJSON()});
            } else {
                // User has been signed out, reset the state
                this.setState({
                    user: null,
                    message: '',
                    codeInput: '',
                    phoneNumber: '+94',
                    confirmResult: null,
                });
            }
        });
    }

    componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    }

    signIn = () => {
        const {phoneNumber} = this.state;
        this.setState({message: 'Sending code ...'});

        firebase
            .auth()
            .signInWithPhoneNumber(phoneNumber)
            .then((confirmResult) =>
                this.setState({confirmResult, message: 'Code has been sent!'}),
            )
            .catch((error) =>
                this.setState({
                    message: `Sign In With Phone Number Error: ${error.message}`,
                }),
            );
    };

    confirmCode = () => {
        const {codeInput, confirmResult} = this.state;

        if (confirmResult && codeInput.length) {
            confirmResult
                .confirm(codeInput)
                .then((user) => {
                    this.setState({message: 'Code Confirmed!'});
                })
                .catch((error) =>
                    this.setState({message: `Code Confirm Error: ${error.message}`}),
                );
        }
    };

    signOut = () => {
        firebase.auth().signOut();
    };

    renderPhoneNumberInput() {
        const {phoneNumber} = this.state;

        return (
            <View style={{padding: 25}}>
                <StatusBar hidden />
                <Image source={require('../assets/Message.png')} style={styles.img1} />
                <Text style={styles.te1}>OTP Verification</Text>
                <Text style={styles.te2}>
                    We will send you a One Time Password on this mobile number
                </Text>
                <TextInput
                    autoFocus
                    onChangeText={(value) => this.setState({phoneNumber: value})}
                    placeholder="Enter Mobile Number"
                    keyboardType="phone-pad"
                    style={styles.TextInputStyle}
                    value={phoneNumber}
                />
                <TouchableHighlight
                    style={styles.b1}
                    onPress={() =>
                        this.props.navigation.navigate('Verified', {
                            screenName: 'Verified',
                        })
                    }>
                    <Text style={styles.te3}>Proceed</Text>
                </TouchableHighlight>
            </View>
        );
    }
    renderMessage() {
        const {message} = this.state;

        if (!message.length) {
            return null;
        }

        return (
            <Text style={{padding: 5, backgroundColor: '#000', color: '#fff'}}>
                {message}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    te1: {
        marginTop: 10,
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
        color: '#808080',
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
