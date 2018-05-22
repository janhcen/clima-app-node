const axios = require('axios')

const obtenerClima = async (lat, lng) => {
  let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=ac65db2551c4c2d2f5ce344f8b656b50`

  let resp = await axios.get(url)

  if (resp.data.main) {
    return resp.data.main.temp
  }

  throw new Error(`No existen resultados`)
}

module.exports = {
  obtenerClima
}