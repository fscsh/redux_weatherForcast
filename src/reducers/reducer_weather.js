import { FETCH_WEATHER } from '../actions/index';
import React,{Component} from 'react';


export default function reducersWeather(state = [],action) {
    switch (action.type) {
        case FETCH_WEATHER:
            if (action.payload.data) {
                return [action.payload.data, ...state ];
            }
            return state;
    }
    return state;
}
