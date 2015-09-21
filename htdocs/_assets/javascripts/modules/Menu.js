/**
 * Created by mauriciodulce on 8/17/15.
 */
/* jshint ignore:start */
/*Phone Menu*/
function MainMenu() {
  "use strict";
  jQuery(".nav-trigger").on("click", function () {
    jQuery(this).toggleClass("active");
    if (jQuery(".submenu").is(":hidden")) {
      //jQuery(".nav-trigger").removeClass("active");
      jQuery(".submenu").slideDown("fast");
    } else {
      jQuery(".submenu").slideUp("fast");
      //jQuery(".nav-trigger").addClass("active");
    }
    return false;
  });
  /*Menu*/
  jQuery(".topnav").accordion({
    accordion: false,
    speed: 300,
    closedSign: "&#xe612;",
    openedSign: "&#xe613;"
  });
  /*Menu desktop*/
  jQuery("#nav > li").hover(function () {
    var el = jQuery(this).find(".level2-wrapper");
    el.hide();
    el.css("left", "0");
    el.stop(true, true).delay(150).fadeIn(300);
  }, function () {
    jQuery(this).find(".level2-wrapper").stop(true, true).fadeOut();
  });

  jQuery(function() {
    jQuery('.box-country > ul').toggleClass('no-js js');
    jQuery('.box-country .js ul').hide();
    jQuery('.box-country .js').click(function(e){
      jQuery('.box-country .js ul').slideToggle(200);
      jQuery('.clicker').toggleClass('active');
      e.stopPropagation();
    });
    jQuery(document).click(function() {
      if (jQuery('.box-country .js ul').is(':visible')) {
        jQuery('.box-country .js ul', this).slideUp();
        jQuery('.clicker').removeClass('active');
      }
    });
  });

  jQuery(function() {
    jQuery('.box-store > ul').toggleClass('no-js js');
    jQuery('.box-store .js ul').hide();
    jQuery('.box-store .js').click(function(e){
      jQuery('.box-store .js ul').slideToggle(200);
      jQuery('.clicker').toggleClass('active');
      e.stopPropagation();
    });
    jQuery(document).click(function() {
      if (jQuery('.box-store .js ul').is(':visible')) {
        jQuery('.box-store .js ul', this).slideUp();
        jQuery('.clicker').removeClass('active');
      }
    });
  });
}

var isTouchDevice = 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;
jQuery(window).on("load", function () {
  if (isTouchDevice) {
    jQuery('#nav a.level-top').on("click", function (e) {
      //jQueryt = jQuery(this);
      //jQueryparent = jQueryt.parent();
      if (jQueryparent.hasClass('parent')) {
        if (!jQueryt.hasClass('menu-ready')) {
          jQuery('#nav a.level-top').removeClass('menu-ready');
          jQueryt.addClass('menu-ready');
          return false;
        } else {
          jQueryt.removeClass('menu-ready');
        }
      }
    });
  }
});
/* Responsive Nav */
(function (jQuery) {
  "use strict";
  jQuery.fn.extend({
    accordion: function accordion(options) {
      var defaults = {
        accordion: "true",
        speed: 300,
        closedSign: "[&#xe612;]",
        openedSign: "[&#xe613;]"
      };
      var opts = jQuery.extend(defaults, options);
      var jQuerythis = jQuery(this);
      jQuerythis.find("li").each(function () {
        if (jQuery(this).find("ul").size() !== 0) {
          jQuery(this).find("a:first").after("<em>" + opts.closedSign + "</em>");
          if (jQuery(this).find("a:first").attr("href") === "#") {
            jQuery(this).find("a:first").on("click", function () {
              return false;
            });
          }
        }
      });
      jQuerythis.find("li em").on("click", function () {
        if (jQuery(this).parent().find("ul").size() !== 0) {
          if (opts.accordion) {
            //Do nothing when the list is open
            if (!jQuery(this).parent().find("ul").is(":visible")) {
              //parents = jQuery(this).parent().parents("ul");
              //visible = jQuerythis.find("ul:visible");
              visible.each(function (visibleIndex) {
                var close = true;
                parents.each(function (parentIndex) {
                  if (parents[parentIndex] === visible[visibleIndex]) {
                    close = false;
                    return false;
                  }
                });
                if (close) {
                  if (jQuery(this).parent().find("ul") !== visible[visibleIndex]) {
                    jQuery(visible[visibleIndex]).slideUp(opts.speed, function () {
                      jQuery(this).parent("li").find("em:first").html(opts.closedSign);
                    });
                  }
                }
              });
            }
          }
          if (jQuery(this).parent().find("ul:first").is(":visible")) {
            jQuery(this).parent().find("ul:first").slideUp(opts.speed, function () {
              jQuery(this).parent("li").find("em:first").delay(opts.speed).html(opts.closedSign);
            });
          } else {
            jQuery(this).parent().find("ul:first").slideDown(opts.speed, function () {
              jQuery(this).parent("li").find("em:first").delay(opts.speed).html(opts.openedSign);
            });
          }
        }
      });
    }
  });
})(jQuery);
MainMenu();
/* jshint ignore:end */


