$(document).ready(function(){
 var i = 1;
  $('p').text('Magic!')
.css('background-color', 'orange');

$("button").click(function()
{
  $("h2").hide();
  $('p')
 .css('background-color','blue')
 .css('color','red');
 jQuery("button").text('You Succesfully clicked me!');
});
jQuery("button").click(function()
 {
  var name = jQuery(".name-input").val();
  alert( "Hey " + name + " You clicked this button " + i + " Times now!");
 //Clears the input every time the button is clicked.
  //$(".name-input").val('');
  i++;
});


});
