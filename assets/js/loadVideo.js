$(document)
    .ready(function() {
      $('.activator')
          .click(function() {
            var videoid = $(this).data("id");
            var frame = $("#" + videoid);
            if (frame.attr("src") === undefined) {
              frame.attr("src", frame.data("video"));
            }
          });
    });
