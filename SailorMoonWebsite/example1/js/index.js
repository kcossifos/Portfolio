
$(document).ready(function(){

  for(var i = 0;i<60;i++){
    $('.container1').append('<div class="seconds" />');
  }

  for(var i = 0;i<60;i++){
    $('.container2').append('<div class="minutes" />');
  }

  var degree = 264;
  for(var i = 1;i<61;i++){
    degree=degree+6;
    $('.seconds:nth-child('+i+')').css({'-webkit-transform' : 'rotate('+degree+'deg) translatex(220px)',
      'opacity' : '0.1'}); 
  }  

  var degree2 = 264;
  for(var i = 1;i<61;i++){
    degree2=degree2+6;
    $('.minutes:nth-child('+i+')').css({'-webkit-transform' : 'rotate('+degree2+'deg) translatex(160px)',
      'opacity' : '0.1'}); 
  }



  var interval = setInterval(function(){
  var date = new Date($.now());

  var weekDay = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
      $('contain').text(weekDay);



    if(date.getHours()>24){
      var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      var hour = date.getHours();
    }else{
      var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      var hour = date.getHours();
    }
    
    var mins = date.getMinutes();
    var secs = date.getSeconds();


    for(var i = 1;i<=secs+1;i++){
      if(secs===0){
        $('.seconds').css({'opacity' : '0.1'}); 
      }
      $('.seconds:nth-child('+i+')').css({'opacity' : '1'}); 
    }

    for(var i = 1;i<=mins+1;i++){
      if(mins===0){
        $('.minutes').css({'opacity' : '0.1'}); 
      }
      $('.minutes:nth-child('+i+')').css({'opacity' : '1'}); 
    } 
   
    $('.contain').text(weekDay);
    $('.time').text(time);},1000);
});






