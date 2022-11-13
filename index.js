var numbers = [];
function generate(size, lowest, highest) {
  for (var i = 0; i < size; i++) {
    var add = true;
    var randomNumber = Math.floor(Math.random() * highest) + 1;
    for (var y = 0; y < highest; y++) {
      if (numbers[y] == randomNumber) {
        add = false;
      }
    }
    if (add) {
      numbers.push(randomNumber);
    } else {
      i--;
    }
  }
}
var pick = [];
for (i = 0; i < 6; i++) {
  pick[i] = Math.floor(Math.random() * 6 + 1);
}
//console.info(pick);
var set = [];
for (i = 0; i < 6; i++) {
  numbers = [];
  generate(6, 1, 49);
  set[i] = numbers;
}
//console.info(set);
var fin = [];
for (i = 0; i < 6; i++) {
  fin[i] = set[i][pick[i] - 1];
}
//console.info(fin);
document.getElementById("fin").innerHTML = fin;
