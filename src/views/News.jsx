/** @jsx React.DOM */

var bs = React.Bootstrap;
var moment = require('moment');

var News = React.createClass({
  getInitialState: function () {
    return {
      rss: 'http://localhost:1337/api/v1/news',
      items: { }
    };
  },
  renderNewsItem: function (item) {
    console.log(item);
    return (
      <bs.ListGroupItem header={item.title} href={item.url} target='_blank' hover>
        <p class='newsitem-date'>Published: {item.date}</p>
        <p class='newsitem-summary'>{item.summary}</p>
      </bs.ListGroupItem>
    );
  },
  componentWillMount: function () {
    var self = this;
    $.get(this.state.rss, function (data) {
      $(data).find('item').each(function () {
        var item = $(this);
        var url = item.find('link').text();

        var items = self.state.items;
        items[url] = {
          title: item.find('title').text(),
          url: url,
          summary: item.find('description').text().replace(/<(?:.|\n)*?>/gm, '').split('.')[0] + '.',
          date: moment(new Date(item.find('pubDate').text())).format('dddd, MMMM Do YYYY')
        };
        console.log(items[url]);
        self.setState({ items: items });
      });
    });
  },
  render: function () {
    console.log(this.state);
    return (
      <bs.Panel header='News'>
        <bs.ListGroup>
          {_.map(this.state.items, this.renderNewsItem)}
        </bs.ListGroup>
      </bs.Panel>
    );
  }
});

module.exports = News;

