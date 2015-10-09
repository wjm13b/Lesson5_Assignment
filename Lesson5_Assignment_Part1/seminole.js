/**
* Created with Lesson5_Assignment_Part1.
* User: wjm13b
* Date: 2015-10-05
* Time: 11:00 PM
* To change this template use Tools | Templates.
*/

// Program Name: Seminole Trojans
// Program topics: Variables, Functions, Arrays, Loops
// Author: William Mang
// Date: October 5 2015
// Filename: seminole.js

// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                  "Thursday","Friday", "Saturday"];

// global variables
var opponents = ["Lightning", "Combines", "Combines", 
    "Combines", "Lightning", "Lightning", "Lightning", 
    "Lightning", "Barn Raisers", "Barn Raisers", 
    "Barn Raisers", "Sodbusters", "Sodbusters", "Sodbusters",
    "Sodbusters", "(off)", "River Riders", "River Riders", 
    "River Riders", "Big Dippers", "Big Dippers", 
    "Big Dippers", "(off)", "Sodbusters", "Sodbusters",
    "Sodbusters", "Combines", "Combines", "Combines", 
    "(off)", "(off)"];

// global variables
var gameLocation = 
   ["away", "away", "away", "away", "home", "home", "home",
    "home", "home", "home", "home", "away", "away", "away",
    "away", "", "away", "away", "away", "away", "away",
    "away", "", "home", "home", "home", "home", "home",
    "home", "", ""];

// function to place daysOfWeek values in header row cells 
function addColumnHeaders() {
   var i = 0;
   while (i < 7) {
      document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
      i++;
   }//end of while loop
}//end of function
window.addEventListener("load", addColumnHeaders, false);

// function to place day of month value in first p element 
// within each table data cell that has an id 
function addCalendarDates() {
    var i = 1;
    var paragraphs = "";
    do {
            var tableCell = document.getElementById("08-" + i);
            paragraphs = tableCell.getElementsByTagName("p");
            paragraphs[0].innerHTML = i;
            i++;
    } while (i <= 31);
}//end of function

// function to place opponents and gameLocation values in 
// second p element within each table data cell that has an id
function addGameInfo() {
   var paragraphs = "";
   for (var i = 0; i < 31; i++) {
        var date = i + 1;
        var tableCell = document.getElementById("08-" + date);
            paragraphs = tableCell.getElementsByTagName("p");
            if (gameLocation[i] === "away") {
            paragraphs[1].innerHTML = "@ ";
            }//end of if
            else if (gameLocation[i] === "home") {
                    paragraphs[1].innerHTML = "vs ";
            } 
      paragraphs[1].innerHTML += opponents[i];
   }
}//end of function

// function to populate calendar 
function setUpPage() {
   addColumnHeaders();   
   addCalendarDates();
   addGameInfo();
}//end of function

// runs setUpPage() function when page loads
window.addEventListener("load", setUpPage, false);