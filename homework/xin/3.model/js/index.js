$(".dianji").click(function(){
    $(".bg").addClass('active')
    $(".but").addClass('active')
});
$(".top_right").click(function(){
    $(".bg").removeClass('active')
    $(".but").removeClass('active')
});
$(".bottom_right").click(function(){
    // $(".bg").removeClass('active')
    // $(".but").removeClass('active')
    window.close()
});