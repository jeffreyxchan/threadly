let main = () => {

  $.ajax({ url: 'https://threadly-on-node.herokuapp.com/comments', type:'GET', dataType: 'json' })
    .done((data) => {
      for (let comment of data) {
        let html = $('<li>').text(comment.comment);
        html.prependTo('#comments');
      }
      $('.comments li').click(deleteComment);
    })

  $('form').submit(function (event) {
    let $input = $(event.target).find('input')
    let comment = $input.val()

    if (comment !== "") {
      let html = $('<li>').text(comment)
      $(html).click(deleteComment)
      html.prependTo('#comments')
      $input.val("")
    }

    return false
  })

  function deleteComment () {
    $.ajax({ url: 'https://threadly-on-node.herokuapp.com/comments', type: 'DELETE', data: $(this)[0].innerHTML })
    $(this).remove()
  }
}

$(document).ready(main)
