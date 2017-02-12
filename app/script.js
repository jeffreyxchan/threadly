var main = function() {
    // get all comments in database
    $.ajax({
        url: '/comments',
        type:'GET',
        dataType: 'json',
        success: function (data) {
            for (var k = 0; k < data.length; k++) {
                var html = $('<li>').text(data[k].comment);
                html.prependTo('#comments');
            }
            $('.comments li').click(deleteComment);
        }
    });
    
    $('form').submit(function (event) {
        var $input = $(event.target).find('input');
        var comment = $input.val();
        
        $.ajax({
            url: '/comments',
            type:'POST',
            dataType: 'json',
            data: comment,
            success: function () {
                var html = $('<li>').text(comment);
                html.prependTo('#comments');
                $input.val("");
                $('.comments li').click(deleteComment);
            }
        });
        return false; // bypasses common browser actions
    });
    
    function deleteComment () {
        $.ajax({
            url: '/comments',
            type: 'DELETE',
            data: $(this)[0].innerHTML
        });
        $(this).remove();
    };
}

$(document).ready(main);