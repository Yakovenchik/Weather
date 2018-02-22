import {action, observable} from "mobx";
import get from "axios";

export default class FindCity {
    @observable currentCity = {};

    @action find() { //find you place with help of coordinates
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position=> { //take your current coordinates
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                const getCity = 'https://api.opencagedata.com/geocode/v1/json?q=' + latitude.toString() + '+' + longitude.toString() + '&key=d5bf3401cebc4d91936e0bd2d2fca910&language=it'; //create url for request
                get(getCity)
                    .then(response => {
                        const InfoCity = 'http://api.apixu.com/v1/forecast.json?key=087d583dc2bb435087b153359181902&q='+response.data.results[0].components.city+'&days=7'; //create url for request
                        get(InfoCity)
                            .then(response=>{
                                this.currentCity=(response.data); //add element to object
                            })
                            .catch(error=>{
                                alert(error);
                            });
                    })
                    .catch(error => {
                        alert(error);
                    });
            });
        } else {
            alert("Geolocation API не поддерживается в вашем браузере");
        }
    }
}