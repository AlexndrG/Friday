import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperDoubleRange.module.css'

// import {Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number | number[]) => void
    value?: number[]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    // return (
    //     <>
    //         DoubleRange
    //     </>
    // )

    const handleChange = (event: ChangeEvent<{}>, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue);
    };

    return (
        <>
            {/*<Slider*/}
            {/*    style={{boxSizing: 'border-box', width: '200px', height: '20px'}}*/}
            {/*    value={value}*/}
            {/*    onChange={handleChange}*/}
            {/*    valueLabelDisplay="auto"*/}
            {/*    aria-labelledby="range-slider"*/}
            {/*/>*/}
        </>
    )
}

export default SuperDoubleRange

/*

https://material-ui.com/ru/components/slider/
https://codesandbox.io/s/91yti?file=/demo.js

*/
