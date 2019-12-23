$(".tabs__item").click(function(){
    // console.log(12)
    $(this).addClass('active')
    $(this).siblings().removeClass('active')
    pane = $(this).index()
    $(".tabs__pane").eq(pane).addClass('active')
    $(".tabs__pane").eq(pane).siblings().removeClass('active')
});