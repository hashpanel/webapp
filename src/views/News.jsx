/** @jsx React.DOM */

var bs = React.Bootstrap;

var News = React.createClass({
  getInitialState: function () {
    return {
      rss: 'https://newsbtc.com/feed/',
      items: { }
    };
  },
  renderNewsItem: function (item) {
    return (
      <bs.ListGroupItem header={item.title} href={item.url} hover>
        <p class='newsitem-date'>Published: {item.date}</p>
        <p class='newsitem-summary'>{item.summary}</p>
      </bs.ListGroupItem>
    );
  },
  componentDidMount: function () {
    $.get(this.state.rss, function (data) {
      $(data).find('item').each(function () {
        var item = $(this);

        var items = { };
        items[url] = {
          title: item.find('title').text(),
          url: item.find('link').text(),
          summary: item.find('description').text(),
          date: new Date(item.find('pubDate').text())
        };
        this.setState({ items: items });
      });
    });
  },
  render: function () {
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

