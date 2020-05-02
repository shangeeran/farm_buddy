import React, {Fragment, Component } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import FlipToggle from 'react-native-flip-toggle-button';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scrollview";

export default class proSettingThird extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSwitch1On: false,
            isSwitch2On: true,
        };
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
                        <Text style={styles.lang}>Language</Text>
                    </View>
                    <TouchableOpacity style = {styles.lanButton}
                    >
                        <Text style = {styles.textNext}>
                            English
                        </Text>
                    </TouchableOpacity>

                    <Fragment>
                        <StatusBar barStyle="dark-content" />
                        <SafeAreaView style={{ flex: 1 }}>
                            <View style={styles.container}>

                                <Text style={styles.pushText}>Push Notification</Text>
                                <View style={styles.item1}>
                                    <FlipToggle
                                        value={this.state.isSwitch1On}
                                        buttonOffColor={'#666'}
                                        sliderOffColor={'#fff'}
                                        buttonOnColor={'#05C167'}
                                        sliderOnColor={'#fff'}
                                        buttonWidth={50}
                                        buttonHeight={25}
                                        buttonRadius={50}
                                        onToggle={(value) => {
                                            this.setState({ isSwitch1On: value });
                                        }}
                                        onToggleLongPress={() => {
                                            console.log('Long Press');
                                        }}
                                    />
                                </View>

                                <Text style={styles.SMSText}>SMS Notification</Text>
                                <View style={styles.item2}>
                                    <FlipToggle
                                        value={this.state.isSwitch2On}
                                        buttonOffColor={'#666'}
                                        sliderOffColor={'#fff'}
                                        buttonOnColor={'#05C167'}
                                        sliderOnColor={'#fff'}
                                        buttonWidth={50}
                                        buttonHeight={25}
                                        buttonRadius={50}
                                        onToggle={(value) => {
                                            this.setState({ isSwitch2On: value });
                                        }}
                                        onToggleLongPress={() => {
                                            console.log('Long Press');
                                        }}
                                    />
                                </View>
                            </View>
                        </SafeAreaView>
                    </Fragment>


                    <TouchableOpacity style = {styles. buttonContainer}
                                      onPress={() => this.props.navigation.navigate('ProfileSetting4', { screenName: "ProfileSetting4" })}
                    >
                        <Text style = {styles.textNext}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAwareScrollView>
        );
    }


};

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
        marginTop:150,
        marginBottom: 40,
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderColor: '#05C167',
        backgroundColor: '#05C167',

    },
    lanButton: {
        // bottom:0,
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
        marginLeft: 250,
        marginTop: -40
    },
    textNext: {
        fontFamily: 'serif',
        fontSize: 14,
        // fontWeight: 'bold',
        color: '#fff',
    },
    text: {
        marginLeft: -250,
        marginTop:50,
        marginBottom:20,
    },
    lang: {
        fontFamily: 'serif',
        fontSize: 14,
    },
    pushText: {
        marginLeft: -200,
        paddingTop:100,
        // marginBottom:20,
        fontFamily: 'serif',
        fontSize: 14,
    },
    SMSText: {
        marginLeft: -200,
        marginTop:100,
        marginBottom:20,
    },
    textButton: {
        marginLeft: -30,
        marginTop:50,
        marginBottom:20,
        fontFamily: 'serif',
        fontSize: 14,
    },
    item1: {
        marginLeft: 250,
        marginTop:-20,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item2: {
        marginLeft: 250,
        marginTop:-40,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
