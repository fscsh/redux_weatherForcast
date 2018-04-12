import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list'
import Alarm from '../containers/alarm';

export default class App extends Component {
  render() {
    return (
      <div>
          <div className = 'tablePosition'>
              <span className = 'cityTable'>
          <table className = 'cityName'>
              <tr>
                  <th>Cities example: </th>
            </tr>
            <tr>
                <td>New York</td>
                <td>Los Angeles</td>
            </tr>
            <tr>
                <td>Boston</td>
                <td>Las Vegas</td>
            </tr>

          </table>
      </span>
      </div>
          <Alarm />
          <SearchBar />
          <WeatherList />
        </div>
    );
  }
}
