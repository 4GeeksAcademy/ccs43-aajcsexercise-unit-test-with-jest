// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// solo un registro en consola para nosotros.
console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (eur) => {
    return  Number((eur * oneEuroIs.JPY).toFixed(2))
}
console.log(fromDollarToYen(1))
const fromEuroToDollar = (eur) => {
    return  Number((eur * oneEuroIs.USD).toFixed(2))
}
console.log(fromEuroToDollar(1))
const fromYenToPound = (eur) => {
    return Number((eur * oneEuroIs.GBP).toFixed(2))
}
console.log(fromYenToPound(3.5))


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound, };