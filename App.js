import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import Dashboard from './screens/Dashboard';
import Weather from './screens/Weather';
import proSetting from './screens/proSetting';
import proSettingSec from './screens/proSettingSec';
import proSettingThird from './screens/proSettingThird';
import proSettingEnd from './screens/proSettingEnd';

const Drawer = createDrawerNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                <Drawer.Screen name="proSetting" component={proSetting} />
                <Drawer.Screen name="proSettingSec" component={proSettingSec} />
                <Drawer.Screen name="proSettingThird" component={proSettingThird} />
                <Drawer.Screen name="proSettingEnd" component={proSettingEnd} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default App;
