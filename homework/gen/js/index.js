$(document).ready(function () {
    var modal = $('.modal,.modal__content')
    $('.open').click(function () {
        modal.css('display', 'block').animate({
            opacity: 1,
            marginTop: 0
        },500)
    });
    $('.close').click(function () {
        modal.animate({
            opacity: 0,
            marginTop: '-10px'
        },500,function(){
            modal.css('display', 'none')
        })
    });
});