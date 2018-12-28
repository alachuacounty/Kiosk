// Example file src/helpers/bold.js
module.exports = function(options) {
    // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
    var bolder = '<strong><h4>' + options.fn(this) + '</h4></strong>';
    return bolder;
  }