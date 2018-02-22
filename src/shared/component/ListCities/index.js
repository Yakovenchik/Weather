import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap'
import {observer, inject} from 'mobx-react';
import './index.css'

@inject('citiesStore') @observer export default class ListCities extends Component{
    render(){
        const citiesStore = this.props.citiesStore;
        if (citiesStore.citiesList !== null){
        return( //create list for scrolling page to city which need
            <div className='listCities'>
                <ListGroup>
                    {citiesStore.citiesList.map((elem)=>{ //
                        return(
                            <ListGroupItem key={elem.location.name+elem.location.country}>
                                <a href={'#'+elem.location.name}>{elem.location.name}</a>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </div>
        )}}}