
import { AppState } from "../AppState"
import { api } from "./AxiosService"
import { weatherApi } from ".AxiosService"
import { }


class WeatherService {

    async getWeather() {
      const response = await api.get('api/weather')
      console.log(response.data)
      AppState.weather = new (response.data)
    }

  }

export const weatherService = new WeatherService()