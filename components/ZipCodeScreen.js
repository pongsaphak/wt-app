import React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableHighlight,ImageBackground  } from 'react-native';

const availableZipItems = [
     { place: 'Hatyai', code: '90110' },
     { place: 'Trang', code: '92000' },
     { place: 'Chiangmai', code: '50000' },
     { place: 'Khonkaen', code: '40000' },
     { place: 'Phuket', code: '83000' },
     { place: 'Chonburi', code: '20000' },
]
const ZipItem = ({place, code, navigate}) => (
    <TouchableHighlight onPress={() => navigate("Weather", { zipCode: code })}>
    <View style={styles.zipItem}>
            <Text style={styles.zipPlace}>{place}</Text>
            <Text style={styles.zipCode}>{code}</Text>
    </View>
    </TouchableHighlight>
);

const _keyExtractor = item => item.code;

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Choose a zip code</Text>),
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <ImageBackground source={require('../img/cherprang.jpg')} style={styles.backdrop}> 
                <FlatList 
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({item}) => <ZipItem {...item} navigate={navigate}/>}
                />
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    backdrop: { width: '100%', height: '100%',
                opacity: 0.8 
    },
    zipItem: {
        paddingTop: 5,
        flex: 1,
        flexDirection: "row",
        backgroundColor : 'black',
        opacity:0.5,
        width: '100%'
    },
    zipPlace: {
        flex: 2,
        //textAlign: "center",
        paddingLeft: 25,
        color:'white',
        fontSize:30,
    },
    zipCode: {  flex: 1, 
                textAlign: "center" ,
                color:'white',
                fontSize:30,
    }
});