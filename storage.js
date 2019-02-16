class Storage {
	constructor() {
		this.zip;
		this.country;
		this.defaultCity = '98055';
		this.defaultCountry = 'US';
	}

	getLocationData() {
		if (localStorage.getItem('zip') === null) {
			this.zip = this.defaultCity;

		} else {
			this.zip = localStorage.getItem('zip');
		}
		if (localStorage.getItem('country') === null) {
			this.country = this.defaultCountry;

		} else {
			this.country = localStorage.getItem('country');
		}
		return {
			zip: this.zip,
			country: this.country
		}
	}
	setLocationData(zip, country) {
		localStorage.setItem('zip', zip);
		localStorage.setItem('country', country);
	}
}