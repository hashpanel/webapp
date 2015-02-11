/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var UserForm = React.createBackboneClass({
  render: function () {
    return (
      <form className='form-horizontal'>
        <h3>User Information</h3>
        <bs.Input type='static' label='Username' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
        <bs.Input type='static' label='Email' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
        <bs.Input type='text' label='Full Name' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
      </form>
    );
  }

});

module.exports = UserForm;
