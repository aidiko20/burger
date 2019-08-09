$(function(){
    $(".change-devoured").on("click", function(event){
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: newdevoured
        };
        $.ajax("api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("You devoured ", newdevoured);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event){
        event.preventDefault();
        var newBurger = {
            name: $("#burga").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
        };

        $.ajaz("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Made new burger");
                location.reload();
            }
        );
    });
    $(".trashbutton").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then (
            function() {
                console.log("Deleted burger", id);
                location.reload();
            }
        );
    });
});