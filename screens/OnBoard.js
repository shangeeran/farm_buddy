import React from 'react';
import { Image, View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const OnBoard = () => (
    <Onboarding
        onDone={() => console.log('done')}
        pages={[
            {
                backgroundColor: '#ffffff',
                image: <Image source={require('./assets/pic1.png')} style={{width: '100%', height: '100%'}} />,
                title: 'No more Improper Knowledge',
            },
            {
                backgroundColor: '#ffffff',
                image: <Image source={require('./assets/pic2.png')} style={{width: '100%', height: '100%'}} />,
                title: 'No more Harvest Wastage',
            },
            {
                backgroundColor: '#ffffff',
                image: <Image source={require('./assets/pic3.png')} style={{width: '100%', height: '100%'}} />,
                title: 'Your Efforts Will Pay Off',
            },
        ]}
    />
);

export default OnBoard;
