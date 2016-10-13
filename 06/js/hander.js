$(document).ready(function(){
    $('#btn1').click(function(){
        let a = $('h1').text();
        alert('Text is: '+a);
    });
    
    $('#btn2').click(function(){
        let a = $('h1').html();
        alert('HTML is: '+a);
    });
    
    $('#btn3').click(function(){
        let a = $('#input').val();
        alert('Value: '+a);
    })
    
    $('#btn4').click(function(){
        let a = $('a').attr('href')
        alert(a);
    })
    
    $('a').hover(function(){
        $(this).css('background-color','red');
    },function(){
        $(this).css('background-color','#f44336');
    });
});