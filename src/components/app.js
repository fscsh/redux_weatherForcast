import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list'
import Alarm from '../containers/alarm';

export default class App extends Component {
  render() {
    return (
      <div>
          <Alarm />
          <SearchBar />
            <WeatherList />
        </div>
    );
  }
}
