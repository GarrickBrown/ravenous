import React from 'react';
import './Business.css';

class Business extends React.Component {
	render() {
		return (
			<div className="Business">
				<a className="image-container" href={this.props.business.url} target="_blank">
					<img src={this.props.business.imageSrc} alt=''/>
				</a>

				<h2>{this.props.business.name}</h2>

				<div className="Business-information">
					<a className="Business-address" href={`https://www.google.com/maps/search/?api=1&query=${this.props.business.name.split(' ').join('+')},+${this.props.business.address.split(' ').join('+')}+${this.props.business.city.split(' ').join('+')}+${this.props.business.state.split(' ').join('+')}+${this.props.business.zipCode.split(' ').join('+')},+${this.props.business.country.split(' ').join('+')}`} target="_blank">
						<p>{this.props.business.address}</p>
						<p>{this.props.business.city}</p>
						<p>{this.props.business.state} {this.props.business.zipCode}</p>
						<p>{this.props.business.country}</p>
					</a>

					<div className="Business-reviews">
						<h3>{this.props.business.category}</h3>
						<h3 className="rating">{this.props.business.rating} stars</h3>
						<p>{this.props.business.reviewCount} reviews</p>
					</div>
				</div>
			</div>
		);
	}
};

export default Business;