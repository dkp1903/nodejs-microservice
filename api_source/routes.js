const controller = require('./controller')

module.exports = (weatherApp) => {
    // listens for a GET request on the '/about' endpoint
    // request is then handled by about function in controller
    weatherApp.route('/about')
                .get(controller.about)
     // listens for a GET request on the '/weather' endpoint
    weatherApp.route('/weather')
                .get(controller.getWeather)
}