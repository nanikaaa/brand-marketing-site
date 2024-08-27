$(document).ready(function() {
    // Smooth scroll to section with offset
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));

        if (target.length) {
            event.preventDefault();
            var offset = target.offset().top - $('.header').outerHeight(); // Adjust for fixed header height
            $('html, body').stop().animate({
                scrollTop: offset
            }, 1000);
        }
    });

    // Add hover effect to full stack cards
    $('.full-stack-card').hover(
        function() {
            $(this).addClass('hovered');
        },
        function() {
            $(this).removeClass('hovered');
        }
    );

    // Add hover effect to tech partner logos
    $('.tech-partner-logo').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.1)',
                'transition': 'transform 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'transition': 'transform 0.3s ease'
            });
        }
    );
});
