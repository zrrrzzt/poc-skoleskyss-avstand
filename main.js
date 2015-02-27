'use strict';

var http = require('http');
var React = require('react');
var getDistance = require('./utils/getdistance');
var SearchForm = require('./elements/searchform');
var AvstandsResultat = require('./elements/avstandsresultat');

var App = React.createClass({
  getInitialState: function() {
  return {
    address: '',
    school: '',
    result: {}
  };
},

  handleUserChange: function(address, school){
    this.setState({
      address: address,
      school: school
    });
  },

handleUserSearch: function(address, school) {
  var that = this;
  getDistance({origin:address, destination:school}, function(err, data) {
    console.log('Data: ' + data);
    that.setState({
      address: address,
      school: school,
      result: data
    });
  });
},

render: function() {
  return (
    <div className="container">
  <h1>Skoleskyss - beregn avstand</h1>
      <SearchForm
  address={this.state.address}
    school={this.state.school}
    onUserChange={this.handleUserChange}
onUserSubmit={this.handleUserSearch}
/>
<AvstandsResultat
  result={this.state.result}
/>
</div>
);
}
});

React.render(<App />, document.body);
