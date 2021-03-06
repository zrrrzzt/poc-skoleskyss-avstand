'use strict';

var React = require('react');
var startUrl= 'https://www.google.com/maps/embed/v1/directions?key=AIzaSyAu4oe2bKCeP4AnAyo78KL_XZvrS-WVIcw&mode=walking&origin=';

var AvstandsResultat = React.createClass({

  getInitialState: function() {
    return {
      disagree: false,
      disagreeButtonText: 'ikke '
    };
  },

  handleDisagreement: function(){
    var newDisagreeState = this.state.disagree ? false:true;
    var newDisagreeButtonText = this.state.disagree ? 'ikke ':'';
    this.setState(
      {
        disagree: newDisagreeState,
        disagreeButtonText: newDisagreeButtonText
      }
    );
  },

  handleChange: function(e) {
    this.props.onDistanceChange(
      this.refs.distanceInput.getDOMNode().value,
      this.refs.descriptionInput.getDOMNode().value
    );
  },

  handleSubmit: function(e) {
    this.props.onUserSubmit();
  },

  render: function() {
    var emptyUrl = '';
    var embedUrl = startUrl + this.props.result.origin + '&destination=' + this.props.result.destination;
    var mapUrl = this.props.result.origin ? embedUrl:emptyUrl;
    var targetUrl = 'render.html?url=' + mapUrl;
    var displayClass = this.props.result.origin && this.props.submitState === 'unknown' ? '':'hidden';
    var agreeDisplay = this.state.disagree ? '':'hidden';

    return (
      <div className={displayClass}>

        <strong>Automatisk beregnet avstand:</strong> {this.props.result.distance}<br />
        <strong>Startsted for beregningen:</strong> {this.props.result.origin}<br />
        <strong>Stoppested for beregningen:</strong> {this.props.result.destination}<br />
        <a href={targetUrl} target="_blank">Vis beregnet rute på kart</a>
        <button
          onClick={this.handleDisagreement}
          className="u-full-width">Jeg er {this.state.disagreeButtonText}enig i beregningen</button>
        <div className={agreeDisplay}>
        <input
          type="text"
          placeholder="Din mening om avstand til skolen (i kilometer)"
          value={this.props.manualDistance}
          ref="distanceInput"
          onChange={this.handleChange}
          className="u-full-width"
        />
          Skriv også hvorfor du mener våre beregninger er gale
          <textarea
            placeholder="Forklaring på dine beregninger"
            value={this.props.manualDescription}
            ref="descriptionInput"
            onChange={this.handleChange}
            className="u-full-width"
          />
          </div>
        <button className="primary" onClick={this.handleSubmit}>Send søknad</button>
      </div>
    );
  }
});

module.exports = AvstandsResultat;