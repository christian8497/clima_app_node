const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1e805770a35b7203af14c2105e850df6&units=metric`);
    //de la respuesta que nos devuelve la peticion, hacemos busqueda dentro de la data, dentro de la etiqueta main, el valor de la variable temp.
    return resp.data.main.temp;
}

//api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=1e805770a35b7203af14c2105e850df6&units=metric

module.exports = {
    getClima
}