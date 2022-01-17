$("#alert").hide();

$("#send").on("click", function(e){
  e.preventDefault();
  
  var name = $("#name").val();
  var email = $("#email").val();
  var country = $("#country").val();
  var message = $("#message").val();
  var rating = $("input[name=rating]:checked").val();

  var today = new Date();
  var time = today.toDateString();

  if (email.length == 0 || name.length == 0 || message.length == 0 || country.length == 0 || rating == undefined) {

    $("#alert").show();

  } else {

    $("#alert").hide();

    var rating_html = '';
    for(var i=1; i <= rating; i++) {
      rating_html += '<img src="star.png" width="15" height="15" alt="star rating">';
    }

    $("#review").append('<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-12 mt-2 mb-2">' +
      '<div class="card">' +
        '<div class="card-body">'+
            '<h5 class="card-title">'+country+'</h5>'+
          '<h6 class="card-subtitle mb-2 text-muted">'+name+'</h6>' +
          '<p class="card-text">'+message+'</p>'+
          '<a href="#">'+email+'</a>' +
          '<p id="time">'+time+'</p>' +
          '<p class="text-right">'+rating_html+'</p>'+
        '</div>'+
      '</div>'+
      '</div>');
  }
});