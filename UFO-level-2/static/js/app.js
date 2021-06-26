// from data.js
var tableData = data;

// Get a reference to the table body

var tbody = d3.select("tbody");

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);


// Complete the event handler function for the form
function runEnter() {

	//Prevent the page from refreshing
	d3.event.preventDefault();

	//Select the input element and get the raw HTML node
	
	var inputElementDate = d3.select("#datetime");
	var inputElementCity = d3.select("#city");
	var inputElementState = d3.select("#state");
	var inputElementCountry = d3.select("#country");
	var inputElementShape = d3.select("#shape");

	//Get the value property of the input element

	var inputElementDate = inputElementDate.property("value");
	var inputElementCity = inputElementCity.property("value");
	var inputElementState = inputElementState.property("value");
	var inputElementCountry = inputElementCountry.property("value");
	var inputElementShape = inputElementShape.property("value");



	tableData.getElementById('submit').onclick = function() {
    var select = tableData.getElementById('#city');
    
}
		
	var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
	var filteredData = tableData.filter(tableData => tableData.city === inputValue);
	var filteredData = tableData.filter(tableData => tableData.state === inputValue);
	var filteredData = tableData.filter(tableData => tableData.country === inputValue);
	var filteredData = tableData.filter(tableData => tableData.shape === inputValue);

	filteredData.forEach(function(UFOSightings)  {

	var row = tbody.append("tr");

	Object.entries(UFOSightings).forEach(function([key,value])  {
		console.log(key,value);

		
		var cell =row.append("td");
				
		cell.text(value);


	});

	});

}
