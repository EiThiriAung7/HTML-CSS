 
  let index = 0;
  const totalWorkItems = $(".work-item").length; 

   $(window).on("load",function(){
      $(".preloader").addClass("loaded");
   })

  $(document).ready(function () {

    // nav toggle
    $(".nav-toggle").click(function(){
      $(".overlay").fadeToggle(200);
      $(this).toggleClass('btn-open').toggleClass('btn-close');
  });

  if($(window).width() < 700){
      //run slideshow
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
  }, 2000);
     
 }



    // click project title
    $(".projects").click(function(){
      $(".project-image-list").fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');;
  });


    // fixed header 
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
        $("#logo-icon").attr("src","img/spiceworks_logo.png");

      }
      else{
        $(".header").removeClass("fixed");
        $("#logo-icon").attr("src","img/spiceworks_white_logo.png");
        
      }
    })


    // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
    

  })

  $('.overlay').on('click', function(){
    $(".overlay").fadeToggle(200);   
    $(".button a").toggleClass('btn-open').toggleClass('btn-close');
    open = false;
});
$('.project-title-item[id^="title-"]').on('click', function(){
  $(this).css("background-color", "yellow");

  // $('.project-title-container div').each(function(){
  //   $(this).css("background-color", "red");
  //   alert(this.text + ' ' + this.value);
  // });
});






