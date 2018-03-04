/**
 * Created by STAR on 2018-03-04.
 */
$(function(){

    var page = 1;
    var pageSize = 5;
   function render(){
      $.ajax({
          type:'GET',
          url:'/user/queryUser',
          data:{
              page:page,
              pageSize:pageSize
          },
          success:function(info){
              //console.log(info);
              $("tbody").html(template("tpl",info));

              $('#pagintor').bootstrapPaginator({
                  bootstrapMajorVersion:3,
                  currentPage:page,
                  totalPages:Math.ceil(info.total/pageSize),
                  numberOfPages:5,// ������ʾ����ҳ
                  onPageClicked:function(a,b,c,p){
                      page = p;
                      render();
                  }
              });
            }
          })
       }
    render();
    //���ý���ģ̬��
    $('tbody').on('click','.btn',function(){
        $('#userModal').modal('show');

        //��ȡ���Ԫ�ص�id
        var id = $(this).parent().data("id");
        var isDelete = $(this).hasClass("btn-success")?1:0;


        $('.btn_confirm').off().on('click',function(){
            //����ajax����
            $.ajax({
                type:'POST',
                url:'/user/updateUser',
                data:{
                    id:id,
                    isDelete:isDelete
                },
                success:function(info){
                    //console.log(info);
                    if(info.success){
                        $('#userModal').modal('hide');
                        render();
                    }
                }
            });
        });

    });
});
