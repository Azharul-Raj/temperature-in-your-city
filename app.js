const API_KEY = `0f6d0834c2e6a7d0e6c4c051e30faf66&units=metric`
const loadTemperature = async (city) => {
    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`    
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        }
    else {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=0f6d0834c2e6a7d0e6c4c051e30faf66&units=metric`)
        const data = await res.json()
        console.log(data)
    }
}
loadTemperature()