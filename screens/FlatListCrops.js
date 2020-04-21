import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ActivityIndicator,
} from 'react-native';
import ActivityIndicatorViewNativeComponent from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicatorViewNativeComponent';

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: [],
        };
    }

    //Custom Layout for  each row of the FlatList
    renderItem = ({item}) => {
        return (
            <View>
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        marginBottom: 30,
                        justifyContent: 'center',
                    }}>
                    <Image
                        style={{width: 80, height: 80, margin: 5, borderRadius: 50}}
                        source={{uri: item.image}}
                    />
                    <View style={{flex: 1, justifyContent: 'center', marginLeft: 5}}>
                        <Text
                            style={{
                                fontSize: 18,
                                color: 'green',
                                marginBottom: 5,
                                marginTop: 20,
                            }}>
                            {item.book_title}
                        </Text>
                        <Text style={{fontSize: 13, color: 'black', marginBottom: 20}}>
                            {item.author}
                        </Text>
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
            'http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1';
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    dataSource: responseJson.book_array,
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={{
                        fontSize: 18,
                        left: 140,
                        top: 20,
                        fontWeight: 'bold',
                        marginBottom: 30,
                    }}>
                    List of Crops
                </Text>
                <FlatList
                    style={{margin: 20}}
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
});
