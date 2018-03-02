/**
 * Created by STAR on 2018-03-02.
 */




$(function(){

    //表单校验成功
    $("form").bootstrapValidator({
        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 2,
                        max: 8,
                        message: '用户名长度必须在2到8之间'
                    },

                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: '密码必须在6到12之间'
                    },
                }
            }
        },
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
    });

    //阻止表单默认提交
    $("form").on('success.form.bv', function (e) {
        e.preventDefault();
        //使用ajax提交逻辑


        //通过ajax提交表单
        $.ajax({
            type:'post',
            url:'/employee/employeeLogin',
            //通过表单序列化拼接字符串
            data:$("form").serialize(),
            success:function(info){
                console.log(info);

                if(info.error === 1000){
                    alert('用户名错误');
                }
                if(info.error === 1001){
                    alert('密码错误');
                }
                if(info.success){
                    location.href = "index.html";
                }
            }
        });
    });




});


