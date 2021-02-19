

$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#new-burger").val().trim(),
      devoured: 0
    };

    // Send the POST request to add a new burger
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(function () {
      
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Devouring burger and changing value to true
  $(".change-devoured").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var id = $(this).data("id");
    var devoured = $(this).data("newdevoured");
    var devouredState = {
      devoured: !devoured
    };

    // Send the PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState
    }).then(function () {
      console.log("Burger devoured!");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  // Deleting burger
  $(".change-devoured[data-newdevoured='true']").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax({
      type: "DELETE",
      url: "/api/burgers/" + id
    }).then(function () {
      console.log("Burger deleted!");
      // Reload the page to get the updated list
      location.reload();
    });
  })
});
