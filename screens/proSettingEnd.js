import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'


export default class proSettingEnd extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.proImg}>
                    <Image source={require('./assets/successful.jpg')} style={{width: 300, height: 300}} />
                </View>
                <View>
                    <Text style={styles.text}>Successfully Changed!</Text>
                </View>

                <View style={styles.goBack}>
                    <Button onPress={() => goBack()} color="#05C167" title="Go Back" />
                </View>

            </View>
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
    text: {
        marginTop:10,
        fontFamily: 'serif',
        fontSize: 30,
        // fontWeight: 'bold',
        textAlign: 'center'
    },
    goBack: {
        paddingTop:15,
    }
});

