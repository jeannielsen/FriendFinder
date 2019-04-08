// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

var friends = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------


  app.post("/api/friends", function (req, res) {

    // find friend that is the best match
    // req.body is available since we're using the body parsing middleware

    // Receive user data (name, photo, scores)
    var user = req.body;

    // parseInt to parse the string of scores and turn into integers, loop through scores
    for (var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // set varibles for the friendIndex to zero, set var minimum to the maximum difference value (5-1 = 4 *10 questions)
    // minimum will change as lower total difference numbers come in from friend data
    var friendIndex = 0;
    var minimum = 40;

    // Use a for-loop, starting with 0 difference and compare the user and the friend scores, one set of scores at a time
    //  whatever the difference is, add to the total difference.  Math.abs returns the absolute value of the number so there are no negative reults.
    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // if the new minimum is lower, it changes the friend index and set the new minimum for comparison.  The closest match will be the user with the least amount of difference.
      if (totalDifference < minimum) {
        friendIndex = i;
        minimum = totalDifference;
      }
    }

    // after finding match, add user to friend array
    friends.push(user);

    // send back the friend match back to the html
    res.json(friends[friendIndex]);
  });
};

