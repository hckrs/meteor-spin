Spin = {};

Spin.preset = {
  default: {
    lines: 13, // The number of lines to draw
    length: 10, // The length of each line
    width: 2, // The line thickness
    radius: 10, // The radius of the inner circle
    corners: 1, // Corner roundness (0..1)
    rotate: 0, // The rotation offset
    direction: 1, // 1: clockwise, -1: counterclockwise
    color: '#999', // #rgb or #rrggbb or array of colors
    speed: 1, // Rounds per second
    trail: 60, // Afterglow percentage
    shadow: false, // Whether to render a shadow
    hwaccel: false, // Whether to use hardware acceleration
    className: 'spinner', // The CSS class to assign to the spinner
    zIndex: 2e9, // The z-index (defaults to 2000000000)
    left: 0,
    top: 0,
  }
};

Spin.size = {
  xs: {radius: 3, length: 4, width: 1},
  sm: {radius: 7, length: 7},
  lg: {radius: 18, length: 15},
};


Template.spin.rendered = function() {
  var opts   = _.extend({}, 
                 Spin.preset['default'] || {}, 
                 Spin.default || {},
                 Spin.preset[this.data.preset] || {},
                 Spin.size[this.data.size] || {},
                 this.data.options, 
                 this.data 
               )
    , radius = opts.radius + opts.length
    , size   = radius * 2 + 5
    , elm    = this.firstNode
    , $elm   = this.$(elm);

  // make spinner
  this.spinner = new Spinner(opts);
  this.spinner.spin(elm);

  // positioning
  $elm.css({
    'width': size,
    'height': size,
  });
  $elm.find('.spinner').css({
    'left': radius,
    'top': radius,
  });
}

Template.spin.destroyed = function() {
  this.spinner && this.spinner.stop(); 
}