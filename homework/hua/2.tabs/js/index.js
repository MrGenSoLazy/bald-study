$(document).ready(function(){
    dom = $('.tabs__item')
    don = $('.tabs__pane')
    dom.click(function(){
        $(this).addClass('active')
        $(this).siblings().removeClass('active')
        don_don = don.eq(dom.index(this))
        don_don.addClass('active')
        don_don.siblings().removeClass('active')
        
        $(this).addClass('active').siblings().removeClass('active')
        don.eq(dom.index(this)).addClass('active').siblings().removeClass('active')
        
    })
})