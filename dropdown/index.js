var domify = require('domify')
  , _ = require('underscore')
  , Delegate = require('dom-delegate')
  , EventEmitter = require('events').EventEmitter

function Dropdown(name, element, data) {
  EventEmitter.call(this)

  this.data = data
  this.element = element
  this.name = name

  this.values = this.data
  this.selectedValue = '' 
  this.render()
  this.delegate = new Delegate(this.element)
  this.delegate.on('change', 'select', this.onSelectedValueChanged.bind(this))
}

Dropdown.prototype = {
  render: function() {
    this.element.innerHTML = ""
    var html = '<select name="' + this.name + '">'
    _.each(this.values, function(value){
      var selctedAttr = this.selected === value ? ' selected' : ''
      html += '<option value="' + value + '" ' + selctedAttr + '>' + value + '</option>'
    })
    html += '</select>'
    this.element.appendChild(domify(html))
  },
  onSelectedValueChanged: function(event, select) {
    this.emit('changed',this.selectedValue = select.value)
  },
  detach: function() {
    this.delegate.destroy()
  }
}
_.extend(Dropdown.prototype, EventEmitter.prototype)

module.exports = Dropdown
