import React,{ Component} from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/googleMap'

class WeatherList extends Component{
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather=>weather.main.temp);
        const humiditys = cityData.list.map(weather=>weather.main.humidity);
        const pressures = cityData.list.map(weather=>weather.main.pressure);
        const {lat,lon} = cityData.city.coord;

        return(
            <tr key = {name}>
                <td><GoogleMap lon={lon} lat = {lat}/>{name}</td>
                <td>
                    <Chart data = {temps} color = 'red' units = 'K' />
                </td>
                <td>
                    <Chart data = {humiditys} color = 'green' units = 'hPa'/>
                </td>
                <td>
                    <Chart data = {pressures} color = 'blue' units = '%'/>
                </td>
            </tr>
        )
    }
    render(){
        return(
            <table className = 'table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>

        )
    }
}

function mapStateToProps( state ){
    return { weather: state.weatherReducer }
}
export default connect(mapStateToProps)(WeatherList);
