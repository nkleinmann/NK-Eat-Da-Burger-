$(function() {
    // const submitButn = $("button.submit");
    // const burgerInput = $("button.input");
    // let burgerVal = "";


    // submitButn.on("click", function() {
    //     console.log("clicked");
    //     burgerVal = burgerInput.val();

    //     $.post(
    //         "/api/burgers",
    //         // method: "POST",
    //         {
    //             name: burgerVal  
    //         }
    //     )
    //     .then(function(response) {
    //         console.log(response);
    //     })
    // });

    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevoured");
    
        var newDevouredState = {
          devour: newDevour
        };
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevourState
        }).then(
          function() {
            console.log("changed devour to", newDevour);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
      $(".submit").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $(".input").val().trim(),
          sleepy: $("[name=devour]:checked").val().trim()
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burgr");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
      $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted burger", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

    
})