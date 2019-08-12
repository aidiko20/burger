$(function(){
    console.log("hello");
    $("#eatbutton").on("click", function(event){
        var id = $(this).data('id')
        // var newdevoured = $(this).data("newdevoured");

        console.log(id);
        var newDevouredState = {
            devoured: id
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                // console.log("You devoured ", newdevoured);
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

        $.ajax("/api/burgers", {
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