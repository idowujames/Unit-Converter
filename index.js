
const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const errorTextEl = document.getElementById("error-text")

// Press enter key to submit also
inputEl.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        convertBtn.click()
    }
})


convertBtn.addEventListener("click", function(){
    
    const rawValue = inputEl.value.trim()
    let value = Number(rawValue)

    if(isNaN(value) || rawValue === "" || value < 0){
        resetOutput()
        errorTextEl.textContent = `Please enter a valid number` 
        return
    }

    convertUnits(value)
    errorTextEl.textContent = ""      
})



function resetOutput(){
    lengthEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""
}




function convertUnits(value){
    
    // Length Conversion
    const metersToFeet = (value * 3.28084).toFixed(3)
    const feetToMeters = (value * 0.3048).toFixed(3)
    lengthEl.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`


    // Volume Conversion
    const litersToGallon = (value *  0.264172).toFixed(3)
    const gallonToLiters = (value * 3.78541).toFixed(3)
    volumeEl.textContent = `${value} liters = ${litersToGallon} gallons | ${value} gallons = ${gallonToLiters} liters`

    // Mass Conversion
    const kilosToPounds = (value *  2.20462).toFixed(3)
    const poundsToKilos = (value * 0.453592).toFixed(3)
    massEl.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos` 
}






