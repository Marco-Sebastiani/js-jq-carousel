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

    $('.nav i').click(function(){
        $('.active').removeClass('active');
        $(this).addClass('active');
        $('img').eq($(this).index()).addClass('active');
    });
});





//*******FUNZIONI*******
function slideToRight(){
    //QUI MI SALVO LO STATO DELL'IMMAGINE E DEL PALLINO CON LA CLASSE ACTIVE
    var imgSavedClass = $('.images img.active');
    var circleActive = $('.nav i.active');

    //QUI RIMUOVO LA CLASSE ACTIVE 
    imgSavedClass.removeClass('active');
    circleActive.removeClass('active');

    //QUI CONTROLLO L'ELEMENTO LAST E SELZIONO IL PRIMO
    if(imgSavedClass.hasClass('last')){
        $('.images img.first').addClass('active');
        $('.nav i.first').addClass('active');
    } 
    //QUI SELEZIONO L'ELEMENTO SUCCESSIVO
    else{
        imgSavedClass.next().addClass('active');
        circleActive.next().addClass('active');
    }

}


function slideToLeft(){
    //QUI MI SALVO LO STATO DELL'IMMAGINE E DEL PALLINO CON LA CLASSE ACTIVE
    var imgSavedClass = $('.images img.active');
    var circleActive = $('.nav i.active');

    //QUI RIMUOVO LA CLASSE ACTIVE 
    imgSavedClass.removeClass('active');
    circleActive.removeClass('active');

    //QUI CONTROLLO L'ELEMENTO FIRST E SELZIONO L'ULTIMO
    if(imgSavedClass.hasClass('first')){
        $('.images img.last').addClass('active');
        $('.nav i.last').addClass('active');
    } 
    //QUI SELEZIONO L'ELEMENTO SUCCESSIVO
    else{
        imgSavedClass.prev().addClass('active');
        circleActive.prev().addClass('active');
    }

}





