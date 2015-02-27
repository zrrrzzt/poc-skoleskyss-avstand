'use strict';

var React = require('react');

var AvstandsResultat = React.createClass({
  render: function() {
    return (
      <div>
        <h2>{this.props.result.distance}</h2>
        <p>
          {this.props.result.origin}<br />
          {this.props.result.destination}
        </p>
      </div>
    );
  }
});

module.exports = AvstandsResultat;