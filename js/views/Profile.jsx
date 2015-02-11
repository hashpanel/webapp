/** @jsx React.DOM */

var bs = React.Bootstrap;

var Profile = React.createClass({
//<hashpanel.components.UserForm model={hashpanel.session.user} />
  render: function () {
    return (
      <bs.Panel header='User Profile'>
      </bs.Panel>
    );
  }
});

module.exports = Profile;
