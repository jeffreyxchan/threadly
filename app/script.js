var main = function() {
    
    $('form').submit(function (event) {             // selects form elem and ties an event to it
        var $input = $(event.target).find('input'); // store input in a variable
        var comment = $input.val();                 // stores inputs value into comment
        
        if (comment != "") {                        // if not empty string
            var html = $('<li>').text(comment);     // creates an <li> element with comment inside of it
            html.prependTo('#comments');            // prepend to the comments ul
            $input.val("");                         // set value to empty string
        }
        
        return false;                               // bypasses common browser actions
    });
}

$(document).ready(main);