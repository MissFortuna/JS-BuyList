/**
 * Created by Elizabeth on 1/24/2016.
 */


$(function(){
//This	function	will	be	called
//	after	the	DOM	was	loaded	and	ready
//Here	we	can	place	all	jQuery	Code

//does not work

    function createNewElement(title){
        var node = $('<li class="product">'+
            '<input  class="input-b" value="'+title+'">'+
            ' <p class="input-bb already-bought">'+title+'</p>'+

            '<div class="box">'+
            '<button class="but down but-block">-</button>'+
            ' <span class="input-c">1</span>'+
            '<button class="but up" ><strong>+</strong></button>'+
            '/<div>'+

            '<button class="buy-button act"><strong>Куплено</strong></button>'+
            '<button class="x-but"><strong>x</strong></button>'+
            '<button class="buy-button-not act"><strong>Не куплено</strong></button>'+
            '</li>');

        node.find('.buy-button').click(function () {
            /*$(this).parent().find('.input-b').addClass("crossedOut");*/
            node.find('.but').hide();
            node.find('.buy-button').hide();
            //  $(this).parent().find('.input-c').show();
            //$(this).className = 'buy-button-not';
            //node.find('.buy-button').addClass("buy-button-not");
            //node.find('.buy-button').text("Не куплено");
            node.find('.x-but').hide();
            //$(this).parent().find('.buy-button-not').removeClass("buy-button");
        });

        node.find('.up').click(function(){
            var old=parseInt(node.find(".input-c").text(),10);

            if(old>=1){
                node.find(".down").removeClass("but-block");
            }
            if(old<30){
                old++;
            }

            node.find(".input-c").text(old);
        });

        node.find('.buy-button-not').click(function () {

            node.find('.but').show();
            node.find('.buy-button').show();
            //node.find('.buy-button-not').addClass("buy-button");
            //node.find('.buy-button-not').text("Куплено");
            node.find('.x-but').show();
            //node.find('.buy-button').removeClass("buy-button-not");
        });

        node.find(".x-but").click(function () {
            node.remove();
        });
        $("ul.edition").append(node);
    }

    $('button.bluebutton').click(function(){
        var input =$("#main-input");
        var newElem = input.val();
        if(newElem!==""){
            input.val("");
            createNewElement(newElem);
        }
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


    createNewElement("Смородинка");
    createNewElement("Смородинка");
    createNewElement("Смородинка");
});