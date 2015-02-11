var bs = React.Bootstrap;
var Link = React.Router.Link;

var PoolList = React.createBackboneClass({
  componentWillMount: function () {
    this.getCollection().fetch();
  },

  render: function () {
    console.log(this.getCollection());
    var pools = this.getCollection().map(function (pool) {
      return (
        <option>{pool.get('name')}</option>
      );
    });
    return (
      <bs.Input type='select' label='Pool' labelClassName='col-sm-3' wrapperClassName='col-sm-8'>
        {pools}
      </bs.Input>
    );
  }
});

module.exports = PoolList;

