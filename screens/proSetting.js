import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TextInput, ScrollView} from 'react-native';

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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.image1}>
                    <Image source={require('./assets/farmer.png')} style={{width: 150, height: 150}} />
                </View>

                <View>
                    <Text>First Name</Text>
                </View>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('fName', val)}
                />
                <View>
                    <Text>Last Name</Text>
                </View>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('lName', val)}
                />
                <View>
                    <Text>NIC</Text>
                </View>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('nic', val)}
                />
                <View>
                    <Text>Location</Text>
                </View>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('location', val)}
                />
                <View>
                    <Text>Soil Type</Text>
                </View>
                <TextInput
                    style={styles.input}
                    autoCapitalize="none"
                    onChangeText={val => this.onChangeText('soilType', val)}
                />


                <Button style={{bottom: 0}} title="Next" onPress={this.next} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        width: 350,
        height: 40,
        backgroundColor: '#FFFFFF',
        margin: 20,
        padding: 8,
        color: 'black',
        borderRadius: 14,
        fontSize: 18,
        // fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

