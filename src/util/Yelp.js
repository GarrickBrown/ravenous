const apiKey = 'Insert your API key here';
export const Yelp = {
	search(term, location, radius, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&radius=${radius}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => response.json()).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						url: business.url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						country: business.location.country,
						category: business.categories.title,
						rating: business.rating,
						reviewCount: business.review_count
					};
				});
			}
		});
	}
};
