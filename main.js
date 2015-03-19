'use strict';

var http = require('http');
var React = require('react');
var getDistance = require('./utils/getdistance');
var submitForm = require('./utils/submitform');
var SearchForm = require('./elements/searchform');
var AvstandsResultat = require('./elements/avstandsresultat');
var SubmitSuccess = require('./elements/submitsuccess');

var App = React.createClass({
  getInitialState: function() {
    return {
      personnr: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      school: '',
      calculatedDistance: '',
      manualDistance: '',
      manualDescription: '',
      submitState: 'unknown',
      result: {}
    };
  },

  handleUserChange: function(personnr, firstname, lastname, email, phone, address, school){
    this.setState({
      personnr: personnr,
      firstname: firstname,
      lastname: lastname,
      email: email,
      phone: phone,
      address: address,
      school: school
    });
  },

  handleDistanceChange: function(manualDistance, manualDescription){
    this.setState({
      manualDistance: manualDistance,
      manualDescription: manualDescription
    });
  },

  handleUserSubmit: function(){
    var self = this;

    var payload = {
      personnummer: this.state.personnr,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      school: this.state.school,
      calculatedDistance: this.state.calculatedDistance,
      manualDistance: this.state.manualDistance,
      manualDescription: this.state.manualDescription
    };

    submitForm(payload, function(err, data){
      if (err) {
        console.error(err);
      } else {
        self.setState({
          submitState: 'success'
        });
        console.log(data);
      }
    });

    this.setState({
      personnr: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      address: '',
      school: '',
      calculatedDistance: '',
      manualDistance: '',
      manualDescription: ''
    });

  },

  handleUserSearch: function(address, school) {
    var that = this;
    getDistance({origin:address, destination:school}, function(err, data) {
      that.setState({
        address: address,
        school: school,
        result: data,
        calculatedDistance: data.distance
      });
    });
  },

render: function() {
  return (
    <div className="container">
  <h1>Søknad om skoleskyss</h1>
      <SearchForm
  personnr={this.state.personnr}
  firstname={this.state.firstname}
  lastname={this.state.lastname}
  address={this.state.address}
    school={this.state.school}
    onUserChange={this.handleUserChange}
onUserChangeSchool={this.handleUserSearch}
        submitState={this.state.submitState}
/>
<AvstandsResultat
  result={this.state.result}
  manualDistance={this.state.manualDistance}
  manualDescription={this.state.manualDescription}
  onUserSubmit={this.handleUserSubmit}
  onDistanceChange={this.handleDistanceChange}
  submitState={this.state.submitState}
/>
      <SubmitSuccess
        submitState={this.state.submitState}
      />
</div>
);
}
});

React.render(<App />, document.body);
