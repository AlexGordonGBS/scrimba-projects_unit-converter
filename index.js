/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const precision = 3 // 3 decimal digits
const valueEl = document.getElementById("value-el")
const buttonEl = document.getElementById("button-el")
const resultsLengthEl = document.getElementById("results-length-el")
const resultsVolumeEl = document.getElementById("results-volume-el")
const resultsMassEl = document.getElementById("results-mass-el")

const mToF = 3.281
const lToG = 0.264
const kToP = 2.204


buttonEl.addEventListener("click", function() {
    console.log("inside event Listener")
    let value = valueEl.value
    console.log(valueEl)
    console.log(`value: ${value}`)
    
    const feet = (value * mToF).toFixed(precision)
    const meters = (value / mToF).toFixed(precision)

    const gallons = (value * lToG).toFixed(precision)
    const liters = (value / lToG).toFixed(precision)

    const pounds = (value * kToP).toFixed(precision)
    const kilos = (value / kToP).toFixed(precision)
    
    const resultsLength = `${value} meters = ${feet} feet | 
                           ${value} feet = ${meters} meters
                          `
    const resultsVolume = `${value} liters = ${gallons} gallons | 
                           ${value} gallons = ${liters} litters
                          `
    const resultsMass = `${value} kilos = ${pounds} pounds | 
                         ${value} pounds = ${kilos} kilos
                        `

    resultsLengthEl.textContent = resultsLength
    resultsVolumeEl.textContent = resultsVolume
    resultsMassEl.textContent = resultsMass 

})

