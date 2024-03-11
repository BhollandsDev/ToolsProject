
const resultInput = document.getElementById('resultInput')
const userInputDetect = document.getElementById('userInput').addEventListener('keyup', () => {})
let userInput ;
let result; 
let unitSelection ;
let fromSelection ;
let toSelection ;


function functionSelection(unitSelectionSet,fromSelectionSet,toSelectionSet,userInputSet){
  if(unitSelectionSet === 1){
    tempConversion(fromSelectionSet, toSelectionSet,userInputSet)
  }
  else if (unitSelectionSet === 2){
    distConversion(fromSelectionSet, toSelectionSet, userInputSet)
  }
  else if (unitSelectionSet === 3){
    volConversion(fromSelectionSet, toSelectionSet, userInputSet)
  }
}





function tempConversion(fromSelectionSet, toSelectionSet, userInputVar){
  const tempFahrenheitToCelsius = Math.round((((userInputVar - 32) * 5/9) + Number.EPSILON)*100)/100;
  const tempCelsiusToFahrenheit = (userInputVar * 9/5) + 32;
  const tempFahrenheitToKelvin = Math.round(tempFahrenheitToCelsius + 273.15);
  const tempCelsiusToKelvin = Math.round(userInputVar + 273.15)
  
    if(fromSelectionSet === 'Fahrenheit'){
      onkeyup = () => {fromFahrenheitConvert(toSelectionSet)}
      }
    else if (fromSelectionSet === 'Celsius'){
      onkeyup = () => {fromCelsiusConvert(toSelectionSet)}}
    else if (fromSelectionSet === 'Kelvin'){
      onkeyup = () => {fromKelvinConvert(toSelectionSet)}}


  function fromFahrenheitConvert(toSelectionSet){
    
      if (toSelectionSet === "Celsius"){
    
     resultInput.value =+ tempFahrenheitToCelsius
        }
        else if (toSelectionSet === "Kelvin"){
          resultInput.value =+ tempFahrenheitToKelvin;
        }
      }
      function fromCelsiusConvert(toSelectionSet){
        if (toSelectionSet === "Fahrenheit"){
          resultInput.value =+ tempCelsiusToFahrenheit;}
        else if (toSelectionSet === "Kelvin"){
          resultInput.value =+ tempCelsiusToKelvin;}
      }
      function fromKelvinConvert(toSelectionSet){
        if (toSelectionSet === "Fahrenheit"){
          resultInput.value =+ tempFahrenheitToKelvin;}
        else if (toSelectionSet === 'Celsius'){
          resultInput.value =+ tempCelsiusToKelvin;}}
  }
  
  



function distConversion(fromSelectionSet, toSelectionSet, userInputVar){
  const distFeetToInch = Math.round(userInputVar * 12);
  const distFeetToMeters = Math.round(((userInputVar / 3.281) + Number.EPSILON)*100) / 100;
  const distFeetToCentimeters = Math.round(userInputVar * 30.48);
  const distMeterToInch = Math.round(userInputVar * 39.37);
  const distMeterToFeet = Math.round(((userInputVar * 3.281) + Number.EPSILON)*100)/100;
  const distMeterToCentimeter = Math.round(userInputVar * 100);
  const distCentimeterToFeet = Math.round(((userInputVar / 30.48) + Number.EPSILON)*100) / 100;
  const distCentimeterToInch = Math.round(((userInputVar / 2.54)+ Number.EPSILON)*100)/100;
  const distCentimeterToMeter = Math.round(((userInputVar / 100) + Number.EPSILON)*100)/100;
  const distInchToFeet = Math.round(((userInputVar / 12) + Number.EPSILON)*100)/100;
  const distInchToMeter = Math.round(((userInputVar / 39.37)+ Number.EPSILON)*100)/100;
  const distInchToCentimeter = userInputVar * 2.54;

  if(fromSelectionSet === 'Inch'){
    onkeyup = () => {fromInchConvert(toSelectionSet)}}
  else if (fromSelectionSet === 'Feet'){
    onkeyup = () => {fromFeetConvert(toSelectionSet)}}
  else if (fromSelectionSet === 'Meters'){
    onkeyup = () => {fromMetersConvert(toSelectionSet)}}
  else if (fromSelectionSet === 'Centimeters'){
    onkeyup = () => {fromCentimetersConvert(toSelectionSet)}}


  function fromInchConvert(toSelectionSet){
    if (toSelectionSet === "Feet"){
      resultInput.value =+ distInchToFeet;}
    else if (toSelectionSet === "Meters"){
      resultInput.value =+ distInchToMeter;}
    else if (toSelectionSet === "Centimeters"){
      resultInput.value =+ distInchToCentimeter;}
  }
  function fromFeetConvert(toSelectionSet){
    if (toSelectionSet === "Inch"){
      resultInput.value =+ distFeetToInch;}
    else if (toSelectionSet === "Meters"){
      resultInput.value =+ distFeetToMeters;}
    else if (toSelectionSet === "Centimeters"){
      resultInput.value =+ distFeetToCentimeters;}
  }
  function fromMetersConvert(toSelectionSet){
    if (toSelectionSet === "Feet"){
      resultInput.value =+ distMeterToFeet;}
    else if (toSelectionSet === "Inch"){
      resultInput.value =+ distMeterToInch;}
    else if (toSelectionSet === "Centimeters"){
      resultInput.value =+ distMeterToCentimeter;}
  }
  function fromCentimetersConvert(toSelectionSet){
    if (toSelectionSet === "Feet"){
      resultInput.value =+ distCentimeterToFeet;}
    else if (toSelectionSet === "Meters"){
      resultInput.value =+ distCentimeterToMeter;}
    else if (toSelectionSet === "Inch"){
      resultInput.value =+ distCentimeterToInch;}

  }
}

function volConversion(fromSelectionSet, toSelectionSet, userInputVar){
  const volGallonsToLiters = Math.round(((userInputVar * 3.785) + Number.EPSILON)*100)/100;
  const volLiterstoGallons = Math.round(((userInputVar / 3.785)+ Number.EPSILON)*100)/100;

  if(fromSelectionSet === 'Gallons'){
    onkeyup = () => {fromGallonsConvert(toSelectionSet)}
    }
  else if (fromSelectionSet === 'Liters'){
    onkeyup = () => {fromLitersConvert(toSelectionSet)}}
  
function fromGallonsConvert(toSelectionSet){
  if(toSelectionSet === "Liters"){
    resultInput.value =+ volGallonsToLiters;
  }}
function fromLitersConvert(toSelectionSet){
  if (toSelectionSet === "Gallons")
    resultInput.value =+ volLiterstoGallons;
  }
}




