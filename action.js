scrolling();

$(window).on('scroll', function() {
    scrolling();
});

function scrolling()
{
    var sTop = $(window).scrollTop();
    $('p').each(function() {
        var offset = $(this).offset().top-1;
        var height = $(this).height();

        var opac;
        var opac_li;

        if(sTop >= offset && sTop < (offset + height))
        {
            let temp = (sTop - offset)/height;
            opac = 1 - temp;
            opac_li = (1- temp) + 0.2;
        }
        else
        {
            opac = 0;
            opac_li = 0.3;
        } 
        
        index = $(this).index();
        document.querySelectorAll("p")[index].style.opacity = opac;
        document.querySelectorAll("li")[index].style.opacity = opac_li;
        document.querySelectorAll("img")[index].style.opacity = opac;

    });
}

function clicking(e)
{
    var target = $($(this).attr('href'));
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 6000);
}