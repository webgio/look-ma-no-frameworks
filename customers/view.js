var testdata = require('../testdata')
  , fs = require('fs')
  , domify = require('domify')
  , mustache = require('mustache')
  , _ = require('underscore')

var View = function(options) {
  options = options || {}
  this.element = options.element || domify('<div></div>')
  this.template = fs.readFileSync(__dirname + "/view.html")
  this.customer = _(testdata.customers)
            .find(function(i) { return i.name == options.name})
  this.render()
}

View.prototype = {
  detach: function() {

  },
  render: function() {
    this.element.innerHTML = mustache.render(this.template, this.customer)
  }
}

module.exports = View
