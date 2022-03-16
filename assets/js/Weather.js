
var apiCall = function(){
fetch("https://api.openweathermap.org/data/2.5/onecall?lat=29.42&lon=-98.49&units=imperial&dt&exclude=hourly&appid=39397c2783cc72f286060624f17eae92")
            //Response resolves to a readable stream, 
            //so this statement helps us convert it into 
            //a static object
            .then(response => response.json()) 
            //Now that we have the data, let us see what it looks like in console
            .then(responseData => {
                console.log(responseData);
                // Temp   console.log(responseData.daily[0].temp.day);
                // console.log(responseData.daily[0].wind_speed);
                // console.log(responseData.daily[0].humidity);
                // console.log(responseData.daily[0].uvi);
                // var base = responseData.daily[0]
                // console.log(base.uvi)
                for (i = 0; i < 5; i++){
                    var base = responseData.daily[i]
                    console.log(base.wind_speed)
                    console.log(base.humidity)
                    console.log(base.uvi)
                    console.log(base.temp.day)
                    var timestamp = base.dt
                    var date = new Date(timestamp*1000)
                    console.log(date)
                }
              


            });
        }

      console.log(apiCall())