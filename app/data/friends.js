// DATA
// Below data will hold all the data for the friends in the database

var friendArray = [
  {
    name: "Becky",
    photo: "../images/Becky.jpg",
    scores: [3,	3,	3,	4,	3,	5,	4,	2,	2,	4],
  },

  {
    name: "BigBob",
    photo: "../images/BigBob.jpg",
    scores: [4,	2,	1,	1,	4,	2,	3,	4,	1,	3]
  },

  {
    name: "Chad",
    photo: "../images/Chad.jpg",
    scores: [5,	3,	2,	3,	3,	3,	5,	3,	3, 3]
  },

  {
    name: "Ellie",
    photo: "../images/Ellie.jpeg",
    scores: [3,	3,	4,	4,	3,	4,	2,	3,	2,	3]
  },

  {
    name: "Freddie",
    photo: "../images/Freddie.jpeg",
    scores: [1,	5,	5,	2,	5,	2,	1,	5,	5,	1]
  },

  {
    name: "Kyle",
    photo: "../images/Kyle.jpg",
    scores: [4,	3,	2,	3,	3,	3,	5,	4,	3,	2]
  },

  {
    name: "LizAndCharles",
    photo: "../images/LizAndCharles.png",
    scores: [2,	4,	4,	4,	5,	2,	2,	5,	4,	2]
    },

  {
    name: "Misha",
    photo: "../images/Misha.jpg",
    scores: [5,	2,	1,	2,	3,	4,	1,	2,	2,	3]
  },

  {
    name: "Ralph",
    photo: "../images/Ralph.jpg",
    scores: [3,	3,	5,	5,	2,	2,	1,	1,	3,	2]
  },

  {
    name: "Trevor",
    photo: "../images/Trevor.jpeg",
    scores: [4,	2,	1,	2,	3,	5,	3,	3,	4,	5]
  },


];



// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
