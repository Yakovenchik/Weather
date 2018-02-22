import React, {Component} from 'react';
import {ControlLabel, FormControl, Button} from 'react-bootstrap'
import {observer, inject} from 'mobx-react';
import './index.css'

@inject('citiesStore') @observer export default class AddCity extends Component{
    render(){
        const citiesStore = this.props.citiesStore;
        let name='';
        return( //add city for receiving forecast info
            <div    className="add_block">
                <Button href='#forecast' className='return'
                    /* button for return to block adding city*/
                >Return to adding</Button>
                <h1 id='forecast'>Forecast</h1>
                <div>
                    <ControlLabel>Enter the name of the city: </ControlLabel>
                    <FormControl type="text" id='inputCity' placeholder="Paris" onChange={(item)=>name=item.target.value}/>
                    <Button onClick={()=>{
                        citiesStore.addCity(name);  //call function for adding city from stores
                        document.getElementById('inputCity').value=''; //delete old input value
                    }} >ADD</Button>
                </div>
            </div>
        )}}