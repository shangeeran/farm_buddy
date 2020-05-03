import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';

export default class FlatListCrops extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
        };
    }

    //Custom Layout for  each row of the FlatList
    renderItem = ({item}) => {
        return (
            <View style={{flex: 1, flexDirection: 'row', marginBottom: 30, justifyContent: 'center'}}>
    {/*<Image*/}
    {/*    style={{width: 80, height: 80, margin: 5, borderRadius: 50}}*/}
    {/*    source={{uri: item.image}}*/}
    {/*    />*/}
        <View style={{flex: 1, marginLeft: 5, flexDirection: 'row'}}>
            <View>
                <Text style={styles.crop}>{item.Crop}</Text>
                {/*<Text style={styles.price}>Rs {item.Price}.00</Text>*/}
            </View>
            <View>
                {/*<Text style={styles.crop}>{item.Crop}</Text>*/}
                <Text style={styles.price}>Rs {item.Price}.00</Text>
            </View>
        </View>
        </View>
    );
    };

    renderSeparator = () => {
        return (
            <View style={{height: 1, width: '100%', backgroundColor: 'white'}} />
    );
    };

    //Fetching Data from the server
    componentDidMount() {
        const url =
            "http://10.0.2.2:5000/crops";
        fetch(url,{method: "GET"})
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    dataSource: responseJson.Predication
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return(
            <View style={styles.container}>
            <FlatList
        data={this.state.dataSource}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={this.renderSeparator}
        />
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    crop: {
        marginLeft: 20,
        fontSize: 28,
        color: 'green',
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop:20
    },
    price: {
        paddingTop: 28,
        paddingLeft: 40,
        fontSize: 20,
        color: '#F37358',
        fontWeight: 'bold',
        marginBottom: 20
    }
});
