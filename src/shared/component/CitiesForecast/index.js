import React, {Component} from 'react';
import {Carousel, ListGroup, ListGroupItem, Image, Button} from 'react-bootstrap'
import {observer, inject} from 'mobx-react';
import './index.css'

@inject('citiesStore') @observer export default class CitiesList extends Component{
    render(){
        const citiesStore = this.props.citiesStore;
        if (citiesStore.citiesList !== null){
        //if you entry firstly create empty array for work
        return(
                <div className='main_block'>
                    {citiesStore.citiesList.map((elem, i)=> {       //map the list of cities witch added earlier and render them on the screen
                        //slider for forecasts in different days
                        return(
                                <div className='CityInfo' id={elem.location.name} key={i}>
                                    <h2>{elem.location.name}</h2>
                                    <h2>{elem.location.country}</h2>
                                    <Carousel interval={null} >
                                    {elem.forecast.forecastday.map((item)=>{ //map forecasts in 3 days
                                        return(
                                            <Carousel.Item key={elem.location.name+item.date}>
                                            <div className='dayForecast' >
                                                <div className='dayInfo'>
                                                    <h4>{item.date}</h4>
                                                    <Image alt={item.day.condition.text} src={item.day.condition.icon} circle />
                                                    <p>{item.day.condition.text}</p>
                                                </div>
                                                <div className='Temp'>
                                                    <h4><b>TEMP:</b></h4>
                                                    <ListGroup>
                                                        <ListGroupItem>
                                                            Average: {item.day.avgtemp_c} C
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            Minimal: {item.day.mintemp_c} C
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            Maximal: {item.day.maxtemp_c} C
                                                         </ListGroupItem>
                                                    </ListGroup>
                                                </div>
                                                <div className='astro'>
                                                    <h4><b>ASTRO:</b></h4>
                                                    <ListGroup>
                                                        <ListGroupItem>
                                                            Moonrise: {item.astro.moonrise}
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            Moonset: {item.astro.moonset}
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            Sunrise: {item.astro.sunrise}
                                                        </ListGroupItem>
                                                        <ListGroupItem>
                                                            Sunset: {item.astro.sunset}
                                                        </ListGroupItem>
                                                    </ListGroup>
                                                </div>
                                            </div>
                                            </Carousel.Item>
                                        )
                                    })}
                                    </Carousel>
                                    <Button onClick={()=>citiesStore.removeCity(elem)} >REMOVE</Button>
                                </div>
                        )})}
                </div>
        )}
    }
}