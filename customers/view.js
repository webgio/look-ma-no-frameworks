var testdata = require('../testdata')
  , domify = require('domify')
  , template = require('./view.hbs')
  , _ = require('underscore')

var View = function(options) {
  options = options || {}
  this.element = options.element || domify('<div></div>')
  //this.template = template 
  this.customer = _(testdata.customers)
            .find(function(i) { return i.name == options.name})
  this.render()
}

View.prototype = {
  detach: function() {

  },
  render: function() {
    this.element.innerHTML = template(this.customer)
  }
}

module.exports = View
