$('.stages-details').hide()
$('.stages').on('click',function(){
    $('td i',this).toggleClass('fa-plus');
    $('td i',this).addClass('fa-minus');
    $(this).nextUntil('.stages').fadeToggle(500);
})

$('.tab-step').on('click',function(){
    $('.tab-step.active').removeClass('active')
    $(this).addClass('active')
})