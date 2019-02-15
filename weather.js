class Weather {
	constructor(zip, country) {
		this.appid = 'f160f325aa62fa3e3a2ca7e693cda176';
		this.zip = zip;
		this.country = country;

	}

	async getWeather() {
		const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.zip},${this.country}&appid=${this.appid}`);

		const data = await response.json();

		return data;
	}

	changeWeather(zip, country) {
		this.zip = zip;
		this.country = country;

	}


}