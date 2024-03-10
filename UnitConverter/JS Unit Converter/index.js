
   /* let userInput ;
    let result; 
    let unitSelection ;
    let fromSelection ;
    let toSelection ;
    let testing2; 
    //const resultInput = document.getElementById('resultInput')
    //let inputFromResult;
    
    function historytable(){
        
        const list = document.querySelector('.ul-HistoryCl')
        list.append(Object.assign(document.createElement('li'), {textContent: 
        `${userInput} ${fromSelection} is ${convertUserInput(userInput)} ${toSelection}`
        }))
        
    }
    


    /**function onChangeReset(){
        document.getElementById("toListTemp").selectedIndex = 0
        document.getElementById("toListDistance").selectedIndex = 0
        document.getElementById("toListVolume").selectedIndex = 0
        document.querySelector('.result').innerHTML = "Result"
    }**/
  
    

    /**function submitKeyPress(){
        setVarUserInput()
        if (event.key === "Enter"){
            convertUserInput(userInput);
            historytable()
            console.log(userInput, result);
        }
    }**/
    // Input and Result reset to default values
    //function inputResultReset(){    
    //}

    /*function resetForm(){
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
    }*/

       

    /*function unitGroups(){
      if (unitSelection === "Tempurature"){
        document.getElementById("fromListTemp").classList.remove("d-none")
        document.getElementById("toListTemp").classList.remove("d-none")
        document.getElementById("fromPlaceHolder").classList.add("d-none")
        document.getElementById("toPlaceHolder").classList.add("d-none")
        if(fromSelection === "Fahrenheit"){
            document.getElementById('tofahrenheit').classList.add('d-none')
            document.getElementById('tocelsius').classList.remove('d-none')
        }
        else if (fromSelection ==="Celsius"){
            document.getElementById('tocelsius').classList.add('d-none')
            document.getElementById('tofahrenheit').classList.remove('d-none')
        }
      }
      else if (unitSelection === "Distance"){
        document.getElementById("fromListDistance").classList.remove("d-none")
        document.getElementById("toListDistance").classList.remove("d-none")
        document.getElementById("fromPlaceHolder").classList.add("d-none")
        document.getElementById("toPlaceHolder").classList.add("d-none") 
        if (fromSelection === "Feet"){
            //hide feet
            document.getElementById("tofeet").classList.add("d-none")
            //unhide meters,centimeters,inch
            document.getElementById("tometers").classList.remove("d-none")
            document.getElementById("tocentimeters").classList.remove("d-none")
            document.getElementById("toinch").classList.remove("d-none")
        }
        else if (fromSelection === "Inch"){
            //hide inch
            document.getElementById("toinch").classList.add("d-none")
            //unhide feet,centimeters,meters
            document.getElementById("tometers").classList.remove("d-none")
            document.getElementById("tofeet").classList.remove("d-none")
            document.getElementById("tocentimeters").classList.remove("d-none")
        }
        else if (fromSelection === "Meters"){
            document.getElementById("tometers").classList.add("d-none")
            document.getElementById("tofeet").classList.remove("d-none")
            document.getElementById("tocentimeters").classList.remove("d-none")
        }
        else if (fromSelection === "Centimeters"){
            document.getElementById("tometers").classList.remove("d-none")
            document.getElementById("tofeet").classList.remove("d-none")
            document.getElementById("tocentimeters").classList.add("d-none")
        }
      }
      else if (unitSelection === "Volume"){
        document.getElementById("fromListVolume").classList.remove("d-none")
        document.getElementById("toListVolume").classList.remove("d-none")
        document.getElementById("fromPlaceHolder").classList.add("d-none")
        document.getElementById("toPlaceHolder").classList.add("d-none")
        if (fromSelection === "Gallons"){
            document.getElementById("togallons").classList.add("d-none")
            document.getElementById("toliters").classList.remove("d-none")
        }
        else if (fromSelection === "Liters"){
            document.getElementById("toliters").classList.add("d-none")
            document.getElementById("togallons").classList.remove("d-none")
        }
    
    
        }
    }
    function inputResults (){
        resultInput.value = convertUserInput(userInput)


    }*/

    
    function convertUserInput(userInputVar){
        //Tempurature
        const tempFahrenheitToCelsius = Math.round((((userInputVar - 32) * 5/9) + Number.EPSILON)*100)/100;
        const tempCelsiusToFahrenheit = (userInputVar * 9/5) + 32;
        //Distance
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
        
        
        //Volume
        const volGallonsToLiters = Math.round(((userInputVar * 3.785) + Number.EPSILON)*100)/100;
        const volLiterstoGallons = Math.round(((userInputVar / 3.785)+ Number.EPSILON)*100)/100;
        



       /*  if(unitSelection === "Tempurature"){
            if(fromSelection === "Fahrenheit" && toSelection === "Celsius"){
                document.querySelector('.result').innerHTML = tempFahrenheitToCelsius
                return tempFahrenheitToCelsius;}
            else if (fromSelection === "Celsius" && toSelection === "Fahrenheit"){
                document.querySelector(".result").innerHTML = tempCelsiusToFahrenheit;
                return tempCelsiusToFahrenheit}}

        else if(unitSelection === "Distance"){
            if(fromSelection === "Feet" && toSelection === "Meters"){
                document.querySelector('.result').innerHTML = distFeetToMeters;
                return distFeetToMeters;}
            else if (fromSelection === "Feet" && toSelection === "Centimeters"){
                document.querySelector('.result').innerHTML = distFeetToCentimeters;
                return distFeetToCentimeters;}
            else if(fromSelection === "Feet" && toSelection === "Inch"){
                document.querySelector('.result').innerHTML = distFeetToInch;
                return distFeetToInch;}
            else if(fromSelection === "Meters" && toSelection === "Feet"){
                    document.querySelector('.result').innerHTML = distMeterToFeet;
                    return distMeterToFeet;}
            else if (fromSelection ==="Meters" && toSelection === "Inch"){
                    document.querySelector('.result').innerHTML = distMeterToInch;
                    return distMeterToInch;}
            else if (fromSelection === "Meters" && toSelection === "Centimeters"){
                    document.querySelector('.result').innerHTML = distMeterToCentimeter;
                    return distMeterToCentimeter;}
            else if (fromSelection === "Centimeters" && toSelection ==="Meters"){
                    document.querySelector('.result').innerHTML = distCentimeterToMeter;
                    return distCentimeterToMeter;}
            else if (fromSelection === "Centimeters" && toSelection ==="Feet"){
                    document.querySelector('.result').innerHTML = distCentimeterToFeet;
                    return distCentimeterToFeet;}
            else if (fromSelection === "Centimeters" && toSelection === "Inch"){
                    document.querySelector('.result').innerHTML = distCentimeterToInch;
                    return distCentimeterToInch;}
            else if (fromSelection === "Inch" && toSelection ==="Feet"){
                        document.querySelector('.result').innerHTML = distInchToFeet;
                        return distInchToFeet;}
            else if (fromSelection === "Inch" && toSelection ==="Meters"){
                        document.querySelector('.result').innerHTML = distInchToMeter;
                        return distInchToMeter;}
            else if (fromSelection === "Inch" && toSelection === "Centimeters"){
                        document.querySelector('.result').innerHTML = distInchToCentimeter;
                        return distInchToCentimeter;}
            }
        
        
        
        
        else if(unitSelection === "Volume"){
            if(fromSelection === "Gallons"){
                document.querySelector('.result').innerHTML = volGallonsToLiters;
                return volGallonsToLiters;}
            else if(fromSelection === "Liters"){
                    document.querySelector('.result').innerHTML = volLiterstoGallons;
                    return volLiterstoGallons;} 
        } */   
    
    }

  
    

    
   

