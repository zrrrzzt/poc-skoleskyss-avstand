'use strict';

var React = require('react');

var SubmitSuccess = React.createClass({

  render: function() {
    var displayClass = this.props.submitState === 'success' ? '':'hidden';

    return (
      <div className={displayClass}>
        <h2>Søknad sendt</h2>
        <p>
        Din søknad er sendt inn for behandling.<br />
          Du vil om kort tid motta en kvittering på innsendelsen på e-post.<br />
          Om du ikke mottar kvittering innen en time, vennligst ta kontakt med oss.
        </p>
      </div>
    );
  }
});

module.exports = SubmitSuccess;