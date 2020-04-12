import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TextInput, ScrollView} from 'react-native';


// export default class App extends Component {
//     render() {
//         return (
//             <View style={styles.image1}>
//                 <Image source={require('./assets/farmer.png')} style={{width: 150, height: 150}} />
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container : {
//         flex: 1,
//         alignItems: 'center',
//         // justifyContent: 'center',
//     },
//     image1: {
//         marginTop: '5%',
//         flexGrow:1,
//         height:null,
//         width:null,
//         alignItems: 'center',
//         // justifyContent:'center',
//     },
//
// });

export default class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        email: '',
        phone_number: '',
    };
    onChangeText = (key, val) => {
        this.setState({[key]: val});
    };
    // signUp = async () => {
    //   //   const {username, password, email, phone_number} = this.state;
    //   //   try {
    //   //     // here place your signup logic
    //   //     console.log('user successfully signed up!: ', success);
    //   //   } catch (err) {
    //   //     console.log('error signing up: ', err);
    //   //   }
    //   // };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image1}>
                    <Image source={require('./assets/farmer.png')} style={{width: 150, height: 150}} />
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    autoCapitalize="none"
                    placeholderTextColor="black"
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor="black"
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    autoCapitalize="none"
                    placeholderTextColor="white"
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Phone Number"
                    autoCapitalize="none"
                    placeholderTextColor="black"
                    onChangeText={val => this.onChangeText('phone_number', val)}
                />

                <Button style={{bottom: 0}} title="Sign Up" onPress={this.signUp} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

