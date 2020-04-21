import React, {Component} from 'react';
import ReactChipsInput from 'react-native-chips';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert,
} from 'react-native';

export default class SignUpView extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
                    <Text style={{bottom: 180}}>Select your Location and Crops</Text>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputs}
                        placeholder="Enter you district"
                        keyboardType="email-address"
                        underlineColorAndroid="transparent"
                        onChangeText={firstName => this.setState({firstName})}
                    />
                </View>

                <View
                    style={{
                        top: -100,
                        width: 380,
                        height: 200,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        padding: 10,
                    }}>
                    <Text> Enter your Crops </Text>
                    <ReactChipsInput
                        style={{
                            height: 50,
                            width: 100,
                            justifyContent: 'center',
                            backgroundColor: '#FCFCFC',
                        }}
                        label=" "
                        initialChips={['Onion', 'Tomato', 'Potato']}
                        onChangeChips={chips => console.log(chips)}
                        alertRequired={true}
                        chipStyle={{borderColor: 'white', backgroundColor: '#59D8A3'}}
                        inputStyle={{fontSize: 18, color: 'black', height: 50}}
                        labelStyle={{width: 100, height: 50, fontSize: 10}}
                    />
                </View>

                <TouchableHighlight
                    style={[styles.buttonContainer, styles.signupButton]}
                    onPress={() => this.onClickListener('sign_up')}>
                    <Text style={styles.signUpText}>Save</Text>
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
        bottom: 100,
        borderColor: '#59D8A3',
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
        borderColor: '#59D8A3',
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center',
    },
    buttonContainer: {
        top: -50,
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
        top: 180,
    },
    signUpText: {
        color: 'white',
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'left',
        bottom: -50,
        right: 0,
    },
    item: {
        top: -200,
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        marginBottom: 10,
        flexDirection: 'row',
    },
    checkBoxTxt: {
        marginLeft: 20,
    },
    inputChips: {
        top: 500,
        bottom: 300,
    },
});
