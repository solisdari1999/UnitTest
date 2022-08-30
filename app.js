function fromEuroToDollar(e) {
    return e * 1.2
}

// /// let oneEuroIs = {
// "JPY": 127.9, // japan yen
// "USD": 1.2, // us dollar
// // "GBP": 0.8, // british pound}


function fromDollarToYen(cantidadDolares) {
    let valorYen = 127.9 * cantidadDolares / 1.2

    return parseFloat(valorYen.toFixed(1))
}

function fromYanToPound(cantidadYen) {
    let valorPound = 0.8 * cantidadYen / 127.9

    return parseFloat(valorPound.toFixed(1))
}

module.exports = {
    fromEuroToDollar,
    fromDollarToYen,
    fromYanToPound
}