import React from 'react';
import "./SearchBar.css";

let sortByOptions = {
  bestMatch: 'Best Match',
  highestRated: 'Highest Rating',
  mostReviewed: 'Most Reviewed'
};

class SearchBar extends React.Component {

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
  let sortByOptionValue = sortByOptions[sortByOption];
  return <li key={sortByOption}>{sortByOptionValue}</li>;
    });
  };

  render() {
  return <div className="SearchBar">
  <div className="SearchBar-sort-options">
    <ul>
    {this.renderSortByOptions()}
    </ul>
  </div>
  <div className="SearchBar-fields">
    <input placeholder="Search Businesses" />
    <input placeholder="Where?" />
  </div>
  <div className="SearchBar-submit">
    <a>Lets Go</a>
  </div>
  </div>;
  };

}

export default SearchBar
