const apiKey = 'Insert your API key here';
export const Auto = async (location) => {
	try {
		const response = await fetch(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${location}&types=geocode&key=${apiKey}&sessiontoken=1`);
		if (response.ok) {
			const jsonResponse = await response.json();
			console.log(jsonResponse);
			if (jsonResponse.status === 'OK') {
				return jsonResponse.predictions[0].description;
			}
		}
	} catch(error) {
		console.log(error);
	}
};