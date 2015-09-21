/**!
 * Created by Mauricio Dulce on 7/31/15.
 */
'use strict';


$(window).on('scroll resize', function () {
  var $window = $(window);
  var windowTop = $window.scrollTop();
  var windowHeight = $window.height();

  $('.js--scroll').each(function () {
    var $parent = $(this).parent();

    var parentHeight = $parent.height();

    // scrolltop when window bottom crosses top of parent
    var startScrollTop = $parent.offset().top;

    // distance scrolled when element is in viewport
    var parallaxDistance = windowHeight + parentHeight;

    // max distance to transform element
    var parallaxMax = $(this).outerHeight() / 3;

    var parallaxPercent = ((windowTop - startScrollTop - (parallaxMax / 2)) / parallaxDistance);

    var boundedPercent = Math.max(-1, Math.min(1, parallaxPercent));

    $(this)
      .css({
        'transform': 'translateY(' + (boundedPercent * parallaxMax) + 'px)'
      });
  });

});
/* jshint ignore:start */
//
// ul-select
// https://github.com/zgreen/ul-select
//

$.fn.ulSelect = function(){
  var ul = $(this);

  if (!ul.hasClass('zg-ul-select')) {
    ul.addClass('zg-ul-select');
  }
  // SVG arrow
  $('li:first-of-type', this).addClass('active');
  $(this).on('click', 'li', function(event){

    // Remove div#selected if it exists
    if ($('#selected--zg-ul-select').length) {
      $('#selected--zg-ul-select').remove();
    }
    ul.before('<div id="selected--zg-ul-select">');
    var selected = $('#selected--zg-ul-select');
    $('li #ul-arrow', ul).remove();
    ul.toggleClass('active');
    // Remove active class from any <li> that has it...
    ul.children().removeClass('active');
    // And add the class to the <li> that gets clicked
    $(this).toggleClass('active');

    var selectedText = $(this).text();
    if (ul.hasClass('active')) {
      selected.text(selectedText).addClass('active');
    }
    else {
      selected.text('').removeClass('active');
      $('li.active', ul);
    }
  });

  // Close the faux select menu when clicking outside it
  $(document).on('click', function(event){
    if($('ul.zg-ul-select').length) {
      if(!$('ul.zg-ul-select').has(event.target).length == 0) {
        return;
      }
      else {
        $('ul.zg-ul-select').removeClass('active');
        $('#selected--zg-ul-select').removeClass('active').text('');
        $('#ul-arrow').remove();
        $('ul.zg-ul-select li.active');
      }
    }
  });
}

// Run
$('#be-select').ulSelect();


$('ul.tabs').each(function(){
  var $active, $content, $links = $(this).find('a');

  $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
  $active.addClass('active');

  $content = $($active[0].hash);

  $links.not($active).each(function () {
    $(this.hash).hide();
  });

  $(this).on('click', 'a', function(e){
    $active.removeClass('active');
    $content.hide();

    $active = $(this);
    $content = $(this.hash);

    $active.addClass('active');
    $content.show();

    e.preventDefault();
  });
});
/* jshint ignore:end */
jQuery(document).ready(function(){
  var altura = jQuery('.main-header').offset().top;

  jQuery(window).on('scroll', function(){
    if ( jQuery(window).scrollTop() > altura ){
      jQuery('.main-header').addClass('header-fixed');
    } else {
      jQuery('.main-header').removeClass('header-fixed');
    }
  });

});
