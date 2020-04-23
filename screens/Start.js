import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {
    View,
    StatusBar,
    ImageBackground,
    Text,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoard from './OnBoard';

export class Main extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View>
                <StatusBar hidden />
                <ImageBackground
                    source={require('../../assets/img/front.png')}
                    style={{width: '100%', height: '100%'}}>
                    <Text style={styles.t1}>Farm{'\n'}Buddy.</Text>
                    <Text style={styles.t2}> (Farmers' version) </Text>
                    <TouchableHighlight
                        style={styles.b1}
                        onPress={() => this.props.navigation.push('OnBoard')}>
                        <Text style={styles.b2}>Get Started</Text>
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
        marginTop: 320,
        marginLeft: 110,
        marginRight: 110,
        backgroundColor: '#ffffff',
        borderRadius: 50,
        height: 40,
    },

    b2: {
        color: '#000000',
        textAlign: 'center',
        margin: 10,
    },
});

export default class App extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Main" component={Main} />
                    <Stack.Screen name="OnBoard" component={OnBoard} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const Stack = createStackNavigator();
