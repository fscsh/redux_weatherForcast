import React, {Component} from 'react';
import {wrongCity} from '../reducers/reducer_weather';

console.log({wrongCity});
export default class Alarm extends Component{

    render() {
        return (
            <div className = 'title'>
                {wrongCity ? 'wrongCity' : 'Weather Forecast'}
            </div>
        )
    }
}
