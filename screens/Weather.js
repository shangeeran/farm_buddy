import React, {Component} from 'react';
import {View, StyleSheet, Text, Button, Image} from 'react-native';

export default class Weather extends Component {
  render() {
    return (
        <View style={styles.container}>
          <View style={styles.topContainer} />
          <View style={styles.bottomContainer} />
          <View style={styles.textContainer}>
            <Text style={styles.topText}>Today</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.bottomText1}>Woah!</Text>
            <Text style={styles.bottomText2}>Perfect Day</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.bottomText3}>
              Clear skies. {"\n"}Sunny to partly {"\n"}cloudy in the afternoon. {"\n"} Low 47 F
            </Text>
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
    marginTop: '30%',
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
    fontSize: 22,
    marginTop: '2%',
    marginLeft: '15%',
    // width: 200,
    color: 'black',
  },
  bottomText3: {
    textAlign: 'left', // <-- the magic
    // fontWeight: 'bold',
    fontSize: 18,
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
    marginTop: '115%',
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
    marginTop: '30%',
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
    marginTop: '100%',
    marginLeft: '10%',
  },
  image3: {
    position: 'absolute',
    marginTop: '100%',
    marginLeft: '55%',
  },
  image4: {
    position: 'absolute',
    marginTop: '140%',
    marginLeft: '10%',
  },
  image5: {
    position: 'absolute',
    marginTop: '140%',
    marginLeft: '55%',
  },
});
