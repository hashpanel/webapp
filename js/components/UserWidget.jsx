/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var UserWidget = React.createBackboneClass({
  logout: function () {
    this.getModel().logout(hashpanel.api.url).then(function (r) {
      console.log(r);
      console.log('logged out');
    });
  },
  render: function () {
    var user = this.getModel();
    var imgUrl = (user && user.get('gravatarUrl')) || 'https://gravatar.com/avatar';
    var username = (user && user.get('username')) || '';

    return (
      <bs.Navbar className='header'>
        <img src={imgUrl} id='avatar' />
        <bs.DropdownButton title={username} ref='dropdown'>
          <Link to='profile' className='list-group-item' eventKey='1'>
            <span className='fa fa-user fa-fw' />
            Profile
          </Link>
          <Link to='login' params={{ logout: true }} className='list-group-item' eventKey='2'>
            <span className='fa fa-power-off fa-fw' />
            Logout
          </Link>
        </bs.DropdownButton>
      </bs.Navbar>
    );
  }
});

module.exports = UserWidget;
