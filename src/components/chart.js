import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots, SparklinesBars } from 'react-sparklines';

export default (props)=>{
    function average(data){
        return _.round(_.sum(data)/data.length);
    }
    return(
        <div>
        <Sparklines height = {120} width = {180} data = {props.data} >
            <SparklinesLine color = {props.color} />
            <SparklinesReferenceLine type= 'avg' />
            <SparklinesSpots />
        </Sparklines>
        <div>{average(props.data)} {props.units}</div>
        </div>
    )
}
