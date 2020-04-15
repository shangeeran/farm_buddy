import React, {Component} from 'react';

class ShanOnboard extends Component {
    render() {
        return (
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('../assets/pic1.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('./images/circle.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: <Image source={require('./images/circle.png')} />,
                        title: 'Onboarding',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                ]}
            />
        );
    }
}

export default ShanOnboard;
