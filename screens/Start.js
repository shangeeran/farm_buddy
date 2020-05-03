import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, StatusBar, ImageBackground, Text, StyleSheet, TouchableHighlight} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export class Start extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View>
                {/*<StatusBar hidden />*/}
                <ImageBackground
                    source={require('../assets/front.png')}
                    style={{width: '100%', height: '100%'}}>
                    <Text style={styles.t1}>Farm{'\n'}Buddy.</Text>
                    <Text style={styles.t2}> (Farmers' version) </Text>
                    <TouchableHighlight
                        style={styles.b1}
                        onPress={() => this.props.navigation.navigate('OnBoard', { screenName: "OnBoard" })}
                    >
                        <Text style={styles.b2}>Get Start</Text>
                    </TouchableHighlight>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: Colors.white,
    },

    t1: {
        textAlign: 'left',
        fontSize: 60,
        fontFamily: 'product-sans',
        top: 80,
        padding: '10%',
    },

    t2: {
        padding: '10%',
        top: 0,
        fontFamily: 'Product Sans Regular',
        color: '#808080',
    },

    b1: {
        marginTop: 319,
        marginLeft: 250,
        // marginRight: 110,
        backgroundColor: '#05C167',
        borderRadius: 50,
        height: 40,
    },

    b2: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        margin: 10,
    },
});

