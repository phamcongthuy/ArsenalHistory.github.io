$(document)
    .ready(function() {
      $('.responsive-img[data-src]')
          .each(function() { $(this)
                                 .attr('src', $(this).data('src')); });
    });
