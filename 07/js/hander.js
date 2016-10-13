$(document).ready(function(){
    
    $('#btn1').click(function(){
        $('h1').text(function(i, origi){
            return origi + "with Igneus! ";         
        });
    });
    
    $('#btn2').click(function(){
        $('h1').html('<i>I love you</i>')
    })
    
    $('#btn3').click(function(){
        $('#input').val('Viet Nam')
    })
    
    $('#btn4').click(function(){
        $('a').attr({
            'href': 'http://www.24h.com.vn/',
            'title': 'Going to Bing Site'
        });     
    });
});