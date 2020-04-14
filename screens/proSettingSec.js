import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'

export default class proSettingSec extends React.Component {
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

                    <View style={styles.bottomContainer}>
                        <View style={styles.textVisible}>
                            <Text>Description</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={val => this.onChangeText('Description', val)}
                        />
                        <View style={styles.textVisible}>
                            <Text>Crops</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={val => this.onChangeText('Crops', val)}
                        />
                    </View>


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
    input: {
        width: 350,
        height: 150,
        backgroundColor: '#FFFFFF',
        marginTop: 5,
        marginLeft:10,
        marginBottom: 15,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: 'bold',
    },
    bottomContainer: {
        // flex: 1,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: '#EFEFEF',
        height: '62%',
        width: '90%'
        // overflow: 'hidden',
    },
    proImg: {
        padding: '5%'
    },
    textVisible: {
        paddingRight: '60%',
        marginTop: 10,
        marginLeft: 10,
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

