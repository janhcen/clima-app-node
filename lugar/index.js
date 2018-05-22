const axios = require('axios')

const obtenerLugar = async(direccion) => {
  let encodedUrl = encodeURI(direccion)
  let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyCRA7OpB3cWmRY6lmIj-IhRP0cdFf537xE`

  let resp = await axios.get(url)
  
  if (resp.data.status === 'ZERO_RESULTS') {
    throw new Error(`No existen resultados para la ciudad ${direccion}`)
  }

  let location = resp.data.results[0]
  let coords = location.geometry.location

  return {
    location: location.formatted_address,
    lat: coords.lat,
    lng: coords.lng
  }
}

module.exports = {
  obtenerLugar
}