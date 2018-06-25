// Code your solution here:

function driversWithRevenueOver(driverArray, revenueString) {
    return driverArray.filter( function(driver) { return driver.revenue > revenueString });
}

function driverNamesWithRevenueOver(driverArray, revenueString) {
    return driversWithRevenueOver(driverArray, revenueString).map(function (driver){
      return driver.name;
    });
}


function exactMatch(driverArray, pair) {
  return driverArray.filter(function(driver) {
    return driver[Object.keys(pair)] === Object.values(pair)[0]
  });
}

// function exactMatch(driverArray, pair) {
//   return driverArray.filter(function (driver) {
//     return (driver[key_finder(pair)] === pair[key_finder(pair)]);
//     });
//   }
//     //helper method
//     function key_finder(pair) {
//       for (const key in pair) {
//         return key;
//       }
//     }

function exactMatchToList(driverArray, pair) {
  return exactMatch(driverArray, pair).map(function(driver){
    return driver.name;
  });
}
