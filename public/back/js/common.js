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
      //��Ҫ���߷�����������Ҫ�������

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
    //����ajax�����жϹ���Ա�Ƿ��¼
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


