$(document)
    .ready(function() {
      $('.responsive-img[lsrc]')
          .each(function() { $(this)
                                 .attr('src', $(this).attr('lsrc')); });
    });
