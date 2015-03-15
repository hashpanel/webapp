/** @jsx React.DOM */

var bs = React.Bootstrap;
var Link = React.Router.Link;

var MinerForm = React.createBackboneClass({
  mixins: [
    React.BackboneMixin('pools'),
    React.BackboneMixin('devices'),
    React.BackboneMixin('worker'),
    React.BackboneMixin('miner')
  ],
  getDefaultProps: function () {
    // XXX not sure what the best pattern is to initialize models
    var props = {
      hostHelp: 'Information needed to manage your miner remotely',
      pools: new hashpanel.api.PoolCollection(),
      devices: new hashpanel.api.MinerDeviceCollection(),
      worker: new hashpanel.api.PoolWorker(),
      miner: new hashpanel.api.Miner()
    };
    props.miner.get('workers').add(props.worker);
    console.log(hashpanel.session.miners);

    return props;
  },
  save: function () {
    console.log(this.props.miner);
    this.props.miner.save()
      .then(function (miner) {
        console.log('saved!');
        console.log(miner);
      })
      .catch(function (e) {
        console.log('fail', e);

      });

  },
  handleFormChange: function (event) {
    var attr = event.target.name;
    var value = event.target.value;
    console.log('name', event.target.name);
    console.log('value', event.target.value);
    console.log(this.props.miner.attributes);

    // XXX this is horrifying and goes against everything I believe. looking for
    // a decent dot-notation module for backbone-relational
    if (attr == 'worker.name') {
      this.props.worker.set('name', value);
    }
    else if (attr == 'worker.password') {
      this.props.worker.set('password', value);
    }
    else if (attr == 'pool.name') {
      this.props.worker.set('pool', value);
    }
    else {
      this.props.miner.set(attr, value);
    }
  },
  render: function () {
//hashpanel.session.miners.add(props.miner);
    return (
      <form className='form-horizontal' onChange={this.handleFormChange}>
        <h3>Miner Information</h3>
        <bs.Input type='text' name='name' label='Miner Name' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
        <hashpanel.components.DeviceList name='device' collection={this.props.devices} />
        <bs.Input label='Host + Port' labelClassName='col-sm-3' wrapperClassName='col-sm-8' help={this.props.hostHelp} >
          <bs.Row>
            <bs.Col sm={6}>
              <input type='text' name='host' className='form-control' placeholder='192.168.1.99' />
            </bs.Col>
            <bs.Col sm={6}>
              <input type='text' name='port' className='form-control' placeholder='4028' />
            </bs.Col>
          </bs.Row>
        </bs.Input>
        <h3>Pool Information</h3>
        <hashpanel.components.PoolList name='pool.name' collection={this.props.pools} />
        <bs.Input type='text' name='worker.name' label='Worker Name' labelClassName='col-sm-3' wrapperClassName='col-sm-8' />
        <bs.Input type='text' name='worker.password' label='Worker Password' labelClassName='col-sm-3' wrapperClassName='col-sm-8' defaultValue='123' />
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
