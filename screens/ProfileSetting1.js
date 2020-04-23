import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';

export default class proSetting extends React.Component {
    // state = {
    //     username: '',
    //     password: '',
    //     email: '',
    //     phone_number: '',
    // };
    // onChangeText = (key, val) => {
    //     this.setState({[key]: val});
    // };

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
                        <Image source={require('../assets/farmer.png')} style={{width: 150, height: 150}} />
                    </View>

                    <View style={styles.textVisible}>
                        <Text>First Name</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={val => this.onChangeText('fName', val)}
                    />
                    <View style={styles.textVisible}>
                        <Text>Last Name</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={val => this.onChangeText('lName', val)}
                    />
                    <View style={styles.textVisible}>
                        <Text>NIC No</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={val => this.onChangeText('nic', val)}
                    />
                    <View style={styles.textVisible}>
                        <Text>Location</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={val => this.onChangeText('location', val)}
                    />
                    <View style={styles.textVisible}>
                        <Text>Soil Type</Text>
                    </View>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none"
                        onChangeText={val => this.onChangeText('soilType', val)}
                    />


                    <TouchableOpacity style = {styles. buttonContainer}
                                      onPress={() => this.props.navigation.navigate('ProfileSetting2', { screenName: "ProfileSetting2" })}
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
    input: {
        width: 350,
        height: 40,
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        marginBottom: 15,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    proImg: {
        padding: '5%'
    },
    textVisible: {
        paddingRight: '60%',
        fontSize: 18,
    },
    buttonContainer : {
        bottom:0,
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
    },
    textNext: {
        fontFamily: 'serif',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
});

