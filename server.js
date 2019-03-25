

var express = require("express");


var app = express();


var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var path = require("path");
var tableData = require("./app/data/friends");

require("./app/routes/apiRoutes")(app);
 require("./app/routes/htmlRoutes")(app);

 app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


// app.get("/api/tables", function(req, res) {
//     res.json(tableData);
//   });

 

//   // API POST Requests
//   // Below code handles when a user submits a form and thus submits data to the server.
//   // In each of the below cases, when a user submits form data (a JSON object)
//   // ...the JSON is pushed to the appropriate JavaScript array
//   // (ex. User fills out a reservation request... this data is then sent to the server...
//   // Then the server saves the data to the tableData array)
//   // ---------------------------------------------------------------------------

//   app.post("/api/tables", function(req, res) {
//     // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
//     // It will do this by sending out the value "true" have a table
//     // req.body is available since we're using the body parsing middleware
    
//       tableData.push(req.body);

//   });


//   app.get("/home", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/home.html"));
//   });

//   app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "./app/public/survey.html"));
//   });

//   app.get("/api/friends", function(req, res) {
//     res.send(tableData);
//   });

//   // If no matching route is found default to home
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//   });




