import React from 'react';
import Weather from './components/Weather'
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';

export default class WeatherScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: (<Text>Weather</Text>),
        }
    }
    render() {
        return (
            <Weather zipCode="90110"/>
        );
    }
}
   