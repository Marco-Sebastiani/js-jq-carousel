$(document).ready(function(){

    $('.next').click(slideToRight);
    $('.prev').click(slideToLeft);
    $(document).keydown(function(e){
        if (e.which == 39){
            slideToRight();
        }

        if (e.which == 37){ 
            slideToLeft();
        }
    });

    $('.circle i').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        $('.images img').eq($(this).index()).addClass('active');
        $('h4').eq($(this).index()).addClass('active');
    });

});





//*******FUNZIONI*******
function slideToRight(){
    //QUI MI SALVO LO STATO DELL'IMMAGINE E DEL PALLINO CON LA CLASSE ACTIVE
    var imgSavedClass = $('.images img.active');
    var circleActive = $('.circle i.active');
    var titleActive = $('.title h4.active');

    //QUI RIMUOVO LA CLASSE ACTIVE 
    imgSavedClass.removeClass('active');
    circleActive.removeClass('active');
    titleActive.removeClass('active');

    //QUI CONTROLLO L'ELEMENTO LAST E SELZIONO IL PRIMO
    if(imgSavedClass.hasClass('last') || circleActive.hasClass('last') || titleActive.hasClass('last')){
        $('.images img.first').addClass('active');
        $('.circle i.first').addClass('active');
        $('.title h4.first').addClass('active');
    } 
    //QUI SELEZIONO L'ELEMENTO SUCCESSIVO
    else{
        imgSavedClass.next().addClass('active');
        circleActive.next().addClass('active');
        titleActive.next().addClass('active');
    }

}


function slideToLeft(){
    //QUI MI SALVO LO STATO DELL'IMMAGINE E DEL PALLINO CON LA CLASSE ACTIVE
    var imgSavedClass = $('.images img.active');
    var circleActive = $('.circle i.active');
    var titleActive = $('.title h4.active');


    //QUI RIMUOVO LA CLASSE ACTIVE 
    imgSavedClass.removeClass('active');
    circleActive.removeClass('active');
    titleActive.removeClass('active');

    //QUI CONTROLLO L'ELEMENTO FIRST E SELZIONO L'ULTIMO
    if(imgSavedClass.hasClass('first') || circleActive.hasClass('first') || titleActive.hasClass('first')){
        $('.images img.last').addClass('active');
        $('.circle i.last').addClass('active');
        $('.title h4.last').addClass('active');

    } 
    //QUI SELEZIONO L'ELEMENTO SUCCESSIVO
    else{
        imgSavedClass.prev().addClass('active');
        circleActive.prev().addClass('active');
        titleActive.prev().addClass('active');
    }

}

