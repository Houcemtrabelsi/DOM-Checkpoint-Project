function incrementValue(i) {
  let itemNum = document.getElementById("number" + i).value;
  itemNum = isNaN(itemNum) ? 0 : itemNum;
  itemNum++;
  document.getElementById("number" + i).value = parseInt(itemNum);
  var item1=document.getElementById('number1').value * '100'
  var item2=document.getElementById('number2').value * '200'
  var item3=document.getElementById('number3').value * '300'
  var total= item1+item2+item3
  document.getElementById('somme1').innerHTML = 'Total price:'+total+'$';
  
}

function removeValue(i) {
  let itemNum = document.getElementById("number" + i).value;
  itemNum = isNaN(itemNum) ? 0 : itemNum;
  if(itemNum>0){
  itemNum--;
  document.getElementById("number" + i).value = parseInt(itemNum);
  var item1=document.getElementById('number1').value * '100'
  var item2=document.getElementById('number2').value * '200'
  var item3=document.getElementById('number3').value * '300'
  var total= item1+item2+item3
  document.getElementById('somme1').innerHTML = 'Total price:'+total+'$';
}
}


var itemList = document.getElementById('items');
var item= document.getElementsByClassName('list-group-item')
itemList.addEventListener('click', removeItem);
function removeItem(e){
    if(e.target.classList.contains('delete')){
     
      if(confirm('Are You Sure?')){
        var item = e.target.parentElement.parentElement;
        itemList.removeChild(item);
        
      }
    }
  }