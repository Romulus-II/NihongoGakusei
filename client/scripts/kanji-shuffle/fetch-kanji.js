$(document).ready( function () {
  $('#request-full').click( function () {
    $.ajax({
      url: '/users',
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
