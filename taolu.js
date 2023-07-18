function home() {
    window.location.replace("index.html");
}
  
function reset() {
    window.location.replace("taolu.html");
}
  
var items = [];
  
function clearItems() {
    items = [];
}
  
function media() {
    clearItems();
    var inputs = document.getElementsByClassName('nota');
    
    for (var i = 0; i < inputs.length; i++) {
      var boxValue = inputs[i].value;
      
      if (boxValue !== null && boxValue !== "") {
        boxValue = boxValue.replace(/,/g, '.');
        items.push(parseFloat(boxValue));
      }
    }
  
    if (items.length >= 5) {
      var min = Math.min(...items);
      var minIndex = items.indexOf(min);
      
      inputs[minIndex].style.color = "red";

      var max = Math.max(...items);
      var maxIndex = items.indexOf(max);
      
      inputs[maxIndex].style.color = "red";
      
      items.splice(minIndex, 1);
      items.pop();
    }
    
    var sum = items.reduce(function (partialSum, a) {
      return partialSum + a;
    }, 0);
  
    var result = sum / items.length || 0;
    var roundedResult = Math.round(result * 100) / 100;
  
    document.getElementById("final").innerHTML = roundedResult;
  }
  