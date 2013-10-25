var domify = require('domify')
  , _ = require('underscore')
  , Delegate = require('dom-delegate')
  , EventEmitter = require('events').EventEmitter

function Dropdown(name, element, data) {
  EventEmitter.call(this)

  this.data = data
  this.element = element
  this.name = name

  // GASP - we can use Knockout if we want to
  // Just keep it internal to the presenter
  this.values = this.data
  this.selectedValue = '' 
  this.render()
  var el = document.getElementsByName(this.name)[0]
  el.addEventListener("change", this.onSelectedValueChanged.bind(this), false)
}

Dropdown.prototype = {
  render: function() {
    this.element.innerHTML = ""
    var html = '<select name="' + this.name + '">'
    _.each(this.values, function(value){
      var selected = this.selected === value
      var selctedAttr = selected ? ' selected' : ''
      html += '<option value="' + value + '" ' + selctedAttr + '>' + value + '</option>'
    })
    html += '</select>'
    this.element.appendChild(domify(html))
  },
  onSelectedValueChanged: function(event) {
    var newValue = event.currentTarget.value
    this.selectedValue = newValue
    this.emit('changed', newValue)
  },
  detach: function() {
    ko.cleanNode(this.element)
  }
}
_.extend(Dropdown.prototype, EventEmitter.prototype)

module.exports = Dropdown
