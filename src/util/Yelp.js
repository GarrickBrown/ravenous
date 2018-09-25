const apiKey = 'dVyfZy_OQUsYjaGLTEjh4fqeIPqbOiBGw11HxQM-LSUwqJj4ZAHk9cG-2hfTmoZYQzhH1r5upibAOYScWmSORDlMOCOvI7qoHThgE54ETyxcLcZuQhONTD5Q6xiqW3Yx';

class Yelp extends React.Component {
	search(term, location, sortBy) {
		return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
			headers: {
				Authorization: `Bearer ${apiKey}`
			}
		}).then(response => response.json()).then(jsonResponse => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories.title,
						rating: business.rating,
						reviewCount: business.review_count
					};
				});
			}
		});
	}
};

export default Yelp;