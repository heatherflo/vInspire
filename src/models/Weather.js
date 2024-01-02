


export class Weather {
  constructor(data) {
    this.weather = data.weather
    this.main = data.main
    this.tempF = (this.kelvin - 273.15) * (9 / 5) + 32
    this.tempC = (this.kelvin - 273.15)
    this.humidity = data.main.humidity
    this.kelvin = data.main.temp

  }
}
