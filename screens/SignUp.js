import React, {Component} from 'react';

import {StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard
    } from 'react-native';
import * as axios from 'axios';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            F_Name: '',
            L_Name: '',
            NIC: '',
            loading:false
        };
        this.validation =this.validation.bind(this);
    }
    validation = async () => {
        const {F_Name, L_Name, NIC} = this.state;
        if (F_Name === '') {
            //alert('please fill the first name');
            this.setState({Error: 'please fill the first name'});
        } else if (L_Name === '') {
            //  alert('please fill the last name');
            this.setState({Error: 'please fill the last name'});
        } else if (NIC === '') {
            this.setState({Error: 'please fill the NIC number'});
        } else if (NIC.length < 10) {
            this.setState({Error: 'Enter Valid NIC number'});
        } else {
            //alert('thank you, your form is submitted successfully');
            this.setState({
                loading: true
            });
            // fetch('https://farmbuddy.foxrilla.com/api/v1/user', {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type":"application/json",
            //         Accept: "*/*"
            //     },
            //     body: JSON.stringify({
            //         F_Name: this.state.F_Name,
            //         L_Name: this.state.L_Name,
            //         NIC: this.state.NIC,
            //
            //     }),
            // }).then(r => {
            //     console.log(r);
            //     console.log(r.status);
            //     if(r.status===201){
            //         this.props.navigation.navigate('CropSelection', { screenName: "CropSelection" });
            //     }else{
            //         this.setState({Error: 'Something error, try again'});
            //     }
            //     this.setState({
            //         loading:false
            //     })
            // });
            // let sign_up =await axios({
            //     method: 'post',
            //     url: 'https://farmbuddy.foxrilla.com/api/v1/user',
            //     headers: {
            //         "Content-Type":"application/json",
            //         "Accept": "*/*"
            //     },
            //     data: JSON.stringify({
            //         Phone_Number: "0769047414",
            //         F_Name: this.state.F_Name,
            //         L_Name: this.state.L_Name,
            //         NIC: this.state.NIC,
            //         Crops: ["c003", "c004"]
            //     })
            // }).then(function (res) {
            //     console.log(res);
            //
            // })}
            this.props.navigation.navigate('CropSelection', { screenName: "CropSelection" });

        }

        Keyboard.dismiss();
    };
    componentDidMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20, right: 0, marginBottom: 50}}>Sign Up</Text>
                <Text style={{color: 'red', textAlign: 'center'}}>
                    {this.state.Error}
                </Text>
                <TextInput
                    placeholder="first name"
                    style={styles.myText}
                    onChangeText={F_Name => this.setState({F_Name})}
                />

                <TextInput
                    placeholder="last name"
                    style={styles.myText}
                    onChangeText={L_Name => this.setState({L_Name})}
                />

                <TextInput
                    placeholder="NIC number"
                    style={styles.myText}
                    onChangeText={NIC => this.setState({NIC})}
                />

                <TouchableOpacity
                    // onPress={this.validation() => this.props.navigation.navigate('CropSelection', { screenName: "CropSelection" })  }
                    onPress={this.validation}
                    disabled={this.state.loading}
                    style={this.state.loading?styles.signup_disabled:styles.signup}>
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFCFC',
    },
    myText: {
        borderWidth: 1,
        borderColor: '#ccc',
        margin: 10,
        padding: 10,
        width: '90%',
        backgroundColor: 'white',
    },
    signup:{
        backgroundColor: '#59D8A3',
        padding: 10,
        // marginTop:-20,
        marginBottom: 200,
        width: 250,
        height: 50,
        top: 200,
        borderRadius: 50,
    },
    signup_disabled:{
        backgroundColor: 'rgba(156,156,156,0.29)',
        padding: 10,
        // marginTop:-20,
        marginBottom: 200,
        width: 250,
        height: 50,
        top: 200,
        borderRadius: 50,
    }
});
