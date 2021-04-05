jQuery(document).ready(function() {

  // NO STICKY HEADER in ACCOUNT or CART
  if( currentPageInfo.module != 'cart' && currentPageInfo.module != 'account' ){

    // JS TO SHOW STICKY NAV BAR WENN HEADER IS GONE ONLY FOR BIG SCREENS
    if (window.matchMedia('screen and (min-width: 768px)').matches){
      var header = jQuery('.snbl').offset().top;
      jQuery(window).scroll(function () {
        if( jQuery(window).scrollTop() > header ) {
          jQuery('#sticky-nav-bar').css('display','block');
        } else {
          jQuery('#sticky-nav-bar').css('display','none');
        }
      });
    }
  }

});