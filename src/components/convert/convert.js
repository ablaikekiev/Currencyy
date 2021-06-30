import React, {useState} from 'react';
import {useSelector} from "react-redux";

const Convert = () => {
    const current = useSelector(s => s.currencies.current);
    const currencies = useSelector(s => s.currencies.currencies);
    const [value, setValue] = useState('');
    return (
        <div className='convert'>
            <input type="text" onChange={(e) => setValue(e.target.value)}/>
            <div>
                <span>{`${value} ${current}`}</span>
                <span style={{padding: '5px'}}>=</span>
                <span>{(value / currencies[`${current}`] * currencies.USD).toFixed(2)} USD</span>
            </div>
            <div>
                <span>{`${value} ${current}`}</span>
                <span style={{padding: '5px'}}>=</span>
                <span>{(value / currencies[`${current}`] * currencies.EUR).toFixed(2)} EUR</span>
            </div>
            <div>
                <span>{`${value} ${current}`}</span>
                <span style={{padding: '5px'}}>=</span>
                <span>{(value / currencies[`${current}`] * currencies.CNY).toFixed(2)} CNY</span>
            </div>
            <div>
                <span>{`${value} ${current}`}</span>
                <span style={{padding: '5px'}}>=</span>
                <span>{(value / currencies[`${current}`] * currencies.RUB).toFixed(2)} RUB</span>
            </div>
            <div>
                <span>{`${value} ${current}`}</span>
                <span style={{padding: '5px'}}>=</span>
                <span>{(value / currencies[`${current}`] * currencies.KGS).toFixed(2)} KGS</span>
            </div>

        </div>
    );
};

export default Convert;