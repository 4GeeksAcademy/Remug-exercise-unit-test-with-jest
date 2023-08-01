// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };

let oneEuroIs = {
    "JPY": 127.9, //japan yen
    "USD": 1.2, //us dollar
    "GBP": 0.8, // british pound
}

// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }

let oneDollarIs = {
    "JPY": 106.6, //japan yen
    "EUR": 0.83, //Euro
    "GBP": 0.67, // british pound
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 106.6;

    return valueInYen
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen }

let onePoundIs = {
    "JPY": 159.8, //japan yen
    "EUR": 1.25, //Euro
    "USD": 1.5, //us dollar
}

const fromYenToPound = function(valueInYen){
    let valueinPound = valueInYen / 159.8;

    return valueinPound
    
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }