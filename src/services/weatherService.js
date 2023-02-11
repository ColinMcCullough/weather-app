import { DateTime } from "luxon";

// import api key from .env file
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const fetchWeatherInfo = async (infoType, searchParams) => {
  const url = new URL(`${BASE_URL}/${infoType}`);
  url.search = new URLSearchParams({...searchParams, appid: API_KEY});
  return fetch(url)
    .then(res => res.json())
    .catch(err => console.log(err));
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
  } = data;

  const { main: details, icon } = weather[0];
  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed
  };
};

const formatToLocalTime = (secs, zone, format = `cccc, dd LLL yyyy' | Local time: hh:mm a`) =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getSeconds = () => {
  const date = new Date();
  return Math.round(date.getTime() / 1000);
}
const formatForecastWeather = (data) => {
  const { timezone, daily, hourly } = data;
  const formattedDaily = daily.slice(1, 6).map((day) => {
    const seconds = day?.dt ?? getSeconds();
    return {
      title: formatToLocalTime(seconds, timezone, 'ccc'),
      temp: day.temp.day,
      icon: day.weather[0].icon
    }
  })

  const formattedHourly = hourly.slice(1, 6).map((hour) => {
    const seconds = hour?.dt ?? getSeconds();
    return {
      title: formatToLocalTime(seconds, timezone, 'hh:mm a'),
      temp: hour.temp.day,
      icon: hour.weather[0].icon
    }
  })
  return { timezone, daily: formattedDaily, hourly: formattedHourly };
};

const getFormattedWeatherData = async (searchParams) => {
    try {
      const formattedWeatherInfo = await fetchWeatherInfo('weather', searchParams)
        .then(formatCurrentWeather)
  
      const { lat, lon } = formattedWeatherInfo;

      const formattedForecastWeather = await fetchWeatherInfo('onecall', {
        lat,
        lon,
        exclude: 'current,minutely,alerts',
        units: searchParams.units
      }).then(formatForecastWeather)

      return { ...formattedWeatherInfo, ...formattedForecastWeather };
    } catch (err) {
      console.log(err);
      return undefined
    }
};

export default getFormattedWeatherData;