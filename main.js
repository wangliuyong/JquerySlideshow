$(function(){
    var buttons = $('#buttons>span');
    for(let i=0;i<buttons.length;i++){
        $(buttons[i]).on('click',function(event){
            let index=$(event.currentTarget).index();
            n1 = index;
            $(this).addClass('hignLight').siblings('.hignLight').removeClass('hignLight');
            let x=index*-300;
            $('.images').css({
                transform:'translateX('+x+'px)'
            })
        });
    }
    //自动播放
    var n1 = 0;
    var id = setTimer();
    $('.wrapper').on('mouseenter',()=>{
        clearInterval(id);
    });
    $('.wrapper').on('mouseleave', () => {
        setTimer();
    });
    //定时器
    function setTimer() {
        id = setInterval(() => {
            n1++;
            n1 = n1 > buttons.length - 1 ? 0 : n1;
            buttons.eq(n1).trigger("click");
        }, 1500);
        return id;
    }
});

