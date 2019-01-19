$(function() {
  function buildHTML(message){

var html = `<div class="message">
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
  })
})
