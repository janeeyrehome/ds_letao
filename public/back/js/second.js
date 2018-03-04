/**
 * Created by STAR on 2018-03-04.
 */
$(function(){
    var page = 1;
    var pageSize = 10;
    function render(){
        $.ajax({
            type:'GET',
            url:'/category/querySecondCategoryPaging',
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(info){
                //console.log(info);
                $('tbody').html(template('tpl1',info));
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion:10,
                    currentPage:1,
                    totalPages:10,
                    onPageClicked:function(a,b,c,p){
                        page = p;
                        render();
                    }
                });
            }
        });
    }
    render();

    //ÏÔÊ¾Ä£Ì¬¿ò
    $('.btn_add').on('click',function(){
        $("#secondModal").modal("show");
    })





})