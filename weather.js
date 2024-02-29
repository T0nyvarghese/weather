async function getweather() {
    

    const cityName = search.value;
    console.log(cityName);


    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=be781045800379c15df32be0118f4e56`);
        const data = await response.json().then((data)=>{;
        
        result.innerHTML = `
        <div id="result" class="mt-3 text-center">
                    <h1 style="font-style:oblique; font-weight: bold;">weather in ${cityName}
                    <h1 class="temp">${parseInt(data.main.temp-273)}°C</h1>
                    <p style="font-weight: bold;">Temparature</p>
                <div class="other mt-3">
                    <div class="col">
                        <h3 class="humidity">${data.main.humidity}%</h3>
                        <p style="font-weight: bold;">Humidity</p>
                    </div>
                    <div class="col">
                        <h3 class="wind">${data.wind.speed}km/h</h3>
                        <p style="font-weight: bold;">Wind</p>
                    </div>
                </div>
            </div>

        `;
    })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

