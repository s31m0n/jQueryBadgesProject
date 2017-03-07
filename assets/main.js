$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/s31m0n.json',
    dataType: 'jsonp',
    success: function(response) {
      console.log('response', response);

    }
  });

});
