
const storage = new Storage();

const weatherLocations = storage.getLocationData();

const weather = new Weather(weatherLocations.zip, weatherLocations.country);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

//Change Location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
	const zip = document.getElementById('zip').value;
	const country = document.getElementById('country').value;

	weather.changeWeatherLocation(zip, country);

	storage.setLocationData(zip, country)

	getWeather();
	$('#locModal').modal('hide');
});



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
