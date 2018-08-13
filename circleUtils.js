var title = "Circle Utility";
var pi = 3.14159;

var calcCircleArea = function (radius) {
  return pi * radius * radius;
};

module.exports.pi = pi;
module.exports.calcCircleArea = calcCircleArea;
module.exports.title = title;