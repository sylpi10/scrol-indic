$(window).scroll(function() {

    let wintop = $(window).scrollTop(), // position actuelle

    heightDoc = $(document).height(), //hauteur de doc
    heightWin = $(window).height();   // hauteur de fenetre

    let scrolled = (wintop/(heightDoc-heightWin))*100;

    $('.scroll').css('width',(scrolled + '%'));
});
