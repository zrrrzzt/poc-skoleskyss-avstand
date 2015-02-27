'use strict';

var React = require('react');
var schoolsList = require('../data/schools.json');

var SearchForm = React.createClass({
  handleChange: function(e) {
    this.props.onUserChange(
      this.refs.addressInput.getDOMNode().value,
      this.refs.schoolInput.getDOMNode().value
    );
  },
  handleSearch: function(e) {
    e.preventDefault();
    this.props.onUserSubmit(
      this.refs.addressInput.getDOMNode().value,
      this.refs.schoolInput.getDOMNode().value
    );
  },
  render: function() {
    return (
      <form onSubmit={this.handleSearch}>
        <select ref="schoolInput" className="u-full-width">
        {schoolsList.map(function(school){
            return (
              <option value={school.address}>{school.name}</option>
            )
          })}
          </select>
        <input
          type="text"
          placeholder="Din adresse, avslutt med [Enter]"
          value={this.props.address}
          ref="addressInput"
          onChange={this.handleChange}
          className="u-full-width"
        />
      </form>
    );
  }
});

module.exports = SearchForm;