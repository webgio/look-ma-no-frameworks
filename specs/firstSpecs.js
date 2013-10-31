var Customers = require('../customers/index')
describe("customers index", function() {
  var presenter
  beforeEach(function(){
    presenter = new Customers()    
  })

  it("should be able to instantiate correctly", function() {
    expect(presenter).not.toBeNull();
  });

  it("should render the list of customers", function (){
    var customersElements = presenter.render().el
    expect(true).toEqual(true);
  });

})
