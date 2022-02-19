let request = require('request')
require('dotenv').config()
const apiKey = process.env.API_KEY

let lat = 21.170240
let lon = 72.831061

const url = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
let weather = {
    find: (req, res, next) => {
        request(url, (error, response, body) => {
            if(!error && response.statusCode == 200) {
                response = JSON.parse(body)
                res.send(response)
            }
            else{
                console.log(response.statusCode + response.body)
                res.send('An error occurred')
            }
        })
    }
}

module.exports = weather