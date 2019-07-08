let mockApiData = {}

const API_KEY = 'ecd0760245adf6ca1732fce6a8a8a775'

const weatherAtThisMoment = (cityName) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}&units=metric`
  fetch(URL)
    .then(response => response.json())
    .then((data) => {
      mockApiData.city = data.name
      mockApiData.country = data.sys.country
      mockApiData.temp = data.main.temp
      mockApiData.hymidity = data.main.hymidity
      mockApiData.clouds = data.clouds.all
      mockApiData.description = data.weather[0].description
      mockApiData.icon = data.weather[0].icon
    }).catch(function (e) {
      console.log('Error: ' + e)
    })
}

const weatherForecast = (cityName) => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&units=metric`
  fetch(URL)
    .then(response => response.json())
    .then((data) => {
      let processedList = []
      for (let item of data.list) {
        const aDate = item.dt_txt.split(' ')
        if (!processedList[aDate[0]]) {
          processedList[aDate[0]] = []
        }
        processedList[aDate[0]].push({
          hour: aDate[1].substr(0, 5),
          temp: item.main.temp,
          icon: `https://openweathermap.org/img/w/${item.weather[0].icon}.png`,
          description: item.weather[0].description
        })
      }
      mockApiData.list = processedList
    }).catch(function (e) {
      console.log('Error: ' + e)
    })
}

export const getWeather = (event) => dispatch => {
  const city = event.target.elements.city.value

  weatherAtThisMoment(city)
  weatherForecast(city)
  setTimeout(() => {
    dispatch({
      type: 'FETCH_WEATHER',
      payload: mockApiData
    })
  }, 600)
}
