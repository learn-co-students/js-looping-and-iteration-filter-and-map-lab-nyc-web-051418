// Code your solution here:
function driversWithRevenueOver(array, string) {
  return array.filter(
    function(driver) { return driver.revenue > string }
  )
}

function driverNamesWithRevenueOver(array, string) {
  return driversWithRevenueOver(array, string).map(
    function(driver) {return driver.name}
  )
}

function exactMatch(array, object) {
  return array.filter (
    function (driver) {
      let match = false;

      for (const key in object) {
        match = driver[key] === object[key];
      }

      return match;
    }
  )
}

function exactMatchToList(array, object) {
  return exactMatch(array,object).map (
    function(driver) { return driver.name }
  )
}
