var url = require('url');
var adr = "http://localhost:8080/default.htm?year=2017&month=february";
// parse the address

var q = url.parse(adr,true);
// The parse method returns an object containing URL properties;
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

// the query property returns an object with all querystring parameters as proper.
var data = q.query;
console.log(qdata.month);