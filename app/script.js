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
            }
        });
        
        return false; // bypasses common browser actions
    });
}

$(document).ready(main);