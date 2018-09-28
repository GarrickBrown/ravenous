import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			radius: 40000,
			sortBy: 'best_match'
		};
		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count'
		};
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
		this.handleRadiusChange = this.handleRadiusChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}

	getSortByClass(sortByOption) {
		return sortByOption === this.state.sortBy ? 'active' : '';
	}

	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		});
		setTimeout(this.handleSearch, 0);
		this.handleSearch();
	}

	handleTermChange(event) {
		this.setState({
			term: event.target.value
		});
	}

	handleLocationChange(event) {
		this.setState({
			location: event.target.value
		});
	}

	handleSearch() {
		if (this.state.term && this.state.location) {
			this.props.searchYelp(this.state.term, this.state.location, this.state.radius, this.state.sortBy);
		}
	}

	handleKeyPress(event) {
		if (event.key === 'Enter') {
			this.handleSearch();
		}
	}

	handleRadiusChange(event) {
		if (event.target.value <= 40000) {
			this.setState({
				radius: event.target.value
			});
		}
	}

	renderSortByOptions() {
		return Object.keys(this.sortByOptions).map(sortByOption => {
			let sortByOptionValue = this.sortByOptions[sortByOption];
			return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>;
		});
	}

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>
						{this.renderSortByOptions()}
					</ul>
				</div>
  				<div className="SearchBar-fields">
					<input placeholder="Search Businesses" onChange={this.handleTermChange} onKeyPress={this.handleKeyPress} />
					<input placeholder="Where?" onChange={this.handleLocationChange} onKeyPress={this.handleKeyPress} />
					<input placeholder="Radius" onChange={this.handleRadiusChange} onKeyPress={this.handleKeyPress} />
				</div>
				<div className="SearchBar-submit">
					<button onClick={this.handleSearch}>Let's Go</button>
				</div>
			</div>
		);
	}
};

export default SearchBar;