/**
 * Created by Elizabeth on 1/24/2016.
 */


$(function(){
//This	function	will	be	called
//	after	the	DOM	was	loaded	and	ready
//Here	we	can	place	all	jQuery	Code

//does not work
    $('button.bluebutton').click(function(){
        var newElem = $(".input-c").val();
        if(newElem!==""){
            $(".input-c").val("");
            $("ul.edition").append('<li class="product">'+
                '<input  class="input-b"value=newElem>'+
                ' <p class="input-bb already-bought">'+newElem+'</p>'+

                '<div class="box">'+
                '<button class="but down but-block">-</button>'+
                ' <span class="input-c">1</span>'+
                '<button class="but up" onclick="modify_qty(1)"><strong>+</strong></button>'+
                '/<div>'+

                '<button class="buy-button act"><strong>Куплено</strong></button>'+
                '<button class="x-but"><strong>x</strong></button>'+
                '<button class="buy-button-not act"><strong>Не куплено</strong></button>'+
                '</li>');
//bigger
        }
    });


    // it is work
    $('.x-but').click(function (node) {
            $(this).parent().hide();
            node.remove();
    });

        // it is work, but color of block button start work from 2.
        $('.up').click(function(){
            var old=$(this).parent().find(".input-c").text();

            if(old>=2){
                $(this).parent().find(".down").removeClass("but-block");
            }
            var num=1;
            for(var i=1;i<30;i++){
                if(i==old){
                    num=i+1;
                    break;
                }
            }
            $(this).parent().find(".input-c").text(num);
        });
        $('.down').click(function(){
            var old=$(this).parent().find(".input-c").text();
            if(old==1){
                $(this).parent().find(".down").addClass("but-block");
            }
            if(old>=2){
                $(this).parent().find(".down").removeClass("but-block");
            }
            var num=1;
            for(var i=30;i>1;i--){
                if(i==old){
                    num=i-1;
                    break;
                }
            }

            $(this).parent().find(".input-c").text(num);
        });

    $('.buy-button').click(function () {
        /*$(this).parent().find('.input-b').addClass("crossedOut");*/
        $(this).parent().find('.but').hide();
        //  $(this).parent().find('.input-c').show();
        //$(this).className = 'buy-button-not';
        $(this).parent().find('.buy-button').addClass("buy-button-not");
        $(this).parent().find('.buy-button').text("Не куплено");
        $(this).parent().find('.x-but').hide();
        //$(this).parent().find('.buy-button-not').removeClass("buy-button");
    });

    /*
    $('.buy-button-not').click(function () {
        /*$(this).parent().find('.input-b').addClass("crossedOut");*/
        //$(this).parent().find('.but').show();
      //  $(this).className = 'buy-button';
    //    $(this).parent().find('.buy-button-not').text("Куплено");
  //      $(this).parent().find('.x-but').show();
        // $(this).parent().find('.buy-button').removeClass("buy-button-not");
//    });

});
/*
* Also there no code with editing of elements of the lists.
* */

//does not work
//$(function () {
/*
 var title;
 var LIST = $('.editing');
 var ITEM_TEMPLATE = $('.product').html();
 $('#main-input').click(function () {
 $('#main-input').val("");
 })
 $('#bluebutton').click(function () {
 title = $('#main-input').val();
 var node = $(ITEM_TEMPLATE);
 node.find("#already-bought").text(title);
 LIST.append(node);
 $('#main-input').val("");
 $('#main-input').focus();

 });


 $(function(){
 var BASKET = $(".edition");
 var PRODUCT_TEMPLATE ='<li class="product">'+$(".product").html()+'</li>';
 var LIST_TEMPLATE = '<ul class="need_buy">'+$(".ul").html()+'</ul>';
 var LIST = $('.still_need');
 var AMOUNT_CIRCLE =  '<div class="counter"><strong>1</strong></div>';

 $(".input-style").find("input").focus();

 $(".bluebutton").click(function(){newItem();})
 $(".input-style").find(":input").keyup(function(e){
 if(e.keyCode == 13) {
 //newItem(); //work
 $(".bluebutton").click();
 return false;
 }
 });

 */