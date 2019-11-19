AOS.init();


// smooth scroll

$('a[href*="#"]').click(function(event){
  
  // prevent defalt click behavior
  // don't jump to content
  event.preventDefault();
    
  // identify position of target
  var target = $(this).attr('href');
  var top = $(target).offset().top;

  // animate scroll to target
  $('html,body').animate({
    scrollTop: top
    },500);

});

//


// faq

 function pageLoad() {

        $('#div1').hide();
  }


$(document).ready(function(){
  $(".b1").click(function(){
    $("#div1").fadeToggle();
  });
});

$(document).ready(function(){
  $(".b2").click(function(){
    $("#div2").fadeToggle();
  });
});

$(document).ready(function(){
  $(".b3").click(function(){
    $("#div3").fadeToggle();
  });
});

$(document).ready(function(){
  $(".b4").click(function(){
    $("#div4").fadeToggle();
  });
});

$(document).ready(function(){
  $(".b5").click(function(){
    $("#div5").fadeToggle();
  });
});

$(document).ready(function(){
  $(".b6").click(function(){
    $("#div6").fadeToggle();
  });
});