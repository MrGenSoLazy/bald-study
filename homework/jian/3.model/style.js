$(document).ready(function(){
    $('.header').click(function(){
        $('.tanchuang').fadeIn().css('top','40%').css('right','45%')
        $('.touming').show()
    })
    $('.tanchuang_anniu').click(function(){
        $('.tanchuang').hide()
        $('.touming').hide()
    })
    $('.tanchuang_queren').click(function(){
        $('.tanchuang').hide()
        $('.touming').hide()
    })
})