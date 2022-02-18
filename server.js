const express = require('express')
//const routes = require('./api/routes')

const weatherApp = express()

const PORT = 5000

//routes(weatherApp)

weatherApp.listen(PORT, () => {
    console.log('Server running on PORT : ', PORT)
})
