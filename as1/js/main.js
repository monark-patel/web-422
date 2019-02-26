/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Monark Patel Student ID: 135845162 Date: 09-14-2018
*
********************************************************************************/ 

$(function(){

    $(".dropdown-menu")
    .on("click", "#teams-menu", function(event){
        event.preventDefault();

        $.ajax({
            url: "https://web422a1.herokuapp.com/teams",
            type: "GET",
            contentType: "application/json"
            
        })
        .done(function(teams){
            var $data= $("#data");
            $data.empty();
            $data.append("<h3>Teams</h3>");
            $data.append(JSON.stringify(teams));
        })
        .fail(function(err){
            console.log("failed with: " +err);
        })
    })
//});

//$(function(){

//$(".dropdown-menu")
.on("click", "#employees-menu", function(event){
    event.preventDefault();

    $.ajax({
        url: "https://web422a1.herokuapp.com/employees",
        type: "GET",
        contentType: "application/json"

    })
    .done(function(employees){
        var $data= $("#data");
        $data.empty();
        $data.append("<h3>Employees</h3>");
        $data.append(JSON.stringify(employees));
    })
    .fail(function(err){
        console.log("failed with: " +err);
    })
})

.on("click", "#projects-menu", function(event){
    event.preventDefault();

    $.ajax({
        url: "https://web422a1.herokuapp.com/projects",
        type: "GET",
        contentType: "application/json"

    })
    .done(function(projects){
        var $data= $("#data");
        $data.empty();
        $data.append("<h3>Projects</h3>");
        $data.append(JSON.stringify(projects));
    })
    .fail(function(err){
        console.log("failed with: " +err);
    })
})

.on("click", "#positions-menu", function(event){
    event.preventDefault();

    $.ajax({
        url: "https://web422a1.herokuapp.com/positions",
        type: "GET",
        contentType: "application/json"

    })
    .done(function(positions){
        var $data= $("#data");
        $data.empty();
        $data.append("<h3>Positions</h3>");
        $data.append(JSON.stringify(positions));
    })
    .fail(function(err){
        console.log("failed with: " +err);
    })
})
});
//});