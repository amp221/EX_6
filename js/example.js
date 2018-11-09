
//get DOM node
var listHead = document.getElementsByTagName('ul')[0];
//var pNext = listHead.firstChild;

//new first node

var newfirst = document.createElement("LI"); //creates new <li>
var textNF = document.createTextNode("kale");
newfirst.id = "newfirst";
newfirst.appendChild(textNF);
//new last node

var newlast = document.createElement("LI"); //creates new <li>
var textNL = document.createTextNode("cream");
newlast.id = "newlast";
newlast.appendChild(textNL);

// insert first
listHead.prepend(newfirst);
// insert last
listHead.append(newlast);
//el.firstChild.nextSibling;
console.log(newlast.innerHTML);
console.log(listHead.innerHTML);
var pH2 = document.getElementsByTagName('h2')[0];
var countNode = document.createElement("span");
countNode.append(document.createTextNode(listHead.childElementCount));
//var countNode = document.createTextNode((count));
pH2.append(countNode);
//console.log(pNext.innerHTML);
//var newfirst = pNext.cloneNode('li');
var listArr = document.querySelectorAll("li");
listArr.forEach(function(listItem) {
  listItem.classList.add( "cool" )
} );

//getElementById('');

//el.getAttribute('');
// ADD NEW ITEM TO END OF LIST
//constructor



// ADD NEW ITEM START OF LIST


// ADD A CLASS OF COOL TO ALL LIST ITEMS


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
