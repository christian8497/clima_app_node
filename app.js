const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


//obtener ambos servicios
const getInfo = async(direccion) => {

    try {
        //primero obtenemos la informacion de las coordenadas del lugar que estamos buscando
        const coords = await lugar.getLugarLatLng(direccion);

        //despues enviamos las coordenadas a la funcion para obtener el clima actual de ese lugar
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp}`;
    } catch (e) {

        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);