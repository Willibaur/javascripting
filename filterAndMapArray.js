var customers = [{name: "Will", age: 32, sex: "Male"},
                {name: "Ann", age: 10, sex: "Female"},
                {name: "Hector", age: 60, sex: "Male"}
];

var filterbyAge = customers.filter(function(customer) {
                    return customer.age >= 30;
                  }).
                    map(function(customer) {
                      return customer.name;
                    });

filterbyAge.forEach(function (name) {
  console.log(name);
});


var filterbySex = customers.filter(function(customer) {
                    return customer.sex === "Female";
                  }).
                    map(function(customer) {
                      return customer.name;
                    });

filterbySex.forEach(function (name) {
  console.log(name);
});
