d3.csv('hate_crimes.csv', function (error,data) {

  var getColor = function(hue, saturation, lightness, alpha) {
     var colorString = "hsla(" +
       hue + ", "
       + saturation + "%,"
       + lightness  + "%,"
       + alpha + ")";
     return colorString;
   }; //closing getColor

  var makeColor = function(d) {
     var hue = d.value;
     return getColor(hue*2.19, 70, 40, 0.5);
   }; //closing makeColor

  function tabulate(data, columns) {
		var table = d3.select('.content')
                  .append('table');

    var thead = table.append('thead');

		var	tbody = table.append('tbody');

		thead.append('tr')
		     .selectAll('th')
		     .data(columns)
         .enter()
		     .append('th')
		     .text(function (column) { return column; })
         .attr("class", function (column) { return column; });

		var rows = tbody.selectAll('tr')
		  .data(data)
		  .enter()
		  .append('tr');

		var cells = rows.selectAll('td')
		                .data(function (row) {

        return columns.map(function (column) {
		      return {column: column, value: row[column]};

		    });
		  })
		  .enter()
		  .append('td')
      .style("background-color", makeColor)
		  .html(function (d) { return d.value; });

	  return table;
	}

	tabulate(data, ["State", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"]);

});

﻿
