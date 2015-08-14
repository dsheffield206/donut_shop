// Estimating donut demand at 5 TopPot Locations

'use strict';

var donutShop = function(storeLocation, storeHours, minCustPerHour, maxCustPerHour, avgDonutPerHour) {
    this.storeLocation = storeLocation;
    this.storeHours = storeHours;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgDonutPerHour = avgDonutPerHour;
};

// Calculates hourlyDemand and puts the output into an array
donutShop.prototype.dailyDemand = function(minCustPerHour, maxCustPerHour) {
  var donutDemand = [ ];
    for(var i = 0; i < this.storeHours; i++) {
        donutDemand.push(Math.floor(((Math.random( ) * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour) * this.avgDonutPerHour));
    }
    return donutDemand;
};

// Renders dailyDemand information by creating new table rows and populating our table
donutShop.prototype.render = function( ) {
  var getTable = document.getElementById('Donut-Shops');
  var tableRow = document.createElement('tr');
  var storeDemandArray = this.dailyDemand( );
  var calcStoreSum = 0;

  // Overwrites a store's table row if it already exists
  if(document.getElementById(this.storeLocation)) {
    var overwrite = document.getElementById(this.storeLocation).childNodes;
    for(var j = 1; j < overwrite.length - 1; j++) {
       overwrite[j].innerHTML = storeDemandArray[j-1];
       calcStoreSum += storeDemandArray[j - 1];
    }
    overwrite[overwrite.length - 1].innerHTML = calcStoreSum;

  } else {

  // Creates table row data, appends data by store location and calcs daily sum
  tableRow.id = this.storeLocation;
  tableRow.innerHTML = this.storeLocation;
  getTable.appendChild(tableRow);
  for(var i =0; i < this.storeHours; i++) {
      var tableCell = document.createElement('td');
      tableCell.innerHTML = storeDemandArray[i];
      tableRow.appendChild(tableCell);
      calcStoreSum += storeDemandArray[i];
      }

  // Appends the daily total (or sum) to the table
  var dailySum = document.createElement('td');
      dailySum.innerHTML = calcStoreSum;
      tableRow.appendChild(dailySum);
  }
};

// creating variables from form fields and callng render on the array
var newStoreButton = document.getElementById('formButton');
var renderFormSubmits = function(e) {
  e.preventDefault( );
  var storeLocationForm = document.getElementById('storeLocationForm').value;
  var storeHoursForm = parseInt(document.getElementById('storeHoursForm').value);
  var minCustPerHourForm = parseInt(document.getElementById('minCustPerHourForm').value);
  var maxCustPerHourForm = parseInt(document.getElementById('maxCustPerHourForm').value);
  var avgDonutPerHourForm = parseInt(document.getElementById('avgDonutPerHourForm').value);
  console.log(storeLocationForm, storeHoursForm, minCustPerHourForm, maxCustPerHourForm, avgDonutPerHourForm);
  var newLocation = new donutShop(storeLocationForm, storeHoursForm, minCustPerHourForm, maxCustPerHourForm, avgDonutPerHourForm);
  newLocation.render( );
};
newStoreButton.addEventListener('click', renderFormSubmits);


// create instances of each Top Pot store location
var location1 = new donutShop('Downtown', 11, 8, 43, 4.50);
var location2 = new donutShop('Capitol Hill', 11, 4, 37, 2.00);
var location3 = new donutShop('South Lake Union', 11, 9, 23, 6.25);
var location4 = new donutShop('Wedgewood', 11, 2, 28, 1.25);
var location5 = new donutShop('Ballard', 11, 8, 58, 3.75);

location1.render( );
location2.render( );
location3.render( );
location4.render( );
location5.render( );

