$(function() {
  function buildHTML(message){

  var html = `<div class="message" data-id=${message.id}>
        <div class="upper-message">
          <div class="upper-message__user-name">
            ${ message.user_name }
          </div>
          <div class="upper-message__date">
            ${ message.time }
          </div>
        </div>
        <div class="lower-message">
        <p class="lower-message__content">
          ${ message.content }
        </p>
      </div>
    </div>`;
    return html;
  }

  function scrollToNewestMessage() {
      $('.chat .messages').animate({scrollTop: $('.chat .messages')[0].scrollHeight},'fast')
  }

  $('#new_message').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(new_message){
     var html = buildHTML(new_message);
     $('#new_message')[0].reset();
      $('.messages').append(html);
      $('.form__message').val('');
      $('.form__submit').prop('disabled', false);
      scrollToNewestMessage()
    })
    .fail(function(){
        alert('error')
        $('.form__submit').prop('disabled', false);
    })
  });

  function scrollToNewestMessage() {
      $('.chat .messages').animate({scrollTop: $('.chat .messages')[0].scrollHeight},'fast')
  }

  var interval = setInterval(function() {
    if (location.href.match(/\/groups\/\d+\/messages/)){
      var message_id = $('.message').last().data('id');
      $.ajax({
        url: location.href,
        type: "GET",
        data: {id: message_id},
        dataType: "json"
      })
      .done(function(data){
        data.forEach(function(message){
          var html = buildHTML(message);
          $('.messages').append(html);
          scrollToNewestMessage()
        })
      })
      .fail(function(data){
        alert('error')
        $('.form__submit').prop('disabled', false);
      });
    } else {
      clearInterval(interval);
    }
  }, 5000 );
});
