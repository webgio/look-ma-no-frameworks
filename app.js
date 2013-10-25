var domready = require('domready')
  , CustomerList = require('./customers/index')
  , CustomerView = require('./customers/view')
  , routing = require('./navigation')
  , container = null
  , currentPage = null

function run(){
  container = document.getElementById('container')

  routing.route(/^customer\/(.+)/, function(path) {
    switchTo(CustomerView, { name: path.split('/')[1] })
  })

  routing.route(/^$/, function() {
    switchTo(CustomerList)
  })

  routing.start({
    pushState: true
  })
}

function switchTo(Presenter, options) {
  if(currentPage) {
    this.container.removeChild(this.container.children[0])
    currentPage.detach()
  }  
  currentPage = new Presenter(options)
  this.container.appendChild(currentPage.element)
}

domready(run)

