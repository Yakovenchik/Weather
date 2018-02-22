import CitiesStore from "./Cities/index";
import FindCity from "./FindCity/index"

const citiesStore = new CitiesStore();
const findCity = new FindCity();

const stores = {
    citiesStore,
    findCity
};

export default stores;