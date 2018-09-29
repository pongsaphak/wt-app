import React from 'react';
import Forecast from './Forecast';
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';

export default class Weather extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        forecast: {
        main: '-', description: '-', temp: 0
        }
      }
  }
  fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
    .then((response) => response.json())
    .then((json) => {
      this.setState(
        {
          forecast: {
          main: json.weather[0].main,
          description: json.weather[0].description,
          temp: json.main.temp
          }
        });
    })
    .catch((error) => {
      console.warn(error);
    });
  }
   
  componentDidMount = () => this.fetchData()
  componentDidUpdate = (prevProps) => {
      if (prevProps.zipCode !== this.props.zipCode) {
        this.fetchData()
      }
  }
render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../img/bg.jpg')} style={styles.backdrop}>
          <ImageBackground style = {styles.background}>
            <Text style = {styles.zipCode}>Zip code is {this.props.zipCode}.</Text>
            <Forecast {...this.state.forecast} />
          </ImageBackground>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: { paddingTop: 0 },
    backdrop: { width: '100%', height: '100%',
                alignItems:'center', 
    },
    zipCode: {  color:'white',
                fontSize:30,
    },
    background : { backgroundColor : 'black',
                   opacity:0.5,
                   width: '100%',
                   alignItems:'center'
    },
 });
