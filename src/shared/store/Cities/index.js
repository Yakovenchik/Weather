import { observable, action} from 'mobx';
import get from 'axios'





export default class CitiesStore {
    @observable citiesList = JSON.parse(localStorage.getItem('citiesList')); //take info from previous session
    @observable current = '';
    @observable currentCity = [];

    @action addCity(elem) {
        const InfoCity = 'http://api.apixu.com/v1/forecast.json?key=087d583dc2bb435087b153359181902&q='+elem+'&days=7'; //create url for request
        let flag=true;
        get(InfoCity)
            .then(response=>{
                this.citiesList.map((item)=>
                    item.location.name === response.data.location.name && item.current.date === response.data.current.date ? flag=false:null   //check list for no repeat cities in similar date
                );
                   flag ? this.citiesList.push(response.data):alert('This city or this city with this date added earlier');  //add element in the end of array
                localStorage['citiesList'] = JSON.stringify(this.citiesList); //update localStorage for using in the next session
            })
            .catch(error=>{
                 alert(error);
        });
    }

    @action removeCity(elem) {
        this.citiesList.map((item,i)=>
            item.location.lon === elem.location.lon && item.location.lan ===elem.location.lan ? this.citiesList.splice(i, 1):null   //cut the current element from array
        );
        localStorage['citiesList']= JSON.stringify(this.citiesList); //update localStorage for using in the next session
    }
}