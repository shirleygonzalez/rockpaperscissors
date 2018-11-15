// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

var userChoice ;

$("#shoot").click(function(){
    userChoice = $("#input").val();
     $("#userChoice").text(userChoice);
     
});

var computerChoice;

$("#shoot").click(function(){
    
     var randomAnswer;
     randomAnswer= Math.random();
     if (randomAnswer <.33){
        $("#computerChoice").text("Rock");}
    else if(randomAnswer<.66){
        $("#computerChoice").text("Paper");}
    else {
        $("computerChoice").text("Scissor")
    }


});


