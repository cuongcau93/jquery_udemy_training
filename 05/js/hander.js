$(document).ready(function(){
   $('h1').click(function(){
       $('.sample').css('background','red')
           .slideUp(1000)
           .slideDown(1500);       
   }) ;
});