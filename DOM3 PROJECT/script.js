async function data() {
    document.querySelector(".container2").classList.add('block')
    //alert("hello world")
    await fetch("https://api.ipgeolocation.io/ipgeo?apiKey=8c213e6f30934309bbac3c5a8692002e")
        .then(response => response.json())
        .then(dataJason => {
            console.log(dataJason)
            const latitude = dataJason.latitude;
            const longitude = dataJason.longitude;
            document.querySelector(".pin").innerHTML +=`

            <div class="lat format" >
            Lat:${latitude}
            </div>
            <div class="long format" >
              Long:${longitude}
            </div>
            <iframe src="https://maps.google.com/maps?q=${latitude}, ${longitude}&z=15&output=embed"  frameborder="0" style="border:0"></iframe>
            `

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${19.0797}&lon=${72.904}&appid=6c0221f51868cf926c137e992cf9ab6a`)
                .then(response2 => response2.json())
                .then(dataJason2 => {
                    console.log(dataJason2)
                    document.querySelector("#data").innerHTML += `
    <ul style="list-style-type: none"><br/>
    <li style="font-weight: bolder">Location:${dataJason2.name}</li><br/>
    <li style="font-weight: bolder">Lat:${dataJason2.coord.lat}</li><br/>
    <li style="font-weight: bolder">Long:${dataJason2.coord.lon}</li><br/>
    <li style="font-weight: bolder">Time zone:${dataJason2.timezone}</li><br/>
    <li style="font-weight: bolder">Wind Speed:${dataJason2.wind.speed}</li><br/>
    <li style="font-weight: bolder">Pressure:${dataJason2.main.pressure}</li><br/>
    <li style="font-weight: bolder">Humidity:${dataJason2.main.humidity}</li><br/>
    <li style="font-weight: bolder">Wind Direction:${dataJason2.wind.deg}</li><br/>
    <li style="font-weight: bolder">Feels Like:${dataJason2.weather[0].main}</li><br/>
    </ul>
    `



                })





        });

}
