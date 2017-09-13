$(document).ready(function() {

    $("#formOne").submit(function(event) {
      var nameInput = $("input#name").val();
      var addressInput = $("input#address").val();
      var itemInput = $("input:radio[name=item]:checked").val();

      $(".name").text(nameInput);
      $(".address").text(addressInput);
      $(".item").text(itemInput)

      $("#receipt").show();

      event.preventDefault();
    });
});
