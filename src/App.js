import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CommodityForm from "./components/Commodity/CommodityForm/CommodityFrom";
import CommodityList from "./components/Commodity/CommodityList";
import Orders from "./components/Order/Orders";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header/>

                <Switch>
                    <Route exact path='/' component={CommodityList}/>
                    <Route exact path='/order' component={Orders}/>
                    <Route exact path='/commodity' component={CommodityForm}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
