$(function(){
   $('#btn1').click(function(){
       $('div').addClass('center');
   }) 
});

//remove Class
$(function(){
    $('#btn2').click(function(){
        $('div').toggleClass('center');
    })
})