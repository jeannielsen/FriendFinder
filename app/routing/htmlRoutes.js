// Dependencies, includes the path to get the correct file for the html

var path = require("path");


// ROUTING

module.exports = function(app) {
  // html GET Requests
  // In each of the below cases the user is shown an HTML page of content

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
