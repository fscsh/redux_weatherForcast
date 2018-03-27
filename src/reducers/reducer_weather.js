import { FETCH_WEATHER } from '../actions/index';
import React,{Component} from 'react';

var wrongCity = false;
export default function reducersWeather(state = [],action) {
    switch (action.type) {
        case FETCH_WEATHER:
            if (!action.payload.data) {
                wrongCity = true;
            } else {
                wrongCity = false;
            }
            console.log('wrongCity is ', wrongCity);
            return [action.payload.data, ...state ];
    }
    return state;
}
