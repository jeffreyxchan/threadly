let main = () => {
  // get all comments in database
  $.ajax({ url: '/comments', type: 'GET', dataType: 'json' }).done(data => {
    for (let comment of data) {
      let html = $('<li>').text(comment.comment)
      html.prependTo('#comments')
    }
    $('.comments li').click(deleteComment)
  })

  $('form').submit(event => {
    let input = $(event.target).find('input')
    let comment = input.val()

    $.ajax({ url: '/comments', type: 'POST', dataType: 'json', data: comment }).done(() => {
      let html = $('<li>').text(comment)
      $(html).click(deleteComment)
      html.prependTo('#comments')
      input.val('')
    })

    return false
  })

  function deleteComment() {
    $.ajax({ url: '/comments', type: 'DELETE', data: $(this)[0].innerHTML }).done()
    $(this).remove()
  }
}

$(document).ready(main)
