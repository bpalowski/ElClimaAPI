// 
const weather = new Weather('98058', 'us');

document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeWeather('91950', 'us');

function getWeather() {

	weather.getWeather()
		.then(function (results) {
			console.log(results);
		})
		.catch(function (err) {
			console.log(err);
		});
}
