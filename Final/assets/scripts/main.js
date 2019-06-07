
console.log('hi');
// A $( document ).ready() block.
$(document).ready(function() {
    console.log( "ready!" );



    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    var waypoint = new Waypoint({
        element: document.querySelector('#yourturn'),
        handler: function(direction) {
            console.log(direction);
            if (direction === 'up') {
                $('#siteNav').fadeIn(200);
            } else {
                $('#siteNav').fadeOut(200);
            }
        console.log('I am 20px from the top of the window')
        },
        offset: '75%'
    });
  
  
  
  
});



