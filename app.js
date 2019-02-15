// 
const weather = new Weather('98058', 'us');

weather.changeWeather('91950', 'us');


weather.getWeather()
	.then(function (results) {
		console.log(results);
	})
	.catch(function (err) {
		console.log(err);
	});