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
});
