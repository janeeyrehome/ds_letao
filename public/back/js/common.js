/**
 * Created by STAR on 2018-03-02.
 */
$(function(){

    NProgress.configure({
        showSpinner: false
    })

    $(document).ajaxStart(function () {
          NProgress.start();
        });
    $(document).ajaxStop(function(){
        setTimeout(function(){
            NProgress.done();
        },500);
    })

$('.second').prev().on('click',function(){
    $(this).next().slideToggle();
})

$('.icon_menu').on('click',function(){
    $('.lt_aside').toggleClass('now');
    $('.lt_main').toggleClass('now');

});

    $('.icon_logout').on('click', function () {
        $('#loginoutModal').modal('show');
    });

    $('.btn_loginout').on('click',function(){
      //需要告诉服务器，我们要清楚数据

        $.ajax({
            type:'GET',
            url:'/employee/employeeLogout',
            success:function(info){
                if(info.success){
                    location.href = "login.html";
                }
            }
        })
    });
    //发送ajax请求，判断管理员是否登录
    if( location.href.indexOf("login.html") == -1){
        $.ajax({
            type:'GET',
            url:'/employee/checkRootLogin',
            success:function(info){
                if(info.error === 400){
                    location.href = "login.html";
                }
            }
        })
    }


});


