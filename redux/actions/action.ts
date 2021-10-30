import {http} from '../http';
import { Dispatch } from 'redux';

const getCountry = (inp: string, navigation: any) => (dispatch: Dispatch) => {
  return http.get(`https://restcountries.com/v2/name/${inp}`)
  .then(country => {
    dispatch({
      type: 'SET_COUNTRY',
      data: country
    })
    navigation.navigate('Country');
  })
  .catch(err=>{
    console.log(err)
  })
}

const getCountryDetails = (capital: string, navigation: any) => (dispatch: Dispatch) => {
  return http.get(`http://api.weatherstack.com/current?access_key=b7d7f802a2ec37d37936b1eace8a0fe3&query=${capital}`).then(weather => {
    console.log(':::::::::::::::::::::::::::::::::::::::')
    console.log(weather.data)
    dispatch({
      type: 'SET_WEATHER',
      data: weather
    })
    navigation.navigate('Weather');
  })
  .catch(err=>{
    console.log(err)
  })
}

export {
  getCountry,
  getCountryDetails
}