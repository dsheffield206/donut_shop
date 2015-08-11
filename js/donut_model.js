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

// calculates donut demand per hour using a randomly generated number of customers
donutShop.prototype.randomDonutPerHour = function getRandomInt(minCustPerHour, maxCustPerHour) {
    return (Math.floor(Math.random( ) * 100 + 1)) * this.avgDonutPerHour;
};

// Calculates hourlyDemand and puts the output into an Array; Sums store's hourlyDemand
donutShop.prototype.dailyDemand = function( ) {
    var hourlyDemand = 0;
    for(var i = 0; i < this.storeHours; i++) {
        hourlyDemand = this.randomDonutPerHour([i]);
        this.storeDemandArray.push(hourlyDemand);
        this.calcStoreSum = this.calcStoreSum + this.hourlyDemand;
    }
    return this.calcStoreSum;
};

// create instances of each Top Pot store location
var location1 = new donutShop('Downtown', 11, 8, 43, 4.50);
var location2 = new donutShop('Capitol Hill', 11, 4, 37, 2.00);
var location3 = new donutShop('South Lake Union', 11, 9, 23, 6.33);
var location4 = new donutShop('Wedgewood', 11, 2, 28, 1.25);
var location5 = new donutShop('Ballard', 11, 8, 58, 3.75);

location1.dailyDemand( );
location2.dailyDemand( );
location3.dailyDemand( );
location4.dailyDemand( );
location5.dailyDemand( );


var storeTable = document.getElementById('store-table');

function addToStoreList(xx) {
  var storeListItem = document.createElement('tr');
  var storeNode = document.createTextNode(xx);
  storeListItem.appendChild(storeNode);
  document.getElementById('store-table').appendChild(storeListItem);
}

