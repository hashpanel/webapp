var util = module.exports;

util.getBootstrapColor = function getBootstrapColor (i) {
  var colors = [
    '#DF691A',
    '#f0ad4e',
    '#5cb85c',
    '#5bc0de',
    '#d9534f'
  ];

  return colors[i % colors.length];

  /*
  @brand-primary:         #DF691A;
  @brand-success:         #5cb85c;
  @brand-info:            #5bc0de;
  @brand-warning:         #f0ad4e;
  @brand-danger:          #d9534f;
  */

};
