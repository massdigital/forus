/**
 * Created by Mauricio Dulce on 9/2/15.
 */
jQuery(document).ready(function() {
  "use strict";
  function closeAccordionSection() {
    jQuery(".js--accordion .js--section-title").removeClass("active");
    jQuery(".js--accordion .js--section-content").slideUp(300).removeClass("open");
  }

  jQuery(".js--section-title").click(function(e) {
    // Grab current anchor value
    var currentAttrValue = jQuery(this).attr("href");

    if(jQuery(e.target).is(".active")) {
      closeAccordionSection();
    }else {
      closeAccordionSection();

      // Add active class to section title
      jQuery(this).addClass("active");
      // Open up the hidden content panel
      jQuery(".js--accordion " + currentAttrValue).slideDown(300).addClass("open");
    }

    e.preventDefault();
  });
});
