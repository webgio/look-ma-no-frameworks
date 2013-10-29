var testdata = require('../testdata')
  , domify = require('domify')
  , Dropdown = require('../dropdown')
  , CustomerList = require('./customerlist')
  , template = require('./customer-list-template.hbs')

var Index = function(options) {
  options = options || {}
  this.element = options.element || domify('<div></div>')
  this.element.innerHTML = template()
  this.banks = new Dropdown('banks', this.element.getElementsByClassName('bank-container')[0], testdata.banks)
  this.customers = new CustomerList(this.element.getElementsByClassName('customer-container')[0], testdata.customers)
  this.banks.on('changed', this.onBankChanged.bind(this))
}

Index.prototype = {
  detach: function() {
    this.banks.detach()
  },
  onBankChanged: function(newBank) {
    this.customers.filterByBank(newBank)
  }
}

module.exports = Index
