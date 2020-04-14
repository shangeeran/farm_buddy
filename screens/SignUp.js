import React, {Component} from 'react';
import ReactChipsInput from 'react-native-chips';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
} from 'react-native';

export default class SignUpView extends Component {
    constructor(props) {
        super(props);
        state = {
            firstName: '',
            lastName: '',
            nicNumber: '',
            district: '',
        };
    }

    onClickListener = viewId => {
        Alert.alert('Alert', 'Button pressed ' + viewId);
    };

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textStyle}>Sign Up</Text>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="First Name"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        onChangeText={firstName => this.setState({firstName})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Last Name"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        onChangeText={lastName => this.setState({lastName})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="NIC number"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        onChangeText={nicNumber => this.setState({nicNumber})}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="District"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        onChangeText={district => this.setState({district})}
                    />
                </View>

                <ReactChipsInput
                    style={styles.inputContainer}
                    label="Enter Fruits"
                    initialChips={['Apple', 'Orange']}
                    onChangeChips={chips => console.log(chips)}
                    alertRequired={true}
                    chipStyle={{borderColor: 'blue', backgroundColor: 'grey'}}
                    inputStyle={{fontSize: 22}}
                />

                <TouchableHighlight
                    style={[styles.buttonContainer, styles.signupButton]}
                    onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>Sign up</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFCFC',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 380,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        borderColor: '#DBDBDB',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
    },
    buttonContainer: {
        top: 200,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    signupButton: {
        backgroundColor: '#59D8A3',
    },
    signUpText: {
        color: 'white',
    },
    textStyle: {
        fontSize: 40,
        textAlign: 'left',
        bottom: 50,
        right: 100,
    },
});
