/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var Input = React.createBackboneClass({
  handleBlur: function (e) {
    this.getModel().set(e.target.name, e.target.value);
    console.log(this.getModel());
  },
  render: function () {
    return (
      <bs.Input {...this.props} labelClassName='col-sm-3' wrapperClassName='col-sm-8' onBlur={this.handleBlur} />
    );
  }
});

module.exports = Input;
