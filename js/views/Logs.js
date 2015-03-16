var bs = React.Bootstrap;
var Link = React.Router.Link;

var TimestampColumn = React.createClass({
  render: function () {
    var date = this.props.rowData.createdAt;
    var formattedDate = moment(date).format('MM/DD/YY h:mm:ssa');
    return (
      <span>
        {formattedDate}
      </span>
    );
  }
});
var ErrorColumn = React.createClass({
  render: function () {
    var error = this.props.rowData.error;
    return (
      <span>
        {(error && error.code) || 'OK'}
      </span>
    );
  }
});
var MinerNameColumn = React.createClass({
  render: function () {
    var miner = this.props.rowData.miner;
    return (
      <span>
        {(miner && miner.name) || ''}
      </span>
    );
  }
});
var MinerDeviceColumn = React.createClass({
  render: function () {
    var miner = this.props.rowData.miner;
    return (
      <span>
        {(miner && miner.device && miner.device.name) || ''}
      </span>
    );
  }
});

var Logs = React.createBackboneClass({
  getInitialState: function () {
    return {
      currentPage: 0,
      externalCurrentPage: 0,
      externalMaxPage: 10,
      maxPages: 10,
      bodyHeight: 500,
      pageSize: 10,
      //externalResultsPerPage: 100,
      resultsPerPage: 10,
      useFixedHeader: true,
      useGriddleStyles: false,
      //useExternal: true,
      showFilter: true,
      externalSetPage: this.setPage,
      externalChangeSort: function () { },
      externalSetFilter: function () { },
      externalSetPageSize: this.setPageSize,
      enableInfiniteScroll: true,
      tableClassName: 'table table-striped table-hover',
      initialSort: 'createdAt',
      initialSortAscending: false,
      columns: [
        'miner',
        'device',
        'event',
        'status',
        'timestamp'
      ],
    };
  },
  getDefaultProps: function () {
    return {
      collection: new hashpanel.api.MinerStateCollection()
    };
  },
  componentDidMount: function () {
    this.getExternalData(0);
  },
  setPage: function (index) {
    this.setState({
      currentPage: index
    });
    this.getExternalData(index);
  },
  getExternalData: function (page) {
    this.props.collection.fetch({
        data: {
          skip: page * this.state.pageSize,
          limit: 1000,
          sort: 'createdAt desc',
          //createdBy: hashpanel.session.user.id
        },
        success: function (history) {
          var cleaned = _.compact(history.map(function (state) {
            var error = state.get('error');
            var miner = state.get('miner');
            var device = miner && miner.get('device');
            return state && {
              miner: miner && miner.get('name'),
              device: device && device.get('name'),
              event: state.get('event'),
              timestamp: moment(state.get('createdAt')).format('MM/DD/YY h:mm:ssa'),
              status: (error && error.code) || 'OK'
            };
          }));
          console.log(cleaned);
          this.setState({
            results: cleaned
          });
        }.bind(this)
    });

  },
  render: function () {
    return (
      <bs.Panel header='System Logs' >
        <Griddle {...this.state} results={this.state.results} />
      </bs.Panel>
    );
  }
});

module.exports = Logs;
