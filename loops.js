function forLoop(arrayOne) {
  for (var i = 0; i < 25; i++) { 
    if (i === 1) {
      arrayOne.push(`I am ${i} strange loop.`);
      } else { arrayOne.push(`I am ${i} strange loops.`);
}
}
return arrayOne;
}

let number = 50;
function whileLoop(number) {
  while (number > 0) {
    console.log(--number);
  }
return "done";
}

var num = 0;
function incrementVariable() {
  num = num + 1;
  return num;
}

function doWhileLoop(num) {
  do {
    console.log("I run once regardless.");
  } while (incrementVariable() < num);
}

    


