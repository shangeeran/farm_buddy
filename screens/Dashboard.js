import React, {Component} from 'react';
import {StyleSheet, Button, View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
// import Weather from './Weather';

export default class Dashboard extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.heading}>Dashboard</Text>
                </View>
                <View style={styles.image1}>
                    <Image source={require('../FarmBuddy/assets/img/snow.png')} style={{width: 200, height: 180}} />
                </View>
                <View style={styles.button}>
                </View>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style = {styles.text1}>
                        Weather
                    </Text>
                </TouchableOpacity>
                <View style={styles.textAlign1}>
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
                    <Image source={require('../FarmBuddy/assets/img/boo-dribbble_2x.png')} style={{width: 200, height: 180}} />
                </View>
                <TouchableOpacity onPress={this._onPressButton}>
                    <Text style = {styles.text2}>
                        Explore
                    </Text>
                </TouchableOpacity>
                <View style={styles.textAlign2}>
                    <Text style={{fontSize: 22,}}>
                        Crops in demand
                    </Text>
                </View>
                <ScrollView>
                    <ScrollView horizontal>
                        <Image source={require('../FarmBuddy/assets/img/veg1.png')} style={{width: 120, height: 120}} />
                        <Image source={require('../FarmBuddy/assets/img/veg2.png')} style={{width: 120, height: 120}} />
                        <Image source={require('../FarmBuddy/assets/img/veg3.png')} style={{width: 120, height: 120}} />
                        <Image source={require('../FarmBuddy/assets/img/veg4.png')} style={{width: 120, height: 120}} />
                        <Image source={require('../FarmBuddy/assets/img/veg5.png')} style={{width: 120, height: 120}} />
                        <Image source={require('../FarmBuddy/assets/img/veg6.png')} style={{width: 120, height: 120}} />
                        <Image source={require('../FarmBuddy/assets/img/veg7.png')} style={{width: 120, height: 120}} />
                        <Image source={require('../FarmBuddy/assets/img/veg8.png')} style={{width: 120, height: 120}} />
                    </ScrollView>
                </ScrollView>
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
    heading: {
        // backgroundColor: 'pink',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        paddingTop: '8%',
        fontFamily: "serif",
    },
    subText: {
        // marginBottom: '30%',
        marginLeft: '50%',
        fontSize: 22,
        fontWeight: 'bold'
    },
    buttonContainer:{
        marginTop: 20,
        backgroundColor:'#00aeef',
        borderRadius:10,
    },
    button1: {
        // backgroundColor: '#green',
        // borderColor: '#05C167',
        // borderWidth: 5,
        // borderRadius: 15,
        paddingTop:'10%',
        paddingRight: '45%',
        // paddingBottom: '35%',
    },
    button2: {
        // backgroundColor: '#green',
        // borderColor: '#05C167',
        // borderWidth: 5,
        // borderRadius: 15,
        paddingLeft: '55%'
    },
    image1: {
        marginTop: '10%',
        marginLeft: '55%',
        marginRight: '2%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: 20,
        // height: 20,
        // resizeMode: 'stretch',
        // flex: 1,
        // resizeMode: 'contain'
    },
    image2: {
        marginTop: '-30%',
        // marginLeft: '-30%',
        marginRight: '50%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: 20,
        // height: 20,
        // resizeMode: 'stretch',
        // flex: 1,
        // resizeMode: 'contain'
    },
    textAlign1: {
        marginTop: '8%',
    },
    textAlign2: {
        marginTop: '5%',
    },
    text1: {
        fontFamily: 'serif',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
        marginTop: '-25%',
        marginRight: '50%'
    },
    text2: {
        fontFamily: 'serif',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderColor: '#05C167',
        backgroundColor: '#05C167',
        marginTop: '-10%',
        marginLeft: '55%'
    },
    text3: {

    },
});
