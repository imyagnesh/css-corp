const temperature = "temperature";
const Context = {
    Weatertitle: "WeaterWatch",
    location: "location",
    units: "units",
    temperature: {
        current: `current ${temperature}`,
        maximum: `maximum ${temperature}`,
        minimum: `minmum ${temperature}`
    },
    wind: {
      speed: "wind speed",
      direction: "wind direction"
    },
    pressure: "pressure",
    humidity: "humidity",
    degrees: "degress",
    meter: "meter/sec",
    celsius : 'C',
    hpa: "hPa",
    feelslike:'feels like'
}

export default Context;