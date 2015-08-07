var data = d3.range(0, 2* Math.PI, .01).map(function(t) {
  return [t, Math.sin( 2* t)];
});

var width = 760,
    height = 600,
    radius = Math.min(width, height) / 2 - 30;

var r = d3.scale.linear()
    .domain([0, 1])
    .range([0, radius]);

var line = d3.svg.line.radial()
    .radius(function(d) { return r(d[1]); })
    .angle(function(d) { return -d[0] + 2*Math.PI / 2; });

	
	
var svg = d3.select("body")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var gr = svg.append("g")
    .attr("class", "r axis")
  　　.selectAll("g")
    .data(r.ticks(5)
	.slice(1))
  　　.enter()
  　　.append("g");

svg.append("path")
    .datum(data)
    .attr("class", "line")
    .attr("d", line);

//# sourceMappingURL=Math01.js.map