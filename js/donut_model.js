// Estimating donut demand at 5 TopPot Locations

'use strict';

var donutShop = function(storeLocation, storeHours, minCustPerHour, maxCustPerHour, avgDonutPerHour) {
    this.storeLocation = storeLocation;
    this.storeHours = storeHours;
    this.minCustPerHour = minCustPerHour;
    this.maxCustPerHour = maxCustPerHour;
    this.avgDonutPerHour = avgDonutPerHour;
    this.storeDemandArray = [ ];
    this.calcStoreSum = 0;
};

// Calculates hourlyDemand and puts the output into an array
donutShop.prototype.dailyDemand = function(minCustPerHour, maxCustPerHour) {
    for(var i = 0; i < this.storeHours; i++) {
        Math.floor(this.storeDemandArray.push((Math.floor(Math.random( ) * (this.maxCustPerHour - this.minCustPerHour)) + this.minCustPerHour) * this.avgDonutPerHour));
    }
};

// Renders dailyDemand information by creating new table rows and populating our table
donutShop.prototype.render = function( ) {
  var getTable = document.getElementById('Donut-Shops');
  var tableRow = document.createElement('tr');
  tableRow.id = this.storeLocation;
  tableRow.innerHTML = this.storeLocation;
  getTable.appendChild(tableRow);
  this.dailyDemand( );

  // Creates table row data, appends data by store location and calcs daily sum
  for(var i =0; i < this.storeHours; i++) {
      var tableCell = document.createElement('td');
      tableCell.innerHTML = this.storeDemandArray[i];
      tableRow.appendChild(tableCell);
      this.calcStoreSum += this.storeDemandArray[i];
  }

  // Appends the daily total (or sum) to the table
  var tableCell = document.createElement('td');
  tableCell.innerHTML = this.calcStoreSum;
  tableRow.appendChild(tableCell);
};

// creating variables from form fields and callng render on the array
var newStoreButton = document.getElementById('formButton');
var renderFormSubmits = function(e) {
  e.preventDefault( );
  var storeLocationForm = document.getElementById('storeLocationForm').value;
  var storeHoursForm = document.getElementById('storeHoursForm').value;
  var minCustPerHourForm = document.getElementById('minCustPerHourForm').value;
  var maxCustPerHourForm = document.getElementById('maxCustPerHourForm').value;
  var avgDonutPerHourForm = document.getElementById('avgDonutPerHourForm').value;
  console.log(storeLocationForm, storeHoursForm, minCustPerHourForm, maxCustPerHourForm, avgDonutPerHourForm)
  var newLocation = new donutShop(storeLocationForm, storeHoursForm, minCustPerHourForm, maxCustPerHourForm, avgDonutPerHourForm);
  // Overwrites a table row if it already exists
  if(document.getElementById(this.storeLocation)) {
    var overwrite = document.getElementById(this.storeLocation).childNodes;
    for(var j = 1; j < (this.storeHoursForm - 1); j++) {
       overwrite[j].innerHTML = this.storeDemandArray[j-1];
     }
       overwrite[(this.storeHoursForm - 1)].innerHTML = this.calcStoreSum;
  } else {
  newLocation.render( );
 }
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

