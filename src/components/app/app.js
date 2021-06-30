import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import {getCurrencies} from "../../redux/reducers/currencies";
import Header from "../header";
import Main from "../main";
import Convert from "../convert";

const App = () => {
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    useEffect(() => {
        return dispatch(getCurrencies())
    },[dispatch]);
    return (
        <div className='container'>
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path='/' component={() => <Main input={input} setInput={setInput}/>}/>
                    <Route exact path='/convert' component={() => <Convert/>}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;