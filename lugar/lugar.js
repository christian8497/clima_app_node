//creamos una constante llamada axios donde importaremos axios
const axios = require('axios');

//creamos funcion para obtener latitud longitud de lugar 
const getLugarLatLng = async(dir) => {

    const encodedURL = encodeURI(dir);

    //estructura para construir la url con headers para peticiones al API con axios package
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedURL}`,
        headers: { 'x-rapidapi-key': '25547c1d6amshfc09b43dc8ce03bp19efb8jsn555edd310776' }
    });


    //creamos una constante que almacena la respuesta de await de esa funcion get

    const resp = await instance.get();

    //validamos si hay respuesta de la busqueda que estamos realizando
    if (resp.data.length === 0) {
        throw new Error(` No hay resultados para ${dir}`)
    }

    const data = resp.data[0];
    const direccion = resp.data.name;
    const lat = resp.data.coord.lat;
    const lng = resp.data.coord.lon;


    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}