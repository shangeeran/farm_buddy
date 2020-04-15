import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.image1}>
                    <Image source={require('./assets/snow.png')} style={{width: 200, height: 180}} />
                </View>

                <TouchableOpacity style = {styles. buttonContainer1}
                                  onPress={() => this.props.navigation.navigate('Weather', { screenName: "Weather" })}
                >
                    <Text style = {styles.text1}>
                        Weather
                    </Text>
                </TouchableOpacity>
                <View style={styles.textAlign}>
                    <Text style={styles.subText}>Prices are {"\n"}so
                        <Text>{' '}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 36,}}>
                            good !!
                        </Text>{"\n"}
                        <Text style={{color: '#A6A3A3'}}>
                            You Wanna see ?
                        </Text>
                    </Text>
                </View>
                <View style={styles.image2}>
                    <Image source={require('./assets/boo-dribbble_2x.png')} style={{width: 200, height: 180}} />
                </View>

                <TouchableOpacity style = {styles. buttonContainer2}
                                  onPress={() => this.props.navigation.navigate('Weather', { screenName: "Weather" })}
                >
                    <Text style = {styles.text2}>
                        Explore
                    </Text>
                </TouchableOpacity>
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
    subText: {
        // marginBottom: '30%',
        marginLeft: '50%',
        fontSize: 22,
        fontWeight: 'bold'
    },
    image1: {
        marginTop: '10%',
        marginLeft: '55%',
        marginRight: '2%',
    },
    image2: {
        marginTop: '-25%',
        marginRight: '50%',
    },
    textAlign: {
        marginTop: '30%',
    },

    text1: {
        fontFamily: 'serif',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    text2: {
        fontFamily: 'serif',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
    },
    buttonContainer1 : {
        height:40,
        justifyContent: "center",
        // alignItems: "center" ,
        borderWidth: 1,
        marginRight: 200,
        marginTop:-80,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
    },
    buttonContainer2 : {
        height:30,
        justifyContent: "center",
        alignItems: "center" ,
        borderWidth: 1,
        marginTop:-20,
        marginLeft:150,
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
    },
});
