import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateCurrent} from "../../redux/reducers/currencies";
import {Link} from "react-router-dom";

const Header = () => {
    const currencies = useSelector((s) => s.currencies.currencies);
    const current = useSelector((s) => s.currencies.current);
    const dispatch = useDispatch();

    return (
            <header className='header'>
                <div style={{display: 'flex'}}>
                    <Link to='/' className='header__title' style={{cursor: 'pointer'}}>Курс валют</Link>
                    <Link to='/convert' className='header__title' style={{cursor: 'pointer'}}>Конвертер</Link>
                </div>
                <div className='header-flexBox'>
                    {
                        Object.keys(currencies).map((item) => {
                            return current === item ? <button type='click' style={{background: "white"}} className='header-flexBox__items' onClick={() => dispatch(updateCurrent(`${item}`))}>
                                {item}
                            </button> : <button type='click' className='header-flexBox__items' onClick={() => dispatch(updateCurrent(`${item}`))}>
                                {item}
                            </button>
                        })
                    }
                </div>
            </header>
    );
};

export default Header;