/**
 * Created by STAR on 2018-03-04.
 */
$(function(){
    var page = 1;
    var pageSize = 5;
    function render(){
        $.ajax({
            type:'GET',
            url:'/category/queryTopCategoryPaging',
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(info){
                //console.log(info);
                $('tbody').html(template('tpl',info));
                //分页插件
                $('#pagintor').bootstrapPaginator({
                    bootstrapMajorVersion:5,
                    currentPage:1,
                    totalPages:3,
                    onPageClicked:function(a,b,c,p){
                        page = p;
                        render();
                    }
                });
            }
        });
    }
    render();
   //模态框显示
    $('.btn_add').on('click',function(){
        $("#firstModal").modal("show");
    });
    //表单验证功能
    $("#form").bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields:{
            categoryName:{
                validators:{
                    notEmpty:{
                        message:'请输入一级分类的名称'
                    }
                }
            }
        }
    });

    $("#form").on('success.form.bv',function(e){
        e.preventDefault();
        //console.log('hehe');
        $.ajax({
            type:'POST',
            url:'/category/addTopCategory',
            data:$('#form').serialize(),
            success:function(info){
                if(info.success){
                    $("#firstModal").modal("hide");
                    render();
                }
            }
        })
    })
});





