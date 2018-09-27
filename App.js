import React from 'react';
import Weather from './components/Weather'
import Forecast from './components/Forecast'

export default class App extends React.Component {
  render() {
    return (
      <Weather zipCode="90110"/>
    );
  }
}