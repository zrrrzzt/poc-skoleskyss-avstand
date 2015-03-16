'use strict';

var React = require('react');
var startUrl= 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyAu4oe2bKCeP4AnAyo78KL_XZvrS-WVIcw&mode=walking&origin=';

var AvstandsResultat = React.createClass({

  render: function() {
    var emptyUrl = '';
    var embedUrl = startUrl + this.props.result.origin + '&destination=' + this.props.result.destination;
    var mapUrl = this.props.result.origin ? embedUrl:emptyUrl;

    return (
      <div>
        <h2>{this.props.result.distance}</h2>
        <p>
          {this.props.result.origin}<br />
          {this.props.result.destination}
        </p>
        <iframe width="100%" height="450" frameBorder="0" src={mapUrl}></iframe>
      </div>
    );
  }
});

module.exports = AvstandsResultat;