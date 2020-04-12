import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

export default class App extends Component {
    render() {
        return (
            <View style={styles.image1}>
                <Image source={require('./assets/farmer.png')} style={{width: 200, height: 180}} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
    },
    image1: {
        marginTop: '10%',
        marginLeft: '55%',
        marginRight: '2%',
    },

});

