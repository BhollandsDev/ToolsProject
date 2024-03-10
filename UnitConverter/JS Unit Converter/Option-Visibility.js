
function unitSelectionVisibility(){

    if(unitSelection === 1){
      //Tempurature
      document.getElementById("fromListTemp").classList.remove("d-none");
      document.getElementById("toListTemp").classList.remove("d-none");
      document.getElementById("fromPlaceHolder").classList.add("d-none");
      document.getElementById("toPlaceHolder").classList.add("d-none");
    }
    else if (unitSelection === 2){
      //Distance
      document.getElementById("fromListDistance").classList.remove("d-none");
      document.getElementById("toListDistance").classList.remove("d-none");
      document.getElementById("fromPlaceHolder").classList.add("d-none");
      document.getElementById("toPlaceHolder").classList.add("d-none");
    }
    else if (unitSelection === 3){
      //Volume
      document.getElementById("fromListVolume").classList.remove("d-none");
      document.getElementById("toListVolume").classList.remove("d-none");
      document.getElementById("fromPlaceHolder").classList.add("d-none");
      document.getElementById("toPlaceHolder").classList.add("d-none");
    }
} 

function toSelectionVisibility(){
    document.getElementById('userInput').value = ''
    resultInput.value = ''
    //Tempurature
    if(fromSelection === 'Fahrenheit'){
      if(toSelection === 'Fahrenheit'){document.getElementById('toListTemp').selectedIndex = 0}
      document.getElementById('tofahrenheit').classList.add('d-none')
      document.getElementById('tocelsius').classList.remove('d-none')
      document.getElementById('tokelvin').classList.remove('d-none')
    }
    else if(fromSelection === 'Celsius'){
      if(toSelection === 'Celsius'){document.getElementById('toListTemp').selectedIndex = 0}
      document.getElementById('tocelsius').classList.add('d-none')
      document.getElementById('tofahrenheit').classList.remove('d-none')
      document.getElementById('tokelvin').classList.remove('d-none')
    }
    else if(fromSelection === 'Kelvin'){
			if(toSelection === 'Kelvin'){document.getElementById('toListTemp').selectedIndex = 0}
				document.getElementById('tokelvin').classList.add('d-none') 
				document.getElementById('tocelsius').classList.remove('d-none')
        document.getElementById('tofahrenheit').classList.remove('d-none')
        
    }
    //Distance
    else if (fromSelection === "Inch"){
      if(toSelection === 'Inch'){
        document.getElementById('toListDistance').selectedIndex = 0}
      document.getElementById("toinch").classList.add("d-none")
      document.getElementById("tometers").classList.remove("d-none")
      document.getElementById("tofeet").classList.remove("d-none")
      document.getElementById("tocentimeters").classList.remove("d-none")
    }
    else if (fromSelection === "Feet"){
      if(toSelection === 'Feet'){
        document.getElementById('toListDistance').selectedIndex = 0}
      document.getElementById("tofeet").classList.add("d-none")
      document.getElementById("tometers").classList.remove("d-none")
      document.getElementById("tocentimeters").classList.remove("d-none")
      document.getElementById("toinch").classList.remove("d-none")
    }
    else if (fromSelection === "Meters"){
      if(toSelection === 'Meters'){
        document.getElementById('toListDistance').selectedIndex = 0}
      document.getElementById("tometers").classList.add("d-none")
      document.getElementById("tofeet").classList.remove("d-none")
      document.getElementById("toinch").classList.remove("d-none")
      document.getElementById("tocentimeters").classList.remove("d-none")
    }
    else if (fromSelection === "Centimeters"){
      if(toSelection === 'Centimeters'){
        document.getElementById('toListDistance').selectedIndex = 0}
      document.getElementById("tocentimeters").classList.add("d-none")
      document.getElementById("tometers").classList.remove("d-none")
      document.getElementById("tofeet").classList.remove("d-none")
      document.getElementById("toinch").classList.remove("d-none")
    }
    // Volume
    else if (fromSelection === "Gallons"){
      if(toSelection === 'Gallons'){
        document.getElementById('toListVolume').selectedIndex = 0}
      document.getElementById("togallons").classList.add("d-none")
      document.getElementById("toliters").classList.remove("d-none")
    }
    else if (fromSelection === "Liters"){
      if(toSelection === 'Liters'){
        document.getElementById('toListVolume').selectedIndex = 0}
      document.getElementById("toliters").classList.add("d-none")
      document.getElementById("togallons").classList.remove("d-none")
    }
}

function fromSelectionVisibility(){
    document.getElementById('userInput').value = ''
    resultInput.value = ''
    //Tempurature
  if(toSelection === 'Fahrenheit'){
    if(fromSelection === 'Fahrenheit'){document.getElementById('toListTemp').selectedIndex = 0}
    document.getElementById('fromfahrenheit').classList.add('d-none')
    document.getElementById('fromcelsius').classList.remove('d-none')
    document.getElementById('fromkelvin').classList.remove('d-none')
  }
  else if(toSelection === 'Celsius'){
    if(fromSelection === 'Celsius'){document.getElementById('toListTemp').selectedIndex = 0}
    document.getElementById('fromcelsius').classList.add('d-none')
    document.getElementById('fromfahrenheit').classList.remove('d-none')
    document.getElementById('fromkelvin').classList.remove('d-none')
  }
  else if(toSelection === 'Kelvin'){
    if(fromSelection === 'Kelvin'){document.getElementById('toListTemp').selectedIndex = 0}
      document.getElementById('fromkelvin').classList.add('d-none') 
      document.getElementById('fromcelsius').classList.remove('d-none')
      document.getElementById('fromfahrenheit').classList.remove('d-none') 
  }
  //Distance
  else if (toSelection === "Inch"){
    if(fromSelection === 'Inch'){
      document.getElementById('fromListDistance').selectedIndex = 0}
    document.getElementById("frominch").classList.add("d-none")
    document.getElementById("frommeters").classList.remove("d-none")
    document.getElementById("fromfeet").classList.remove("d-none")
    document.getElementById("fromcentimeters").classList.remove("d-none")
  }
  else if (toSelection === "Feet"){
    if(fromSelection === 'Feet'){
      document.getElementById('fromListDistance').selectedIndex = 0}
    document.getElementById("fromfeet").classList.add("d-none")
    document.getElementById("frommeters").classList.remove("d-none")
    document.getElementById("fromcentimeters").classList.remove("d-none")
    document.getElementById("frominch").classList.remove("d-none")
  }
  else if (toSelection === "Meters"){
    if(fromSelection === 'Meters'){
      document.getElementById('fromListDistance').selectedIndex = 0}
    document.getElementById("frommeters").classList.add("d-none")
    document.getElementById("fromfeet").classList.remove("d-none")
    document.getElementById("frominch").classList.remove("d-none")
    document.getElementById("fromcentimeters").classList.remove("d-none")
  }
  else if (toSelection === "Centimeters"){
    if(fromSelection === 'Centimeters'){
      document.getElementById('fromListDistance').selectedIndex = 0}
    document.getElementById("fromcentimeters").classList.add("d-none")
    document.getElementById("frommeters").classList.remove("d-none")
    document.getElementById("fromfeet").classList.remove("d-none")
    document.getElementById("frominch").classList.remove("d-none")
  }
  // Volume
  else if (toSelection === "Gallons"){
    if(fromSelection === 'Gallons'){
      document.getElementById('fromListVolume').selectedIndex = 0}
    document.getElementById("fromgallons").classList.add("d-none")
    document.getElementById("fromliters").classList.remove("d-none")
  }
  else if (toSelection === "Liters"){
    if(fromSelection === 'Liters'){
      document.getElementById('fromListVolume').selectedIndex = 0}
    document.getElementById("fromliters").classList.add("d-none")
    document.getElementById("fromgallons").classList.remove("d-none")
  }
}

function resetForm(){
  //reset variables
  fromSelection = undefined
  toSelection = undefined
  result = undefined
  //input reset
  document.querySelector('.userInput').value = ""
  document.querySelector('.result').innerHTML = 'Result'
  resultInput.value = ""
  //reset selected index
  document.getElementById("fromListTemp").selectedIndex = 0
  document.getElementById("toListTemp").selectedIndex = 0
  document.getElementById("fromListDistance").selectedIndex = 0
  document.getElementById("toListDistance").selectedIndex = 0
  document.getElementById("fromListVolume").selectedIndex = 0
  document.getElementById("toListVolume").selectedIndex = 0
  //reset to unhide placeholder visibility
  document.getElementById("toPlaceHolder").classList.remove("d-none")
  document.getElementById("fromPlaceHolder").classList.remove("d-none")
  //reset to hide visibility
  document.getElementById("fromListDistance").classList.add("d-none")
  document.getElementById("toListDistance").classList.add("d-none")
  document.getElementById("fromListTemp").classList.add("d-none")
  document.getElementById("toListTemp").classList.add("d-none")
  document.getElementById("fromListVolume").classList.add("d-none")
  document.getElementById("toListVolume").classList.add("d-none")
}

function resetSelectionVisibility(){
  //input reset
  document.querySelector('.userInput').value = ""
  document.querySelector('.result').innerHTML = 'Result'
  resultInput.value = ""
  //reset selected index
  document.getElementById("fromListTemp").selectedIndex = 0
  document.getElementById("toListTemp").selectedIndex = 0
  document.getElementById("fromListDistance").selectedIndex = 0
  document.getElementById("toListDistance").selectedIndex = 0
  document.getElementById("fromListVolume").selectedIndex = 0
  document.getElementById("toListVolume").selectedIndex = 0
  //reset to unhide visibility
  //tempurature
  document.getElementById("fromfahrenheit").classList.remove("d-none")
  document.getElementById("fromcelsius").classList.remove("d-none")
  document.getElementById("fromkelvin").classList.remove("d-none")
  //distance
  document.getElementById("frominch").classList.remove("d-none")
  document.getElementById("fromfeet").classList.remove("d-none")
  document.getElementById("frommeters").classList.remove("d-none")
  document.getElementById("fromcentimeters").classList.remove("d-none")
  //volume
  document.getElementById("fromgallons").classList.remove("d-none")
  document.getElementById("fromliters").classList.remove("d-none")
  //tempurature
  document.getElementById("tofahrenheit").classList.remove("d-none")
  document.getElementById("tocelsius").classList.remove("d-none")
  document.getElementById("tokelvin").classList.remove("d-none")
  //distance
  document.getElementById("toinch").classList.remove("d-none")
  document.getElementById("tofeet").classList.remove("d-none")
  document.getElementById("tometers").classList.remove("d-none")
  document.getElementById("tocentimeters").classList.remove("d-none")
  //volume
  document.getElementById("togallons").classList.remove("d-none")
  document.getElementById("toliters").classList.remove("d-none")


}