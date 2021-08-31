scrolling();

$(window).on('scroll', function() {
    scrolling();
});

function scrolling()
{
    var sTop = $(window).scrollTop();
    $('#para-box p').each(function() {
        var offset = $(this).offset().top-1;
        var height = $(this).height();

        var opac;
        var opac_li;
        var opac_p;

        if(sTop >= offset && sTop < (offset + height))
        {
            let temp = (sTop - offset)/(height*(1.8));
            opac = 1 - temp;
            opac_li = (1- temp) + 0.2;
            opac_p =1;
        }
        else
        {
            opac = 0;
            opac_li = 0.3;
            opac_p = 0;
        } 
        
        index = $(this).index();
        document.querySelectorAll("p")[index].style.opacity = opac_p;
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