$(document).ready( function () {
  $('#request-lesson-18').click( function () {
    $.ajax({
      url: '/vocab/lesson-18',
      type: "GET",
      dataType: "json",
      success: function (data) {
          game_data = data;
          startGame();
      },
      error: function (error) {
          console.log(`Error ${error}`);
      }
    });
  });
});
