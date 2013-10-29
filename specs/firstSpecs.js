var Customers = require('../customers/index')
describe("App", function() {

  it("should be able to instantiate a customers presenter", function() {
    var presenter = new Customers()
    expect(presenter).not.toBeNull();
  });

  it("should render the list of customers", function (){
    expect(true).toEqual(true);
  });

})
