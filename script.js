const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn")

let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function()
{
    let num = Number(inputEl.value)
    length(num)
    volume(num)
    mass(num)
})

function length(num)
{
    // 0 meters = 0.000 feet | 0 feet = 0.000 meters
    let feet = (num * 3.281).toFixed(3)
    let meter = (num / 3.281).toFixed(3)

    lengthEl.textContent=`${num} meters = ${feet} feet | ${num} feet = ${meter} meters`
}

function volume(num)
{
    let gallon = (num * 0.264).toFixed(3)
    let liter = (num * 3.785).toFixed(3)

    volumeEl.textContent=`${num} liter = ${gallon} gallon | ${num} gallon = ${liter} liter`

}

function mass(num)
{
    let pound = (num * 2.205).toFixed(3)
    let kilo = (num / 2.205).toFixed(3)

    massEl.textContent=`${num} kilo = ${pound} pound | ${num} pound = ${kilo} kilo`

}