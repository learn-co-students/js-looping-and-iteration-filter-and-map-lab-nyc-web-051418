// Code your solution here:

function driversWithRevenueOver(driver,revenue) {
return driver.filter(function (element) {
  return element.revenue > revenue
})
}

function driverNamesWithRevenueOver(driver,revenue) {
  const name=[]
  driversWithRevenueOver(driver,revenue).map(function (obj) {
    name.push(obj.name)
  })
return name
}

function exactMatch(drivers,key_value) {
return drivers.filter(function(driver){
  key=Object.keys(key_value)[0]
  return driver[key] == key_value[key]
})
}

function exactMatchToList(drivers,key_value) {
  const name=[]
  exactMatch(drivers,key_value).map(function (obj) {
    name.push(obj.name)
  })
  return name
}
