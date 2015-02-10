/** @jsx React.DOM */

var bs = React.Bootstrap;

var Profile = React.createClass({
  render: function () {
    return (
      <bs.Panel header='User Profile'>
        <hashpanel.components.UserForm model={hashpanel.session.user} />
      </bs.Panel>
    );
  }
});

module.exports = Profile;
