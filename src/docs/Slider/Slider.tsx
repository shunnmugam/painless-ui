import React from 'react';
import { Slider } from '../../components';

const SliderExample:React.FC<any> = (props) => {
    return (
        <div style={{marginTop: "20px"}}>
            <Slider range={false}/>
        </div>
    )
}

export default SliderExample;