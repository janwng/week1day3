
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

var fishes = {
  cod: 'Im a cod',
  salmon: 'Im a salmon'
}

// console.log( fishes.cod )
// console.log( fishes['cod'] )

// var myFish = 'cod'
// console.log( fishes[myFish] )


function calculateTotalSales(companies){
  for(var i = 0; i < companies.length; i++){
    var salesKey = companies[i];

    var totalSales = salesKey.sales.reduce(function(a,b) {
      return a + b;
    }, 0);
    companies[i].sumOfSales = totalSales;
  }
  return companies;
}



var resultTotalSales = calculateTotalSales(companySalesData); //object with new sumOfSales key THIS IS ACTUALLY COMPANIES WITH A NEW NAME

// console.log(resultTotalSales);


function calculateTax(companies, taxLookUpTable) {
  // iterate over companies
    // look up tax for province
    // apply tax to total sales
    // save it to a new attribute on the company

  // return companies


  for (var i = 0; i < companies.length; i++ ){
    var salesProv = resultTotalSales[i].province;
    var salesTotalSum = resultTotalSales[i].sumOfSales;

    var totalTax = salesTaxRates[salesProv] * salesTotalSum;
      // console.log("tax: ", salesTaxRates.resultTotalSales[0].);

      // salesTaxRates.AB

      // var test = resultTotalSales[i].province;
      // console.log("individual tax:" , salesTaxRates[salesProv]);
    // console.log("total tax: ", totalTax);
    companies[i].taxResult = totalTax;

  }

  return companies;

}

var resultTotalTax = calculateTax(companySalesData, salesTaxRates);
console.log(resultTotalTax);




var resultTotalTax = calculateTax(companySalesData, salesTaxRates);

// console.log(resultTotalTax);

      // console.log(resultTotalSales[i].sumOfSales); <- this will log the sum of sales line from the NEW (resultTotalSales) object



// console.log("print province from specific :", resultTotalSales[0].province);
// console.log("print province from all objects :", );


calculateTax(resultTotalSales, salesTaxRates);



//sum sales amount for each company and add an extra key: totalSales -> return the thing in parentheses and pass it into the NEXT function

//match total sales for each company to a province
//calculate tax for each sum -> and add an extra key: tax (taxrate * totalsales) -> return the thing in parenthese and pass i into the NEXT function


//group the companies by creating a new object with only the totalSales and totalTaxes -> create new object with only two keys -> return the new object and
// var new companies if staement to see if __ is undefined,



