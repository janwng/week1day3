
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

  for (var i = 0; i < companies.length; i++ ){
    var salesProv = resultTotalSales[i].province;
    var salesTotalSum = resultTotalSales[i].sumOfSales;

    var totalTax = salesTaxRates[salesProv] * salesTotalSum;
    companies[i].taxResult = totalTax;
  }

  return companies;
}

var resultTotalTax = calculateTax(companySalesData, salesTaxRates);
function mergeCompanies(companies) {

  //group all the companies
    var resultObj = {};

  for (var i = 0; i < companies.length; i++ ) {
    var companyResults = {};

    var currentCompanyName = companies[i].name;
    var currentTotalSales = companies[i].sumOfSales;
    var currentTotalTax = companies[i].taxResult;

    // if the company exists
    // then add new total sales to the existing total sales of that company

    if (resultObj[currentCompanyName] !== undefined) {
      resultObj[currentCompanyName].totalSales += currentTotalSales;
      resultObj[currentCompanyName].totalTaxes += currentTotalTax;
    } else {
      companyResults["totalSales"] = currentTotalSales;
      companyResults["totalTaxes"] = currentTotalTax;

      resultObj[currentCompanyName] = companyResults;
    }
  }

  console.log('-------->', resultObj);

  return resultObj;
}
mergeCompanies(resultTotalTax);
