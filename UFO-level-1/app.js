// from data.js
var tableData = data;

//Body reference
var tbody = d3.select("tbody");

//function to create rows for each row of information
tableData.forEach(function(UFO_1) {
    console.log(UFO_1);
    var row = tbody.append("tr");
    //function to insert values into each cell
    Object.entries(UFO_1).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

var button = d3.select("#filter-btn");
button.on("click", function() {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter(dates => dates.datetime === inputValue);
    console.log(filteredData);

    filteredData.forEach(function(filter_UFO) {
        console.log(filter_UFO);
        row = tbody.append("tr");
        //function to insert values into each cell
        Object.entries(filter_UFO).forEach(function([key, value]) {
            console.log(key, value);
            cell = row.append("td");
            cell.text(value);
        });
    });
});