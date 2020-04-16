import React from 'react';
import {Image, Text, StyleSheet} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const App = () => (
    <Onboarding
        onDone={() => console.log('done')}
        pages={[
            {
                backgroundColor: '#ffffff',
                image: (
                    <Image source={require('../assets/pic1.png')} style={styles.img1} />
                ),
                title: 'No more Improper Knowledge',
                subtitle: '\n',
            },
            {
                backgroundColor: '#ffffff',
                image: (
                    <Image source={require('../assets/pic2.png')} style={styles.img2} />
                ),
                title: 'No more Harvest Wastage',
                subtitle: '\n',
            },
            {
                backgroundColor: '#ffffff',
                image: (
                    <Image source={require('../assets/pic3.png')} style={styles.img3} />
                ),
                title: 'Your Efforts Will Pay Off',
            },
        ]}
    />
);

const styles = StyleSheet.create({
    img1: {
        height: 400,
        width: 400,
        marginLeft: 250,
        marginBottom: 0,
    },

    img2: {
        height: 400,
        width: 400,
    },

    img3: {
        height: 350,
        width: 430,
        marginRight: 100,
        marginLeft: 50,
    },
});

export default App;
