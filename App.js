<<<<<<< HEAD
// In App.js in a new project

import React from 'react';
import {View, Text, Button} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createStackNavigator} from '@react-navigation/stack';
import Details from './DetailsScreen';

function HomeScreen({navigation}){
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Navigation on process</Text>
        <Button
            title="Go to Details"
            onPress={() => navigation.push('Details')}
        />
    </View>
  );
}

// const Stack = createStackNavigator();
//
// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Details" components={Details} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
=======
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            < div >
            
            < /div>
    )
        ;
    }
}
>>>>>>> 31f2cfde895b941cc732875488359f25215e86e4

export default App;
