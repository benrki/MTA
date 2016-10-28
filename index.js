var subwayLines = {
  N:   ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L:   ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var intersection = "Union Square";

function getSubwayMapForLine(line) {
  return subwayLines[line];
}

function logTrip(line, start, end) {
  if (start < end) {
    // Traverse forward direction without logging the first stop
    for (var i = start + 1; i <= end; i++) {
      console.log(line[i]);
    }
  } else {
    // Traverse backward direction without logging the first stop
    for (var i = start - 1; i >= end; i--) {
      console.log(line[i]);
    }
  }
}

function planTrip(startLine, startStation, endLine, endStation) {
  var startMap   = getSubwayMapForLine(startLine);
  var endMap     = getSubwayMapForLine(endLine);
  var startIndex = startMap.indexOf(startStation);
  var endIndex   = endMap.indexOf(endStation);

  if (startLine === endLine) {
    // We only need to log the distance between start and end
    logTrip(startMap, startIndex, endIndex);
  } else {
    // Find distance from start station to union square
    logTrip(startMap, startIndex, startMap.indexOf(intersection));
    // Find distance from union square to end station
    logTrip(endMap, endMap.indexOf(intersection), endIndex);
  }
}

var testCases = [
  ["N", "Times Square", "6", "33rd"],
  ["6", "33rd", "N", "Times Square"],
  ["6", "Grand Central", "6", "Grand Central"],
  ["6", "Grand Central", "L", "1st"],
  ["L", "8th", "6", "Astor Place"],
  ["L", "8th", "6", "Grand Central"]
];

testCases.forEach(function(t, i) {
  console.log("Test Case", i + ":", t[0], t[1], "to", t[2], t[3]);
  planTrip(t[0], t[1], t[2], t[3]);
  console.log("===");
  console.log("");
});

