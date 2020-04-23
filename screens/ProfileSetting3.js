import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
import ToggleSwitch from 'toggle-switch-react-native'

export default class proSettingThird extends React.Component {
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

                    <View style={styles.textButton}>
                        <ToggleSwitch
                            isOn={false}
                            onColor="green"
                            offColor="gray"
                            label="Push Notification                                        "
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        />
                    </View>

                    <View style={styles.textButton}>
                        <ToggleSwitch
                            isOn={true}
                            onColor="green"
                            offColor="gray"
                            label="SMS Notification                                        "
                            labelStyle={{ color: "black", fontWeight: "900" }}
                            size="medium"
                            onToggle={isOn => console.log("changed to : ", isOn)}
                        />
                    </View>


                    <TouchableOpacity style = {styles. buttonContainer}
                                      onPress={() => this.props.navigation.navigate('proSettingEnd', { screenName: "proSettingEnd" })}
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
    },
    textButton: {
        marginLeft: -30,
        marginTop:50,
        marginBottom:20,
    }

});

