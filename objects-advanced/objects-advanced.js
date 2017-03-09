
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateTotalSales(){
  //access the 'sales' values inside the object
  for(var i = 0; i < companySalesData.length; i++){
    var salesKey = companySalesData[i].sales;
    // console.log("sales key:", salesKey);

    var totalSales = salesKey.reduce(function(a,b) {
      return a + b;
    }, 0);
    console.log("total sales:", [i], totalSales);
  }
}

function getSalesProvinces(){
  //access the 'province' values inside the object
  for(var i = 0; i < companySalesData.length; i++){
    var salesProvince = companySalesData[i].province;
    console.log("province (sales obj):", salesProvince);


  }
}

function getTaxProvinces(){
    var provinceTax = Object.keys(salesTaxRates);
    console.log("province (tax obj): ", provinceTax);
}


// function calculateSalesTax(salesData, taxRates) {
//   // Implement your code here
// }


function calculateSalesTax(){
  if(salesProvince === provinceTax) {
    console.log('matching!');
  }
}


calculateTotalSales();
getSalesProvinces();
getTaxProvinces();

// calculateSalesTax();

