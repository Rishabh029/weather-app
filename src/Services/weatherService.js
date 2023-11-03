import { DateTime } from "luxon";
import axios from "axios";
// const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
    params: {
        q: 'Paris',
        days: '5'
    },
    headers: {
        'X-RapidAPI-Key': 'b23f962954msh3341808f51b15ffp1b1d2djsnb5a82e77747a',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
};
const weatherData = async () => {
    try {
        const response = await axios.request(options);
        const weatherDataApi = response.data;
        console.log(weatherDataApi);
        return weatherDataApi;
    } catch (error) {
        console.error(error);
    }
}

weatherData();

const API_KEY = "89f389dfb6097149c187373f986a7f15";
const BASE_URL = "https://api.openweathermap.org/data/2.5"

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
    // console.log(url);
    return fetch(url).then((res) => res.json())
};

const formatCurrentWeather = (data) => {
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed }
    } = data

    const { main: details, icon } = weather[0];

    return { lat, lon, temp, feels_like, temp_max, temp_min, humidity, name, dt, country, sunrise, sunset, details, icon, speed }
}


const getFormattedWeatherData = async (searchParams) => {
    const formattedCurrentWeather = await getWeatherData('weather', searchParams).then(formatCurrentWeather)
    return { ...formattedCurrentWeather };

}

const formatToLocalTime = (secs, zone, format = "cccc , dd LLL yyyy ' | Current time 'hh: mm a ") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
