

const weather = new Weather('98058', 'us');

const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//weather.changeWeather('91950', 'us');

function getWeather() {

	weather.getWeather()
		.then(function (results) {
			console.log(results);
			ui.paint(results);
		})
		.catch(function (err) {
			console.log(err);
		});
}
