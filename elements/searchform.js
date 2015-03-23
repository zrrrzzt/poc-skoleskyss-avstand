'use strict';

var React = require('react');
var schoolsList = require('../data/schools.json');

var SearchForm = React.createClass({
  handleChange: function(e) {
    this.props.onUserChange(
      this.refs.personnrInput.getDOMNode().value,
      this.refs.nameInput.getDOMNode().value,
      this.refs.emailInput.getDOMNode().value,
      this.refs.phoneInput.getDOMNode().value,
      this.refs.addressInput.getDOMNode().value,
      this.refs.schoolInput.getDOMNode().value
    );
  },
  handleChangeSchool: function(e) {
    e.preventDefault();
    this.props.onUserChangeSchool(
      this.refs.addressInput.getDOMNode().value,
      this.refs.schoolInput.getDOMNode().value
    );
  },
  render: function() {
    var displayClass = this.props.submitState === 'success' ? 'hidden':'';

    return (
      <form className={displayClass}>
        <input
          type="text"
          placeholder="Fødselsnummer (11 siffer)"
          value={this.props.personnr}
          ref="personnrInput"
          onChange={this.handleChange}
          className="u-full-width"
        />
        <input
          type="text"
          placeholder="Navn"
          value={this.props.name}
          ref="nameInput"
          onChange={this.handleChange}
          className="u-full-width"
        />
        <input
          type="text"
          placeholder="E-postadresse"
          value={this.props.email}
          ref="emailInput"
          onChange={this.handleChange}
          className="u-full-width"
        />
        <input
          type="text"
          placeholder="Telefon/Mobilnummer"
          value={this.props.phone}
          ref="phoneInput"
          onChange={this.handleChange}
          className="u-full-width"
        />
        <input
          type="text"
          placeholder="Din bostedsadresse"
          value={this.props.address}
          ref="addressInput"
          onChange={this.handleChange}
          className="u-full-width"
        />
        <select ref="schoolInput" className="u-full-width" onChange={this.handleChangeSchool}>
        {schoolsList.map(function(school){
            return (
              <option value={school.address}>{school.name}</option>
            )
          })}
          </select>
      </form>
    );
  }
});

module.exports = SearchForm;