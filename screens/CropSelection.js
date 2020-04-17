import React, {Component} from 'react';
import DropdownMenu from 'react-native-dropdown-menu';
import ReactChipsInput from 'react-native-chips';
import {CheckBox} from 'native-base';
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
        this.state = {
            firstName: '',
            lastName: '',
            nicNumber: '',
            district: '',
            text: '',
            selectedLang: 0,
        };
    }

    onClickListener = viewId => {
        Alert.alert('Alert', 'Button pressed ' + viewId);
    };

    render() {
        var data = [['Colombo', 'Jaffna', 'Trincomalee', 'District 4']];
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.textStyle}>Select your Location and Crops</Text>
                </View>

                <View
                    style={{
                        top: 100,
                        width: 380,
                        height: 80,
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 20,
                        padding: 10,
                    }}>
                    <Text style={styles.textStyle}> Enter your Crops </Text>
                    <ReactChipsInput
                        style={{height: 50, width: 100, justifyContent: 'center'}}
                        label=" "
                        initialChips={['Onion', 'Tomato', 'Pumpkin']}
                        onChangeChips={chips => console.log(chips)}
                        alertRequired={true}
                        chipStyle={{borderColor: 'white', backgroundColor: '#59D8A3'}}
                        inputStyle={{fontSize: 18, color: 'black', height: 50}}
                        labelStyle={{width: 100, height: 50, fontSize: 10}}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        top: 200,
                        zIndex: 60,
                        width: 380,
                        height: 500,
                    }}>
                    <View style={{height: 45, zIndex: 60}} />
                    <DropdownMenu
                        style={{flex: 1, maxHeight: 300}}
                        bgColor={'white'}
                        tintColor={'#666666'}
                        activityTintColor={'green'}
                        // arrowImg={}
                        // checkImage={}
                        // optionTextStyle={{color: '#333333'}}
                        // titleStyle={{color: '#333333'}}
                        maxHeight={300}
                        handler={(selection, row) =>
                            this.setState({text: data[selection][row]})
                        }
                        data={data}>
                        <View style={{flex: 1}}>
                            <Text>
                                {this.state.text} is the best place to grow your crops
                            </Text>
                        </View>

                    </DropdownMenu>
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
