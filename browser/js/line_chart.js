function lineChart(data) {
    
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 760,
    height = 400
    
        var parseDate = d3.time.format("%Y").parse;
    
    data.forEach(function(d) {
        d.date = parseDate(String(d.date));
      });   
    
    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);
    
    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");
    
    var line = d3.svg.line()
        .interpolate("basis")
        .x(function(d) { return x(d.date); })
        .y(function(d) { return y(d.value); });
    
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.value; }));

	
    function chart(selection) {
        selection.each(function() {
            
            var svg = d3.select(this).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
              .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            
            svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
            
            svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            
            svg.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);
        });
    }
    
    chart.width = function(value) {
        if (!arguments.length) return width;
        width = value;
        return my;
    };

    chart.height = function(value) {
        if (!arguments.length) return height;
        height = value;
        return my;
    };
    
    return chart;
}