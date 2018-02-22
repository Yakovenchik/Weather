import React, {Component} from 'react';
import CitiesForecast from "../component/CitiesForecast/index";
import stores from '../store/index';
import {Provider} from 'mobx-react'
import AddCity from "../component/AddCity/index";
import ListCities from "../component/ListCities/index";
import CurrentCity from "../component/CurrentCity/index";
import './index.css'

export default class MainPage extends Component{
    render() {
        return (
            <div className='MainPage'>
                <div>
                    <Provider citiesStore={stores.citiesStore}
                    //give store for child classes
                    >
                        <AddCity/>
                    </Provider>
                    <Provider citiesStore={stores.citiesStore}>
                        <ListCities/>
                    </Provider>
                </div>
                <div>
                    <Provider citiesStore={stores.findCity}>
                        <CurrentCity />
                    </Provider>
                    <Provider citiesStore={stores.citiesStore}>
                        <CitiesForecast/>
                    </Provider>
                </div>
            </div>
        )
    }
}