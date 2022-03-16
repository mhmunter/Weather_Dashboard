// var userInput = document.getElementsByClassName('search');
// var userInputData = userInput.trim;
// var fetchButton = document.getElementById('subBut');
// var nameValue = document.getElementById('first_name');
var existDiv = document.getElementById("weather_days");




var apiCall = function(){
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=29.42&lon=-98.49&units=imperial&dt&exclude=hourly&appid=39397c2783cc72f286060624f17eae92")
            //Response resolves to a readable stream, 
            //so this statement helps us convert it into 
            //a static object
            .then(response => response.json()) 
            //Now that we have the data, let us see what it looks like in console
            .then(responseData => {
                // console.log(responseData);
                // Temp   console.log(responseData.daily[0].temp.day);
                // console.log(responseData.daily[0].wind_speed);
                // console.log(responseData.daily[0].humidity);
                // console.log(responseData.daily[0].uvi);
                // var base = responseData.daily[0]
                // console.log(base.uvi)

                // listItem.textContent = data[i].html_url;


                for (i = 0; i < 5; i++){
                    var base = responseData.daily[i]
                    var timestamp = base.dt
                    var date = new Date(timestamp*1000)
                    total = document.createElement('span') 
                    total.classList.add('dayToo');                
                    total.textContent =  date + '\nTemp: ' + base.temp.day + '\nWind: ' + base.wind_speed + '\nHumidity: ' + base.humidity + '\nUvi: ' + base.uvi 
                    // total.textContent = base.wind_speed
                    // total.textContent = base.humidity
                    // total.textContent = base.uvi
                    // total.textContent = date
                    // total.textContent = base.icon
                    existDiv.appendChild(total)
                    // existDiv.textContent = "</span>"
                    
                   
                }
              
                

            });
        }




        apiCall();


        // console.log(userInput)
    //   console.log(apiCall())

  
// console.log(nameValue)
// fetchButton.addEventListener('click', console.log(nameValue));

// console.log(apiCall2(nameValue))


