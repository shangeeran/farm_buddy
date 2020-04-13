import React, {Component} from 'react';
import {StyleSheet, Switch, View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

export default class proSettingThird extends React.Component {
    state = {switchValue:false}
    toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        this.setState({switchValue: value})
        //state changes according to switch
        //which will result in re-render the text
    }
    render() {
        return (
            <KeyboardAwareScrollView
                keyboardShouldPersistTaps="handled"
                resetScrollToCoords={{ x: 0, y: 0 }}
                keyboardOpeningTime={0}
                scrollEnabled={true}
            >
                <View style={styles.container}>
                    <View style={styles.proImg}>
                        <Image source={require('./assets/farmer.png')} style={{width: 150, height: 150}} />
                    </View>

                    <View style={styles.text}>
                        <Text>Language</Text>
                    </View>
                    <TouchableOpacity style = {styles.lanButton}
                    >
                        <Text style = {styles.textNext}>
                            English
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.text}>
                        <Text>Push Notification</Text>
                    </View>
                    {/*Text to show the text according to switch condition*/}
                    <Text>{this.state.switchValue?'Switch is ON':'Switch is OFF'}</Text>
                    {/*Switch with value set in constructor*/}
                    {/*onValueChange will be triggered after switch condition changes*/}
                    <Switch
                        style={{marginTop:30}}
                        onValueChange = {this.toggleSwitch}
                        value = {this.state.switchValue}/>

                    <View style={styles.text}>
                        <Text>SMS Notification</Text>
                    </View>
                    {/*Text to show the text according to switch condition*/}
                    <Text>{this.state.switchValue?'Switch is ON':'Switch is OFF'}</Text>
                    {/*Switch with value set in constructor*/}
                    {/*onValueChange will be triggered after switch condition changes*/}
                    <Switch
                        style={{marginTop:30}}
                        onValueChange = {this.toggleSwitch}
                        value = {this.state.switchValue}/>


                    <TouchableOpacity style = {styles. buttonContainer}
                                      onPress={() => this.props.navigation.navigate('xxxx', { screenName: "xxxx" })}
                    >
                        <Text style = {styles.textNext}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    proImg: {
        padding: '5%'
    },
    buttonContainer : {
        bottom:0,
        marginTop:120,
        marginBottom: 40,
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
    },
    lanButton: {
        // bottom:0,
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
        marginLeft: 250,
        marginTop: -40
    },
    textNext: {
        fontFamily: 'serif',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    text: {
        marginLeft: -250,
        marginTop:50,
        marginBottom:20,
    }

});

