$(document).ready(function(){

    // Navbar area
    $(".header-area").sticky({topSpacing:0 });

    // Smooth Scroll
    $('li.smooth-menu a').bind('click', function(event){
        var $anchor = $(this);
        var headerH = '55';
        $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });

    // jquery scroll psy
    $('body').scrollspy({
        target: '.navbar-collapse',
        offset: 95
    });

    $(".navbar-toggle").click(function(){
        $("body").addClass("mobile-menu-activated")
    });
    
    $("ul.nav.navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass("in")
    });


    // isotope code
    $('#gallery-active-item a').on('click', function(){
        //Assignment of the 'active' class on navigation
        $('#gallery-active-item li.active').removeClass('active');
        $(this).parent().addClass('active');

        //Getting the value of 'a' for images categories
        var $category = $(this).text().toLowerCase();

        if($category == 'all'){
            $('#gallery-single-all-item .hidden').fadeIn('slow').removeClass('hidden');

        }else{
            $('#gallery-single-all-item div').each(function(){
                if(!$(this).hasClass($category)){
                    $(this).hide().addClass('hidden');
                }else{
                    $(this).fadeIn('slow').removeClass('hidden');
                }
            });
        }
    });

    // Image popups
    $('#image-popups').magnificPopup({
      delegate: 'a',
      type: 'image',
      removalDelay: 500, //delay removal by X to allow out-animation
      callbacks: {
        beforeOpen: function() {
          // just a hack that adds mfp-anim class to markup 
           this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
           this.st.mainClass = this.st.el.attr('data-effect');
        }
      },
      closeOnContentClick: true,
      midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

        
});



  

