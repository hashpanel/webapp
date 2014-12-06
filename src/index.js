console.log('app: hashpanel');

/**
 * @namespace hashpanel
 */
global.hashpanel = {
  url: window.location.url,
  api: null,
  session: { },
  components: require('./components'),
  views: require('./views')
};

hashpanel.router = require('./router.jsx');

HashwareClient.create('http://localhost:1337/api/v1/backbonemodel')
  .then(function (api) {
    hashpanel.api = api;
    hashpanel.router.start();
  });
