/**
 * Created by Elizabeth on 1/24/2016.
 */

/* It is a function of counter
1. Problem 1
Now it works only with the first one in the list. All buttons work with the first one.
Tip: In my opinion, there is a problem with equal id's in the each counter.

2. Problem 2
When counter of products is 1 or 0 there is not blocked "-" button.
Tips:
1) The smallest counter of color is 1;
2) When it is 1, change color of '0' button.

3. Problem 3
You need to add synchronization with block 2.
Tip: use div's in the second block.
*/

function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;

    if (new_qty < 0) {
        new_qty = 0;
    }

    document.getElementById('qty').value = new_qty;
    return new_qty;
}

/*It is a first idea, how to add first three one products
 Problem: it does not work.
*/

var li1	=	$("<li>Liza is cool!</li>");
$(".edition li").append(li);


/*There is a code which add elements.
* Problem 1:
* Right now I don't know what to do with it.
* Tips:
* 1)Use your names of classes in the div. Remember about resizing of blocks.
* 2)Synchronization with block 2.
* */
var LIST	=	$('.list-of-items');
var ITEM_TEMPLATE	=	$('.one-item').html();
function	addItem(title)	{
    var node	=	$(ITEM_TEMPLATE);	//Create	new	HTML	node
    node.find(".title").text(title);	//Set	product	title
//Delete	Action
    node.find(".delete-button").click(function(){
        node.remove();
    });
    LIST.append(node);	//Add	to	the	end	of	the	list
}
/*
* Also there no code with editing of elements of the lists.
* */