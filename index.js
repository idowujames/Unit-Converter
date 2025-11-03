/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")


convertBtn.addEventListener("click", function(){
    if (!isNaN(inputEl.value)){
        console.log(inputEl.value)
        console.log(convertVolume("liters", inputEl.value))
    }
    else{
        console.log("Not a number")
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