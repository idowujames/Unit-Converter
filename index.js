/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

const lengthEl = document.getElementById("length")
const volumeEl = document.getElementById("volume")
const massEl = document.getElementById("mass")

const errorTextEl = document.getElementById("error-text")




convertBtn.addEventListener("click", function(){
    
    const rawValue = inputEl.value.trim()
    let value = Number(rawValue)

    if(isNaN(value) || rawValue === "" || Number(value) < 0){
        reset()
        errorTextEl.textContent = `Please enter a valid number` 
        return
    }


    if (!isNaN(value)){
        errorTextEl.textContent = ""
        // Length Conversion
        const metersToFeet = convertLength("meter", value)
        const feetToMeters = convertLength("feet", value)

        // Volume Conversion
        const litersToGallon = convertVolume("liters", value)
        const gallonToLiters = convertVolume("gallons", value)


        // Mass Conversion
        const kilosToPounds = convertMass("kilos", value)
        const poundsToKilos = convertMass("pounds", value)

        lengthEl.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`
        volumeEl.textContent = `${value} liters = ${litersToGallon} gallons | ${value} gallons = ${gallonToLiters} liters`
        massEl.textContent = `${value} kilos = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilos`   
    } 

    
})

function reset(){
    lengthEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""
}

inputEl.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        convertBtn.click()
    }
})






function convertLength(metric,val){
    if (metric === "meter"){
        return (val * 3.28084).toFixed(3)
    }

    else{
        return (val * 0.3048).toFixed(3)
    }
}

function convertVolume(metric,val){
    if (metric === "liters"){
        return (val *  0.264172).toFixed(3)
    }

    else{
        return (val * 3.78541).toFixed(3)
    }
}

function convertMass(metric,val){
    if (metric === "kilos"){
        return (val *  2.20462).toFixed(3)
    }

    else{
        return (val * 0.453592).toFixed(3)
    }
}




