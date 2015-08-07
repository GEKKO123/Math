/* https://github.com/d3/d3-ease Copyright 2015 Michael Bostock, Copyright 2001 Robert Penner. */
"undefined"==typeof Map&&(Map=function(){this.clear()},Map.prototype={set:function(t,n){return this._[t]=n,this},get:function(t){return this._[t]},has:function(t){return t in this._},"delete":function(t){return t in this._&&delete this._[t]},clear:function(){this._=Object.create(null)},get size(){var t=0;for(var n in this._)++t;return t},forEach:function(t){for(var n in this._)t(this._[n],n,this)}}),function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n(t.ease={})}(this,function(t){"use strict";function n(t){return+t}function e(t,n){t=Math.max(1,P(t,1)),n=1.5*P(n,.3)*N;var e=n*Math.asin(1/t);return function(u){return t*((u=2*u-1)<0?Math.pow(2,10*u)*Math.sin((e-u)/n):Math.pow(2,-10*u)*Math.sin((u-e)/n)+2)/2}}function u(t,n){t=Math.max(1,P(t,1)),n=P(n,.3)*N;var e=n*Math.asin(1/t);return function(u){return t*Math.pow(2,-10*u)*Math.sin((u-e)/n)+1}}function i(t,n){t=Math.max(1,P(t,1)),n=P(n,.3)*N;var e=n*Math.asin(1/t);return function(u){return t*Math.pow(2,10*--u)*Math.sin((e-u)/n)}}function r(t){return t=1.525*P(t,1.70158),function(n){return((n*=2)<1?n*n*((t+1)*n-t):(n-=2)*n*((t+1)*n+t)+2)/2}}function o(t){return t=P(t,1.70158),function(n){return--n*n*((t+1)*n+t)+1}}function c(t){return t=P(t,1.70158),function(n){return n*n*((t+1)*n-t)}}function s(t){return E>t?J*t*t:A>t?J*(t-=z)*t+B:D>t?J*(t-=C)*t+F:J*(t-=G)*t+H}function a(t){return((t*=2)<=1?1-s(1-t):s(t-1)+1)/2}function f(t){return 1-s(1-t)}function h(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function M(t){return Math.sqrt(1- --t*t)}function p(t){return 1-Math.sqrt(1-t*t)}function l(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function b(t){return 1-Math.pow(2,-10*t)}function d(t){return Math.pow(2,10*t-10)}function w(t){return(1-Math.cos(K*t))/2}function y(t){return Math.sin(t*L)}function x(t){return 1-Math.cos(t*L)}function _(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function v(t){return--t*t*t+1}function q(t){return t*t*t}function g(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function k(t){return t*(2-t)}function m(t){return t*t}function j(t){return t=P(t,3),function(n){return((n*=2)<=1?Math.pow(n,t):2-Math.pow(2-n,t))/2}}function O(t){return t=P(t,3),function(n){return 1-Math.pow(1-n,t)}}function I(t){return t=P(t,3),function(n){return Math.pow(n,t)}}var N=1/(2*Math.PI),P=function(t,n){return null==t||isNaN(t)?n:+t},E=4/11,z=6/11,A=8/11,B=.75,C=9/11,D=10/11,F=.9375,G=21/22,H=63/64,J=1/E/E,K=Math.PI,L=K/2,Q=(new Map).set("linear-in",n).set("linear-out",n).set("linear-in-out",n).set("quad-in",m).set("quad-out",k).set("quad-in-out",g).set("cubic-in",q).set("cubic-out",v).set("cubic-in-out",_).set("poly-in",q).set("poly-out",v).set("poly-in-out",_).set("sin-in",x).set("sin-out",y).set("sin-in-out",w).set("exp-in",d).set("exp-out",b).set("exp-in-out",l).set("circle-in",p).set("circle-out",M).set("circle-in-out",h).set("bounce-in",f).set("bounce-out",s).set("bounce-in-out",a).set("back-in",c()).set("back-out",o()).set("back-in-out",r()).set("elastic-in",i()).set("elastic-out",u()).set("elastic-in-out",e()),R=(new Map).set("poly-in",I).set("poly-out",O).set("poly-in-out",j).set("back-in",c).set("back-out",o).set("back-in-out",r).set("elastic-in",i).set("elastic-out",u).set("elastic-in-out",e),S=function(t,e,u){var i=(t+="").indexOf("-");return 0>i&&(t+="-in"),arguments.length>1&&R.has(t)?R.get(t)(e,u):Q.get(t)||n};t.ease=S});



var margin = {top: 120, right: 330, bottom: 120, left: 330},
    width = 960 - margin.left - margin.right,
    height = 540 - margin.top - margin.bottom;

var tickFormat = d3.format(".1f");

var y = d3.scale.linear()
    .domain([-10, 10])
    .range([height, 0]);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .tickSize(-width)
    .tickFormat(function(d, i) { return i & 1 ? null : tickFormat(d); })
    .tickPadding(8);

var x = d3.scale.linear()
    .domain([-10, 10])
    .range([0, width]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .tickSize(-height)
    .tickFormat(function(d, i) { return i & 1 ? null : tickFormat(d); })
    .tickPadding(8);

var path = d3.svg.line();

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

svg.append("rect")
    .attr("class", "background")
    .attr("width", width)
    .attr("height", height);

svg.append("g")
    .attr("class", "axis axis--x")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
  .append("text")
    .attr("class", "axis-title")
    .attr("x", width - 10)
    .attr("y", 8)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("t = ");

svg.append("g")
    .attr("class", "axis axis--y")
    .call(yAxis)
  .append("text")
    .attr("class", "axis-title")
    .attr("x", -24)
    .attr("dy", ".32em")
    .style("text-anchor", "end")
    .text("ease(t) = ");

var line = svg.append("g")
    .attr("class", "line")
  .append("path");

var select = d3.select("#ease-type")
    .on("change", changed)
    .property("value", top.location.hash ? top.location.hash.slice(1) : "linear-in")
    .each(changed);

function changed() {
  var e = ease.ease(this.value);
  line.attr("d", path(d3.range(-10, 10, .01).concat(5).map(function(t) {
    return [x(t), y(e(t))];
  })));
}

d3.select(self.frameElement).style("height", height + margin.top + margin.bottom + "px");
//# sourceMappingURL=Math02.js.map