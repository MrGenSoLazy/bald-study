$(document).ready(function () {
    dom = $('.tabs__item')
    don = $('.tabs__pane')
    dom.click(function () {
        console.log(this)
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        don_don = don.eq(dom.index(this))
        don_don.addClass('active')
        don_don.siblings().removeClass('active')

    })



    $('.window').click(function () {
        alert('官爷又来玩了呀！')
    })

    $('.button_two').click(function () {
        $('.popup').slideDown("slow").css('top', '35%');
        $('.globar-wrapper').addClass('bodye')
    })
    
    $('.yes , .popup_top').click(function () {
        $('.popup').slideUp("slow").css('top', '10%');
        $('.bodye').removeClass('bodye')
    })
})