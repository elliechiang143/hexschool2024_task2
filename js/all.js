
function navigationOpenToggle(){
    let navBtn = $('.ham');
    let icon = $('.ham i');
    navBtn.click(function(){
        $('nav ul').toggleClass('active');
        $('.overlay').fadeToggle(500);
        if(icon.text() == 'menu'){
            icon.text('close');
        }else{
            icon.text('menu')
        }
    })
}
navigationOpenToggle();