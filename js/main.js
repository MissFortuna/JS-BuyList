/**
 * Created by Elizabeth on 1/24/2016.
 */

$(function(){
    function createNewElement(title){
        var node = $('<li class="product">'+
            '<input  class="input-b" maxlength=20  value="'+title+'">'+
            '<span class="box">'+
            '<button class="but down but-block">-</button>'+
            ' <span class="input-c">1</span>'+
            '<button class="but up" ><strong>+</strong></button>'+
            '</span>'
            +
            '<button class="buy-button act"><strong>Куплено</strong></button>'+
            '<button class="x-but"><strong>x</strong></button>'+
            '<button class="buy-button-not act"><strong>Не куплено</strong></button>'+

            '</li>'
        );

        var node2 =$( '<li class=" need-to-buy">'+'<strong>'+title+'</strong>'+
            '<div class="counter"><strong>1</strong></div>'
        +'</li>'
        );

        var node3=$(
            '<li class="need-to-buy had-to-buy">'+'<strong>'+title+'</strong>'+
                '<div class="counter booo"><strong>1</strong></div>'+'</li>'
        );


            node.find('.buy-button').click(function () {

            node.find('.but').hide();
            node.find('.buy-button').hide();
            node.find('.buy-button-not').show();
            node.find('.x-but').hide();
           node.find('.input-b').attr('disabled',true);
            node2.hide();
         node3.show();

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
            node2.find(".counter").text(old);
            node3.find(".counter").text(old);

        });

        node.find('.down').click(function(){
            var old=parseInt(node.find(".input-c").text(),10);

            if(old<2){
                node.find(".down").addClass("but-block");
                old=1;
            }

            if((old<=30)&&(old>1)){
                old--;
            }
            node.find(".input-c").text(old);
            node2.find(".counter").text(old);
            node3.find(".counter").text(old);
        });


        node.find('.buy-button-not').click(function () {
            node.find('.but').show();
            node.find('.buy-button').show();
            node.find('.buy-button-not').hide();
            node.find('.x-but').show();
            node.find('.input-b').show();
            node.find('.input-b').attr('disabled',false);
            node2.show();
            node3.hide();
        });

        node.find(".x-but").click(function () {
            node.remove();
            node2.remove();
            node3.remove();
        });

        /* it must work, but it don't

        but after costumer buy a product, input become blocked, and
        when he come back, it stop be disabled

        node.find('.input-b').focus(function () {
            var before =node.find('.input-b').val();
            node2.find(".need-to-buy").text("before");
        });
*/

        $("ul.edition").append(node);
        $("ul.still_need").append(node2);
        $("ul.webuyit").append(node3);
    }



    $('button.bluebutton').click(function(){
        var input =$("#main-input");
        var newElem = input.val();
        if(newElem!==""){
            input.val("");
            input.focus();
            createNewElement(newElem);

        }
    });

    createNewElement("Смородинка");
    createNewElement("Полуничка");
    createNewElement("Шоколадка");


});