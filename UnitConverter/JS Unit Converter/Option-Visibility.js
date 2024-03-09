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