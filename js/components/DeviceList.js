var bs = React.Bootstrap;
var Link = React.Router.Link;

var DeviceList = React.createBackboneClass({
  componentWillMount: function () {
    this.getCollection().fetch();
  },

  render: function () {
    console.log(this.getCollection());
    var devices = this.getCollection().map(function (device) {
      return (
        <option>{device.get('name')}</option>
      );
    });
    return (
      <bs.Input type='select' label='Device' labelClassName='col-sm-3' wrapperClassName='col-sm-8'>
        {devices}
      </bs.Input>
    );
  }
});

module.exports = DeviceList;
