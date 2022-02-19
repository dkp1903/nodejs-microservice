let properties = require('../package.json') // since we're accessing properties like name, authorname to return for about endpoint

let weather = require('../service/weather') //to be created

let controllers = {
    about: (req, res) => {

        // create an object giving out information
        let aboutInfo = {
            name: properties.name,
            description: properties.description,
            author: properties.author
        }

        //return above created object in json format
        res.json(aboutInfo)
    },

    getWeather: (req, res) => {
        weather.find(req, res, (err, weath) => {
            err ? res.send(err) : res.json(weath)
        })
    }

}

module.exports = controllers