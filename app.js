const {obtenerLugar} = require('./lugar')
const {obtenerClima} = require('./clima')

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv


const getInfo = async(direccion) => {
  try {
    let coors = await obtenerLugar(direccion)
    let temp = await obtenerClima(coors.lat, coors.lng)

    return `El clima en ${direccion} es de ${temp}`

  } catch (error) {
    return `No se pudo determinar el clima en ${direccion}`
  }
}

getInfo(argv.direccion)
  .then(msg => console.log(msg))
  .catch(e => console.log(e))
