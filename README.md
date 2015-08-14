### Code Fellows Week 2 Assignment - Donut Shop

#### Donut Shop - Summary
+ This is project estimates donut demand for 5 Top Pot store locations.
+ Using the hours of operation, minimum & maximum # of customers, avg donut purchased per customer per hour and random numbers generated (within the min and max range) to estimate hourly donut demand per store location.
+ Next, we added an input form where users can input this same information to calculate demand. The user can also overwrite information in the table.
+ Finally, we also added HTML & CSS elements to render our project as a website, including elementary transitions, traformations or animation.


#### JS Functionality:
+ This is program estimates Top Pot donut demand using JavaScript.
+ The program uses object contructors to create our Top Pot Locations and calls th render method to check to see if the store information already exists or to render a new table row with the store location data.
+ The program stores the data for the store locations in an Array; so, that it can acess it to check to see if that location exists and to use the data to populate the corresponding table.
+ On our website, we are dynamically creating the table and its rows. First, we check to see if a location exists, we then append the store Array data to the store location, then we append the hourly sum to the store Array and populate that dynamically in our table.
+ The first challenge was getting the data to populate a dynamic table in our webpage.
+ The next big challenge was taking the user input and over-writing information in the table if that store location already existed. We were able to successfully solve that by using simple if/else logic to see if a user-input store location already existed. if yes, we overwrote the information. Else, we just created a new row.

### CSS & HTML:
+ We are using [Adobe Color Palette - Oregon Coast](https://color.adobe.com/Oregon-Coast-color-theme-189428/)
+ Other complimentary colors from Adobe include:
1. #382513 - Brown
2. #363942 - Gray
3. #000000 - Black
+ Following instructions and [suggestions from Sara Vieira](http://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/), I was able to make my submit button larger and change color when you hover.
