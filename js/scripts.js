$(document).ready(function() {
  var height = parseInt(prompt('Please enter your height in inches.'));
  console.log();
  if (height < 36) {
    $('.short').css("background-color", "yellow");
  } else if (height < 48) {
    $('.medium').css("background-color", "yellow");
  } else {
    $('.tall').css("background-color", "yellow");
  }
});
