global.hashpanel = {
  url: window.location.url,
  api: { },
  session: {
    charts: { },
    widgets: { }
  },
};

HashwareClient.create('http://localhost:1337/api/v1/backbonemodel')
  .then(function (api) {
    hashpanel.api = api;

    hashpanel.session.users = new api.UserCollection();
    hashpanel.session.miners = new api.MinerCollection();

    hashpanel.components = require('./components');
    hashpanel.views = require('./views');
    hashpanel.router = require('./router.jsx');

    return hashpanel.session.users
      .fetch({
        headers: {
          Authorization: 'Basic YWRtaW46YWRtaW4xMjM0'
        }
      });
  })
  .then(function () {
    hashpanel.session.user = hashpanel.session.users.at(0);
    hashpanel.router.start();

    return hashpanel.session.miners.fetch({
      data: {
        populate: [ 'state', 'device' ]
      }
    });
  });
