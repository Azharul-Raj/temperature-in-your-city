const API_KEY = `0f6d0834c2e6a7d0e6c4c051e30faf66&units=metric`
const loadTemperature = async (city) => {
    console.log(city)
    if (city) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`    
        const res = await fetch(url)
        const data = await res.json()
        displayTemperature(data)
        }
    else {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=0f6d0834c2e6a7d0e6c4c051e30faf66&units=metric`)
        const data = await res.json()
        displayTemperature(data)
    }
}
const displayTemperature = (data) => {
    const { name, main, weather } = data
    setAllData('city','temperature','condition',name,main.temp,weather[0].main)
    // console.log(weather[0].main)
}

// setting innerHTML function
const setInnerText = (setPlaceId, setData) => {
    const setPlace = document.getElementById(setPlaceId)
    setPlace.innerText = setData
}
// setAllData function
const setAllData = (id1,id2,id3,data1,data2,data3) => {
    setInnerText(id1, data1)
    setInnerText(id2, data2)
    setInnerText(id3, data3)
}
// add event listener in the search btn
document.getElementById('search-btn').addEventListener('click', () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    loadTemperature(searchText)
    searchField.value = ``
})
// event listener for enter btn
document.getElementById('search-field').addEventListener('keyup', (event) => {
    const keyPress = event.key
    console.log(keyPress)
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value
    if (keyPress === 'Enter') {
        loadTemperature(searchText)
        searchField.value = ``
    }
    
})

loadTemperature()