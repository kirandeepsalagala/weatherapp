let weatherContainerEl = document.getElementById("weatherContainer");

let getButtonEl = document.getElementById("getButton");

let clearButtonEl = document.getElementById("clearButton");

let searchInputEl = document.getElementById("searchInput");

let nameErrEl = document.getElementById("nameErr");

let mainTempEl = document.getElementById("mainTemp");

let cloudyIconEl = document.getElementById("cloudyIcon");

let rainCloudEl = document.getElementById("rainCloud");

let sunIconEl = document.getElementById("sunIcon");

let thunderIconEl = document.getElementById("thunderIcon");

let drizzleIconEl = document.getElementById("drizzleIcon");

let snowIconEl = document.getElementById("snowIcon");

let mistIconEl = document.getElementById("mistIcon");

let windIconEl = document.getElementById("windIcon");



let smallCloudEl = document.getElementById("smallCloud");

let smallSunnyEl = document.getElementById("smallSun");

let smallRainEl = document.getElementById("smallRain");

let smallThunderEl = document.getElementById("smallThunder");

let smallDrizzleEl = document.getElementById("smallDrizzle");

let smallSnowEl = document.getElementById("smallSnow");

let smallMistEl = document.getElementById("smallMist");

let smallHazeEl = document.getElementById("smallHaze");




// let cloudContainerSmallEl = document.getElementById("cloudContainerSmall");

// let sunContainerSmallEl = document.getElementById("sunContainerSmall");




let mainCardColorChangeEl = document.getElementById("mainCardColorChange");

let mainCityNameEl = document.getElementById("mainCityName");

let smallContainerColorEl = document.getElementById("smallContainerColor");

let smallContainerColorEl2 = document.getElementById("smallContainerColor2");

let smallContainerColorEl3 = document.getElementById("smallContainerColor3");

let smallContainerColorEl4 = document.getElementById("smallContainerColor4");

let smallContainerColorEl5 = document.getElementById("smallContainerColor5");

let smallContainerColorEl6 = document.getElementById("smallContainerColor6");




let totalContainerEl = document.getElementById("totalContainer");



let feelsLikeValueEl = document.getElementById("feelsLikeValue");

let windSpeedValueEl = document.getElementById("windSpeedValue");

let humidityValueEl = document.getElementById("humidityValue");

let visibilityValueEl = document.getElementById("visibilityValue");

let airPreValueEl = document.getElementById("airPreValue");

let counteryValueEl = document.getElementById("counteryValue");

let currentConditionEl = document.getElementById("currentCondition");

let tomorrowValueEl = document.getElementById("tomorrowValue");




let feelsLikeTextEl = document.getElementById("feelsLikeText");

let windTextEl = document.getElementById("windText");

let humidityTextEl = document.getElementById("humidityText");

let visibilityTextEl = document.getElementById("visibilityText");

let airPreTextEl = document.getElementById("airPreText");

let countryTextEl = document.getElementById("countryText");


let nowConditionEl = document.getElementById("nowCondition");




function getWeatherDetails(weather, locationId) {

    // console.log(weather);

    let resultConatainer = document.createElement("div");
    weatherContainerEl.appendChild(resultConatainer);

    currentConditionEl.textContent = weather.weather[0].description;

    feelsLikeValueEl.textContent = weather.main.feels_like + "°";

    windSpeedValueEl.textContent = weather.wind.speed + "kmph";

    humidityValueEl.textContent = weather.main.humidity + "%";

    visibilityValueEl.textContent = weather.visibility + "Mts";

    airPreValueEl.textContent = weather.main.pressure + "mb";

    counteryValueEl.textContent = weather.sys.country;


    mainTempEl.textContent = Math.round(weather.main.temp) + "°";

    mainCityNameEl.textContent = weather.name;
    mainCityNameEl.style.color = "white";



   

    // clearButtonEl.onclick = function() {
    //     weatherContainerEl.removeChild(resultConatainer);
    //     // weatherContainerEl.classList.remove("d-none");
    //     // totalContainerEl.classList.add("d-none");

    // };


    if (weather.weather[0].main === "Clear") {
        sunIconEl.classList.remove("d-none");
        cloudyIconEl.classList.add("d-none");
        rainCloudEl.classList.add("d-none");
        thunderIconEl.classList.add("d-none");
        drizzleIconEl.classList.add("d-none");
        snowIconEl.classList.add("d-none");
        mistIconEl.classList.add("d-none");
        windIconEl.classList.add("d-none");

        smallSunnyEl.classList.add("icons-size");
        nowConditionEl.textContent = Math.round(weather.main.temp) + "°";
        smallSunnyEl.classList.remove("d-none");
        smallCloudEl.classList.add("d-none");
        smallRainEl.classList.add("d-none");
        smallThunderEl.classList.add("d-none");
        smallDrizzleEl.classList.add("d-none");
        smallSnowEl.classList.add("d-none");
        smallHazeEl.classList.add("d-none");
        smallMistEl.classList.add("d-none");


        mainCardColorChangeEl.style.backgroundColor = "rgba(34,27,219,0.5)";
        smallContainerColorEl.style.backgroundColor = "rgba(34,27,219,0.4)";
        smallContainerColorEl2.style.backgroundColor = "rgba(34,27,219,0.4)";
        smallContainerColorEl2.style.backgroundColor = "rgba(34,27,219,0.4)";
        smallContainerColorEl3.style.backgroundColor = "rgba(34,27,219,0.4)";
        smallContainerColorEl4.style.backgroundColor = "rgba(34,27,219,0.4)";
        smallContainerColorEl5.style.backgroundColor = "rgba(34,27,219,0.4)";
        smallContainerColorEl6.style.backgroundColor = "rgba(34,27,219,0.4)";

        mainCityNameEl.style.color = "black";
        mainTempEl.style.color = "black";


        feelsLikeTextEl.style.color = "black";
        windTextEl.style.color = "black";
        humidityTextEl.style.color = "black";
        visibilityTextEl.style.color = "black";
        airPreTextEl.style.color = "black";
        countryTextEl.style.color = "black";

        feelsLikeValueEl.style.color = "black";
        windSpeedValueEl.style.color = "black";
        humidityValueEl.style.color = "black";
        visibilityValueEl.style.color = "black";
        airPreValueEl.style.color = "black";
        counteryValueEl.style.color = "black";
        currentConditionEl.style.color = "black";

        cloudyIconEl.classList.add("d-none");
        // weatherContainerEl.style.backgroundImage = "url('https://res.cloudinary.com/dkzl2tjrp/image/upload/v1691480760/IMG_7147_o7iaxh.png')";
        weatherContainerEl.style.backgroundImage = "url('weather-pics/sun-bg.jpeg')";
        // weatherContainerEl.style.backgroundSize = "cover";
        // weatherContainerEl.classList.add("bg-image-sunny");
    }
    if (weather.weather[0].main === "Clouds") {
        // weather.weather[0].main === "Clouds";
        cloudyIconEl.classList.remove("d-none");
        rainCloudEl.classList.add("d-none");
        sunIconEl.classList.add("d-none");
        thunderIconEl.classList.add("d-none");
        drizzleIconEl.classList.add("d-none");
        snowIconEl.classList.add("d-none");
        mistIconEl.classList.add("d-none");
        windIconEl.classList.add("d-none");


        smallCloudEl.classList.add("icons-size");
        nowConditionEl.textContent = Math.round(weather.main.temp) + "°";
        smallSunnyEl.classList.add("d-none");
        smallCloudEl.classList.remove("d-none");
        smallRainEl.classList.add("d-none");
        smallThunderEl.classList.add("d-none");
        smallDrizzleEl.classList.add("d-none");
        smallSnowEl.classList.add("d-none");
        smallHazeEl.classList.add("d-none");
        smallMistEl.classList.add("d-none");



        smallContainerColorEl.style.backgroundColor = "rgba(144, 144, 172, 0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(144, 144, 172,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(144, 144, 172,0.5)";
        smallContainerColorEl3.style.backgroundColor = "rgba(144, 144, 172,0.5)";
        smallContainerColorEl4.style.backgroundColor = "rgba(144, 144, 172,0.5)";
        smallContainerColorEl5.style.backgroundColor = "rgba(144, 144, 172,0.5)";
        smallContainerColorEl6.style.backgroundColor = "rgba(144, 144, 172,0.5)";

        mainCityNameEl.style.color = "#484A82";
        mainTempEl.style.color = "#484A82";


        feelsLikeTextEl.style.color = "#484A82";
        windTextEl.style.color = "#484A82";
        humidityTextEl.style.color = "#484A82";
        visibilityTextEl.style.color = "#484A82";
        airPreTextEl.style.color = "#484A82";
        countryTextEl.style.color = "#484A82";

        feelsLikeValueEl.style.color = "#484A82";
        windSpeedValueEl.style.color = "#484A82";
        humidityValueEl.style.color = "#484A82";
        visibilityValueEl.style.color = "#484A82";
        airPreValueEl.style.color = "#484A82";
        counteryValueEl.style.color = "#484A82";
        currentConditionEl.style.color = "#484A82";

        sunIconEl.classList.add("d-none");
        // mainCardColorChangeEl.style.backgroundImage = "url('weather-pics/pexels-kindel-media-9011099\ \(1080p\).gif')";
        mainCardColorChangeEl.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
        // weatherContainerEl.style.backgroundImage = "url('https://res.cloudinary.com/dkzl2tjrp/image/upload/v1691489135/IMG_7143_tibwam.png')";
        // weatherContainerEl.style.backgroundImage = "url('weather-pics/pexels-kindel-media-9011099\ \(1080p\).gif')"
        weatherContainerEl.style.backgroundImage = "url('weather-pics/cloudy-bg.jpg')";
        weatherContainerEl.style.backgroundSize = "cover";
    }

    if (weather.weather[0].main === "Rain") {


        rainCloudEl.classList.remove("d-none");
        cloudyIconEl.classList.add("d-none");
        sunIconEl.classList.add("d-none");
        thunderIconEl.classList.add("d-none");
        drizzleIconEl.classList.add("d-none");
        snowIconEl.classList.add("d-none");
        mistIconEl.classList.add("d-none");
        windIconEl.classList.add("d-none");


        smallSunnyEl.classList.add("icons-size");
        nowConditionEl.textContent = Math.round(weather.main.temp) + "°";
        smallSunnyEl.classList.add("d-none");
        smallCloudEl.classList.add("d-none");
        smallRainEl.classList.remove("d-none");
        smallThunderEl.classList.add("d-none");
        smallDrizzleEl.classList.add("d-none");
        smallSnowEl.classList.add("d-none");
        smallHazeEl.classList.add("d-none");
        smallMistEl.classList.add("d-none");



        mainCityNameEl.style.color = "white";
        mainTempEl.style.color = "white";

        feelsLikeTextEl.style.color = "white";
        windTextEl.style.color = "white";
        humidityTextEl.style.color = "white";
        visibilityTextEl.style.color = "white";
        airPreTextEl.style.color = "white";
        countryTextEl.style.color = "white";

        feelsLikeValueEl.style.color = "white";
        windSpeedValueEl.style.color = "white";
        humidityValueEl.style.color = "white";
        visibilityValueEl.style.color = "white";
        airPreValueEl.style.color = "white";
        counteryValueEl.style.color = "white";
        currentConditionEl.style.color = "white";




        smallContainerColorEl.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl3.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl4.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl5.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl6.style.backgroundColor = "rgba(54,83,89,0.5)";


        sunIconEl.classList.add("d-none");
        // mainCardColorChangeEl.style.backgroundColor = "rgba(54,83,89,255, 0.3)";
        mainCardColorChangeEl.style.backgroundColor = "rgba(54, 83, 89, 0.8)";
        // weatherContainerEl.style.backgroundImage = "url('https://res.cloudinary.com/dkzl2tjrp/image/upload/v1691493466/beautiful-illustrations-design-inspiration-23_1_pc1nf2.png')";
        weatherContainerEl.style.backgroundImage = "url('weather-pics/rain-bg.jpg')";
        weatherContainerEl.style.backgroundSize = "cover";
    }


    if (weather.weather[0].main === "Thunderstorm") {


        rainCloudEl.classList.add("d-none");
        cloudyIconEl.classList.add("d-none");
        sunIconEl.classList.add("d-none");
        thunderIconEl.classList.remove("d-none");
        drizzleIconEl.classList.add("d-none");
        snowIconEl.classList.add("d-none");
        mistIconEl.classList.add("d-none");
        windIconEl.classList.add("d-none");


        smallSunnyEl.classList.add("icons-size");
        nowConditionEl.textContent = Math.round(weather.main.temp) + "°";
        smallSunnyEl.classList.add("d-none");
        smallCloudEl.classList.add("d-none");
        smallRainEl.classList.add("d-none");
        smallThunderEl.classList.remove("d-none");
        smallDrizzleEl.classList.add("d-none");
        smallSnowEl.classList.add("d-none");
        smallHazeEl.classList.add("d-none");
        smallMistEl.classList.add("d-none");



        mainCityNameEl.style.color = "white";
        mainTempEl.style.color = "white";

        feelsLikeTextEl.style.color = "white";
        windTextEl.style.color = "white";
        humidityTextEl.style.color = "white";
        visibilityTextEl.style.color = "white";
        airPreTextEl.style.color = "white";
        countryTextEl.style.color = "white";

        feelsLikeValueEl.style.color = "white";
        windSpeedValueEl.style.color = "white";
        humidityValueEl.style.color = "white";
        visibilityValueEl.style.color = "white";
        airPreValueEl.style.color = "white";
        counteryValueEl.style.color = "white";
        currentConditionEl.style.color = "white";


        smallContainerColorEl.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl3.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl4.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl5.style.backgroundColor = "rgba(54,83,89,0.5)";
        smallContainerColorEl6.style.backgroundColor = "rgba(54,83,89,0.5)";


        sunIconEl.classList.add("d-none");
        // mainCardColorChangeEl.style.backgroundColor = "rgba(54,83,89,255, 0.3)";
        mainCardColorChangeEl.style.backgroundColor = "rgba(54, 83, 89, 0.8)";
        // weatherContainerEl.style.backgroundImage = "url('https://res.cloudinary.com/dkzl2tjrp/image/upload/v1691493466/beautiful-illustrations-design-inspiration-23_1_pc1nf2.png')";
        weatherContainerEl.style.backgroundImage = "url('weather-pics/thunder-bg.jpg')";
        weatherContainerEl.style.backgroundSize = "cover";
    }    



    if (weather.weather[0].main === "Drizzle") {


        rainCloudEl.classList.add("d-none");
        cloudyIconEl.classList.add("d-none");
        sunIconEl.classList.add("d-none");
        thunderIconEl.classList.add("d-none");
        drizzleIconEl.classList.remove("d-none");
        snowIconEl.classList.add("d-none");
        mistIconEl.classList.add("d-none");
        windIconEl.classList.add("d-none");


        smallSunnyEl.classList.add("icons-size");
        nowConditionEl.textContent = Math.round(weather.main.temp) + "°";
        smallSunnyEl.classList.add("d-none");
        smallCloudEl.classList.add("d-none");
        smallRainEl.classList.add("d-none");
        smallThunderEl.classList.add("d-none");
        smallDrizzleEl.classList.remove("d-none");
        smallSnowEl.classList.add("d-none");
        smallHazeEl.classList.add("d-none");
        smallMistEl.classList.add("d-none");
        



        mainCityNameEl.style.color = "#53656f";
        mainTempEl.style.color = "#53656f";

        feelsLikeTextEl.style.color = "#53656f";
        windTextEl.style.color = "#53656f";
        humidityTextEl.style.color = "#53656f";
        visibilityTextEl.style.color = "#53656f";
        airPreTextEl.style.color = "#53656f";
        countryTextEl.style.color = "#53656f";

        feelsLikeValueEl.style.color = "#53656f";
        windSpeedValueEl.style.color = "#53656f";
        humidityValueEl.style.color = "#53656f";
        visibilityValueEl.style.color = "#53656f";
        airPreValueEl.style.color = "#53656f";
        counteryValueEl.style.color = "#53656f";
        currentConditionEl.style.color = "#53656f";


        smallContainerColorEl.style.backgroundColor = "rgba(83,101,111,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(83,101,111,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(83,101,111,0.5)";
        smallContainerColorEl3.style.backgroundColor = "rgba(83,101,111,0.5)";
        smallContainerColorEl4.style.backgroundColor = "rgba(83,101,111,0.5)";
        smallContainerColorEl5.style.backgroundColor = "rgba(83,101,111,0.5)";
        smallContainerColorEl6.style.backgroundColor = "rgba(83,101,111,0.5)";


        sunIconEl.classList.add("d-none");
        // mainCardColorChangeEl.style.backgroundColor = "rgba(54,83,89,255, 0.3)";
        mainCardColorChangeEl.style.backgroundColor = "rgba(83,101,111,0.5)";
        // weatherContainerEl.style.backgroundImage = "url('https://res.cloudinary.com/dkzl2tjrp/image/upload/v1691493466/beautiful-illustrations-design-inspiration-23_1_pc1nf2.png')";
        weatherContainerEl.style.backgroundImage = "url('weather-pics/drizzle-bg.jpg')";
        weatherContainerEl.style.backgroundSize = "cover";
    }    


    if (weather.weather[0].main === "Snow") {


        rainCloudEl.classList.add("d-none");
        cloudyIconEl.classList.add("d-none");
        sunIconEl.classList.add("d-none");
        thunderIconEl.classList.add("d-none");
        drizzleIconEl.classList.add("d-none");
        snowIconEl.classList.remove("d-none");
        mistIconEl.classList.add("d-none");
        windIconEl.classList.add("d-none");


        
        smallSunnyEl.classList.add("icons-size");
        nowConditionEl.textContent = Math.round(weather.main.temp) + "°";
        smallSunnyEl.classList.add("d-none");
        smallCloudEl.classList.add("d-none");
        smallRainEl.classList.add("d-none");
        smallThunderEl.classList.add("d-none");
        smallDrizzleEl.classList.add("d-none");
        smallSnowEl.classList.remove("d-none");
        smallHazeEl.classList.add("d-none");
        smallMistEl.classList.add("d-none");


        mainCityNameEl.style.color = "#c79974";
        mainTempEl.style.color = "#c79974";

        feelsLikeTextEl.style.color = "#c79974";
        windTextEl.style.color = "#c79974";
        humidityTextEl.style.color = "#c79974";
        visibilityTextEl.style.color = "#c79974";
        airPreTextEl.style.color = "#c79974";
        countryTextEl.style.color = "#c79974";

        feelsLikeValueEl.style.color = "#c79974";
        windSpeedValueEl.style.color = "#c79974";
        humidityValueEl.style.color = "#c79974";
        visibilityValueEl.style.color = "#c79974";
        airPreValueEl.style.color = "#c79974";
        counteryValueEl.style.color = "#c79974";
        currentConditionEl.style.color = "#c79974";


        smallContainerColorEl.style.backgroundColor = "rgba(199,153,116,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(199,153,116,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(199,153,116,0.5)";
        smallContainerColorEl3.style.backgroundColor = "rgba(199,153,116,0.5)";
        smallContainerColorEl4.style.backgroundColor = "rgba(199,153,116,0.5)";
        smallContainerColorEl5.style.backgroundColor = "rgba(199,153,116,0.5)";
        smallContainerColorEl6.style.backgroundColor = "rgba(199,153,116,0.5)";


        sunIconEl.classList.add("d-none");
        // mainCardColorChangeEl.style.backgroundColor = "rgba(54,83,89,255, 0.3)";
        mainCardColorChangeEl.style.backgroundColor = "rgba(199,153,116,0.5)";
        // weatherContainerEl.style.backgroundImage = "url('https://res.cloudinary.com/dkzl2tjrp/image/upload/v1691493466/beautiful-illustrations-design-inspiration-23_1_pc1nf2.png')";
        weatherContainerEl.style.backgroundImage = "url('weather-pics/snow-bg.jpg')";
        weatherContainerEl.style.backgroundSize = "cover";
    }    


    if (weather.weather[0].main === "Mist") {


        rainCloudEl.classList.add("d-none");
        cloudyIconEl.classList.add("d-none");
        sunIconEl.classList.add("d-none");
        thunderIconEl.classList.add("d-none");
        drizzleIconEl.classList.add("d-none");
        snowIconEl.classList.add("d-none");
        mistIconEl.classList.remove("d-none");
        windIconEl.classList.add("d-none");


        smallSunnyEl.classList.add("icons-size");
        nowConditionEl.textContent = Math.round(weather.main.temp) + "°";
        smallSunnyEl.classList.add("d-none");
        smallCloudEl.classList.add("d-none");
        smallRainEl.classList.add("d-none");
        smallThunderEl.classList.add("d-none");
        smallDrizzleEl.classList.add("d-none");
        smallSnowEl.classList.add("d-none");
        smallMistEl.classList.remove("d-none");
        smallHazeEl.classList.add("d-none");



        mainCityNameEl.style.color = "#3d4847";
        mainTempEl.style.color = "#3d4847";

        feelsLikeTextEl.style.color = "#3d4847";
        windTextEl.style.color = "#3d4847";
        humidityTextEl.style.color = "#3d4847";
        visibilityTextEl.style.color = "#3d4847";
        airPreTextEl.style.color = "#3d4847";
        countryTextEl.style.color = "#3d4847";

        feelsLikeValueEl.style.color = "#3d4847";
        windSpeedValueEl.style.color = "#3d4847";
        humidityValueEl.style.color = "#3d4847";
        visibilityValueEl.style.color = "#3d4847";
        airPreValueEl.style.color = "#3d4847";
        counteryValueEl.style.color = "#3d4847";
        currentConditionEl.style.color = "#3d4847";


        smallContainerColorEl.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl3.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl4.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl5.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl6.style.backgroundColor = "rgba(61,72,71,0.5)";


        sunIconEl.classList.add("d-none");
        // mainCardColorChangeEl.style.backgroundColor = "rgba(54,83,89,255, 0.3)";
        mainCardColorChangeEl.style.backgroundColor = "rgba(61,72,71,0.5)";
        // weatherContainerEl.style.backgroundImage = "url('https://res.cloudinary.com/dkzl2tjrp/image/upload/v1691493466/beautiful-illustrations-design-inspiration-23_1_pc1nf2.png')";
        weatherContainerEl.style.backgroundImage = "url('weather-pics/mist-bg.jpg')";
        weatherContainerEl.style.backgroundSize = "cover";
    }



    if (weather.weather[0].main === "Haze") {


        rainCloudEl.classList.add("d-none");
        cloudyIconEl.classList.add("d-none");
        sunIconEl.classList.add("d-none");
        thunderIconEl.classList.add("d-none");
        drizzleIconEl.classList.add("d-none");
        snowIconEl.classList.add("d-none");
        mistIconEl.classList.add("d-none");
        windIconEl.classList.remove("d-none");


        smallSunnyEl.classList.add("icons-size");
        nowConditionEl.textContent = Math.round(weather.main.temp) + "°";
        smallSunnyEl.classList.add("d-none");
        smallCloudEl.classList.add("d-none");
        smallRainEl.classList.add("d-none");
        smallThunderEl.classList.add("d-none");
        smallDrizzleEl.classList.add("d-none");
        smallSnowEl.classList.add("d-none");
        smallMistEl.classList.add("d-none");
        smallHazeEl.classList.remove("d-none");


        mainCityNameEl.style.color = "white";
        mainTempEl.style.color = "white";

        feelsLikeTextEl.style.color = "white";
        windTextEl.style.color = "white";
        humidityTextEl.style.color = "white";
        visibilityTextEl.style.color = "white";
        airPreTextEl.style.color = "white";
        countryTextEl.style.color = "white";

        feelsLikeValueEl.style.color = "white";
        windSpeedValueEl.style.color = "white";
        humidityValueEl.style.color = "white";
        visibilityValueEl.style.color = "white";
        airPreValueEl.style.color = "white";
        counteryValueEl.style.color = "white";
        currentConditionEl.style.color = "white";


        smallContainerColorEl.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl2.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl3.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl4.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl5.style.backgroundColor = "rgba(61,72,71,0.5)";
        smallContainerColorEl6.style.backgroundColor = "rgba(61,72,71,0.5)";


        sunIconEl.classList.add("d-none");
        // mainCardColorChangeEl.style.backgroundColor = "rgba(54,83,89,255, 0.3)";
        mainCardColorChangeEl.style.backgroundColor = "rgba(61,72,71,0.5)";
        // weatherContainerEl.style.backgroundImage = "url('https://res.cloudinary.com/dkzl2tjrp/image/upload/v1691493466/beautiful-illustrations-design-inspiration-23_1_pc1nf2.png')";
        weatherContainerEl.style.backgroundImage = "url('weather-pics/haze-bg.jpg')";
        weatherContainerEl.style.backgroundSize = "cover";
    }    




    // let today = new(date);
    // let date = new Date();
    // date.setFullYear(2023);
    // let today = new Date();


    // let dateEl = document.createElement("p");
    // dateEl.textContent = today;
    // resultConatainer.appendChild(dateEl);
}


function sevenDaysWeather(list,) {
    
    console.log(list);

    let resultConatainerEl2 = document.createElement("div");
    weatherContainerEl.appendChild(resultConatainerEl2);
    

    tomorrowValueEl.textContent = "tomorrow : " + "" + list.list[0].main.temp + "" + list.list[0].weather[0].main;

    // if(weather.weather[0].main === "Clouds"){
    //     smallIconEl.style.backgroundImage = "url('weather-pics/icons-folder/clouds.png')";
    // }

}


function fetchWeather(name) {

    // let searchInput = searchInputEl.value

    let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    let apiKey = "de83a78c1097b1d30a7a971a46df4b4c";
    // let url = "https://api.weatherapi.com/v1/current.json?key=3ec2525424c042a6946155723230208&q=Chirala&aqi=yes";

    let url2 = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";

    fetch(url + name + `&appid=${apiKey}`)
        .then(function(response) {
            return response.json();
        })

        .then(function(data) {
            getWeatherDetails(data);
        })

        fetch(url2 + name + `&appid=${apiKey}`)
            .then(function(response) {
                return response.json();
            })

            .then(function(data){
                sevenDaysWeather(data);
            })



}


getButtonEl.addEventListener("click", () => {

    if (searchInputEl.value === "") {
        return nameErrEl.classList.remove("d-none");

    } else {
        fetchWeather(searchInputEl.value);
        searchInputEl.value = "";
        nameErrEl.classList.add("d-none");
        // weatherContainerEl.classList.add("d-none");
        // nameErrEl.classList.add("d-none");
    }

    // fetchWeather(searchInputEl.value);
})

let buttonHomeEl = document.getElementById("buttonHome");

let buttonProfileEl = document.getElementById("buttonProfile");

let profileContainerEl = document.getElementById("profileContainer");



function buttonProfile() {
    weatherContainerEl.classList.add("d-none");
    profileContainerEl.classList.remove("d-none");
}

function buttonHome() {
    weatherContainerEl.classList.remove("d-none");
    profileContainerEl.classList.add("d-none");
}