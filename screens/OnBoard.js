import React from 'react';
import { Image, View } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Simple = () => (
    <Onboarding
        onDone={() => console.log('done')}
        pages={[
            {
                backgroundColor: '#fff',
                image: <Image source={require('./assets/pic1.png')} style={{width: 150, height: 150}} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
            },
            {
                backgroundColor: '#fe6e58',
                image: <Image source={require('./assets/pic2.png')} style={{width: 150, height: 150}} />,
                title: 'The Title',
                subtitle: 'This is the subtitle that sumplements the title.',
            },
            {
                backgroundColor: '#999',
                image: <Image source={require('./assets/pic3.png')} style={{width: 150, height: 150}} />,
                title: 'Triangle',
                subtitle: "Beautiful, isn't it?",
            },
        ]}
    />
);

export default Simple;
