import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    Alert, TouchableOpacity, Image,
} from 'react-native';

export default class HomeScreen extends Component {

    onClickListener = viewId => {
        Alert.alert('Alert', 'Button pressed ');
    };

    render() {
        return (
            <View>
                <Text style={{top: 80, left: 80, fontSize: 20}}>
                    Welcome to Farm Buddy
                </Text>
                <TouchableHighlight
                    style={[styles.buttonContainer, styles.signupButton]}
                    onPress={() => this.props.navigation.navigate('FlatListCrops', { screenName: "FlatListCrops" })}
                >
                    <Text style={styles.signUpText}>List of Crops</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.secondButton, styles.signupButton]}
                    onPress={() => this.props.navigation.navigate('Dashboard', { screenName: "Dashboard" })}
                >
                    <Text style={styles.signUpText}>Dashboard</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    style={[styles.thirdButton, styles.signupButton]}
                    onPress={() => this.props.navigation.navigate('ProfileSetting1', { screenName: "ProfileSetting1" })}
                >
                    <Text style={styles.signUpText}>Profile</Text>
                </TouchableHighlight>
                <View style={styles.image}>
                    <Image source={require('../assets/delivery.png')} style={{width: 420, height: 220}} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        top: 200,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 380,
        borderRadius: 20,
        left: 15,
        borderColor: 'black',
    },
    secondButton: {
        top: 500,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 380,
        borderRadius: 20,
        left: 15,
        borderColor: 'black',
    },
    thirdButton: {
        top: 500,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 380,
        borderRadius: 20,
        left: 15,
        borderColor: 'black',
    },
    signupButton: {
        borderColor: 'black',
        borderBottomColor: 'black',
        backgroundColor: '#59D8A3',
        top: 180,
    },
    signUpText: {
        color: 'white',
        fontSize: 30,
    },
    textStyle: {
        fontSize: 18,
        textAlign: 'left',
        bottom: -50,
        right: 0,
    },
    image: {
        marginTop: 240,
        alignItems: 'center',
        // marginLeft: 55,
        // marginRight: 2,
    },
});
