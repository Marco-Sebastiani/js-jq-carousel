$(document).ready(function(){

    $('.next').click(slideToRight);

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





