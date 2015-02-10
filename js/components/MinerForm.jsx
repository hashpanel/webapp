/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var MinerForm = React.createBackboneClass({
  getInitialState: function () {
    return {
      hostHelp: 'Information needed to manage your miner remotely'
    };
  },
  render: function () {
    return (
      <form className='form-horizontal'>
        <h3>Miner Information</h3>
        <bs.Input type='text' label='Miner Name' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
        <bs.Input type='select' label='Device' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
        <bs.Input label='Host + Port' labelClassName='col-sm-3' wrapperClassName='col-sm-8' help={this.state.hostHelp} >
          <bs.Row>
            <bs.Col sm={6}>
              <input type='text' className='form-control' placeholder='192.168.1.99' />
            </bs.Col>
            <bs.Col sm={6}>
              <input type='text' className='form-control' placeholder='4028' />
            </bs.Col>
          </bs.Row>
        </bs.Input>
        <h3>Pool Information</h3>
        <bs.Input type='select' label='Pool' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
        <bs.Input type='text' label='Worker Name' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
        <bs.Input type='text' label='Worker Password' labelClassName='col-sm-3' wrapperClassName='col-sm-8' defaultValue='123' />
      </form>
    );
  }
});

module.exports = MinerForm;
/*
        <bs.Input type='text' label='Hashrate' labelClassName='col-sm-3' buttonAfter={
          <bs.DropdownButton title='GH/s'>
            <bs.MenuItem>MH/s</bs.MenuItem>
            <bs.MenuItem>GH/s</bs.MenuItem>
            <bs.MenuItem>TH/s</bs.MenuItem>
          </bs.DropdownButton>
        } wrapperClassName='col-sm-8' help={this.state.hashrateHelp} />

        <bs.Table>
          <thead>
            <tr>
              <th>Hashrate</th>
              <th>Power Usage</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody />
        </bs.Table>
*/
