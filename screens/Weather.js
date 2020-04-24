import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';
import { Text, Card, Divider } from 'react-native-elements';

export default class Weather extends Component {
  render() {
    return (
        // <View></View>
        <View style={styles.container}>
          <Card containerStyle={styles.card}>
          </Card>
          <View style={styles.topContainer} />
          <View style={styles.bottomContainer} />
          <View style={styles.textContainer}>
            <Text style={styles.topText}>Today</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.bottomText1}>Woah!</Text>
            <Text style={styles.bottomText2}>Perfect Day</Text>
          </View>
          <View style={styles.image1}>
            <Image source={require('./assets/cloud.png')} style={{width: 120, height: 120}} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.bottomText3}>
              Clear skies. Sunny to partly {"\n"}cloudy in the afternoon. {"\n"} Low 47 F
            </Text>
          </View>
          <View style={styles.image2}>
            <Image source={require('./assets/temperature.png')} style={{width: 40, height: 40}} />
          </View>
          <View style={styles.image3}>
            <Image source={require('./assets/temperature.png')} style={{width: 40, height: 40}} />
          </View>
          <View style={styles.image4}>
            <Image source={require('./assets/wind.png')} style={{width: 30, height: 30}} />
          </View>
          <View style={styles.image5}>
            <Image source={require('./assets/humidity.png')} style={{width: 30, height: 30}} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.bottomText4}>Temperature</Text>
            <Text style={styles.bottomText5}>precipitation</Text>
            <Text style={styles.bottomText6}>Wind</Text>
            <Text style={styles.bottomText7}>Humidity</Text>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#05C167',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topContainer: {
    // flex: 0,
    backgroundColor: 'transparent',
    height: '20%',
    // overflow: 'hidden',
  },
  bottomContainer: {
    // flex: 1,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: '#FFFFFF',
    height: '80%',
    // overflow: 'hidden',
  },
  textContainer: {
    position: 'absolute',
    // width: '100%',
    // height: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  topText: {
    textAlign: 'center', // <-- the magic
    // fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'serif',
    marginTop: '40%',
    marginLeft: '55%',
    // width: 200,
    color: 'white',
  },
  bottomText1: {
    // textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 20,
    marginTop: '80%',
    marginLeft: '15%',
    // width: 200,
    color: 'black',
  },
  bottomText2: {
    // textAlign: 'center', // <-- the magic
    fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 30,
    marginTop: '2%',
    marginLeft: '15%',
    // width: 200,
    color: 'black',
  },
  bottomText3: {
    textAlign: 'left', // <-- the magic
    // fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'serif',
    marginTop: '70%',
    marginLeft: '40%',
    // width: 200,
    color: 'black',
  },
  bottomText4: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 20,
    marginTop: '110%',
    marginLeft: '-40%',
    // width: 200,
    color: 'black',
  },
  bottomText5: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 20,
    marginTop: '-7%',
    marginLeft: '60%',
    // width: 200,
    color: 'black',
  },
  bottomText6: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 20,
    marginTop: '40%',
    marginLeft: '-60%',
    // width: 200,
    color: 'black',
  },
  bottomText7: {
    textAlign: 'center',
    // fontWeight: 'bold',
    fontFamily: 'serif',
    fontSize: 20,
    marginTop: '-7%',
    marginLeft: '50%',
    // width: 200,
    color: 'black',
  },
  image1: {
    position: 'absolute',
    marginTop: '60%',
    marginLeft: '5%',
    // marginRight: '40%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // width: 20,
    // height: 20,
    // resizeMode: 'stretch',
    // flex: 1,
    // resizeMode: 'contain'
  },
  image2: {
    position: 'absolute',
    marginTop: 450,
    marginLeft: 50,
  },
  image3: {
    position: 'absolute',
    marginTop: 450,
    marginLeft: 230,
  },
  image4: {
    position: 'absolute',
    marginTop: 620,
    marginLeft: 50,
  },
  image5: {
    position: 'absolute',
    marginTop: 620,
    marginLeft: 230,
  },
  card:{
    backgroundColor:'rgba(56, 172, 236, 1)',
    borderWidth:0,
    borderRadius:20
  }
});
