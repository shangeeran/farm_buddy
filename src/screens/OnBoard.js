import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    img: {},
    tit: {
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

const slides = [
    {
        key: 'onBoard1',
        image: require('../../assets/img/pic1.png'),
        title: 'No More Improper Knowledge',
        backgroundColor: '#fff',
    },
    {
        key: 'onBoard2',
        image: require('../../assets/img/pic2.png'),
        title: 'No More Harvest Wastage',
        backgroundColor: '#fff',
    },
    {
        key: 'onBoard3',
        image: require('../../assets/img/pic3.png'),
        title: 'Your Efforts Will Pay Off',
        backgroundColor: '#fff',
    },
];

export default class OnBoard extends Component {
    _renderItem = ({item}) => {
        return (
            <View>
                <Image source={item.image} />
                <Text style={styles.tit}>{item.title}</Text>
            </View>
        );
    };

    render() {
        return (
            <AppIntroSlider
                slides={slides}
                renderItem={this._renderItem}
                bottomButton
                showSkipButton
            />
        );
    }
}
