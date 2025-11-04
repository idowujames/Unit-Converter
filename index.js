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




// 20 meters = 65.616 feet | 20 feet = 6.096 meters
let metersToFeet = 0
let feetToMeters = 0

let litersToGallon = 0
let gallonToLiters = 0

let kilosToPounds = 0
let poundsToKilos = 0



convertBtn.addEventListener("click", function(){
    
    const value = inputEl.value.trim()

    if(isNaN(value) || value === ""){
        reset()
        errorTextEl.textContent = `Please enter a valid number` 
        return
    }


    if (!isNaN(value)){
        errorTextEl.textContent = ""
        // Length Conversion
        metersToFeet = convertLength("meter", value)
        feetToMeters = convertLength("feet", value)

        // Volume Conversion
        litersToGallon = convertVolume("liters", value)
        gallonToLiters = convertVolume("gallons", value)


        // Mass Conversion
        kilosToPounds = convertMass("kilos", value)
        poundsToKilos = convertMass("pounds", value)

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
        return (Number(val) * 3.28084).toFixed(3)
    }

    else{
        return (Number(val) * 0.3048).toFixed(3)
    }
}

function convertVolume(metric,val){
    if (metric === "liters"){
        return (Number(val) *  0.264172).toFixed(3)
    }

    else{
        return (Number(val) * 3.78541).toFixed(3)
    }
}

function convertMass(metric,val){
    if (metric === "kilos"){
        return (Number(val) *  2.20462).toFixed(3)
    }

    else{
        return (Number(val) * 0.453592).toFixed(3)
    }
}




