function forLoop(array){
  for (let i = 0; i <25; i++) {
    if(i===0){
      array.push(`I am ${i +1} strange loop.`)
    }
    else {
      array.push(`I am ${i+1} strange loops.`)
    }
    return array
  }
}

function whileLoop(num){
  while(num > 0){
    console.log(num)
    num -=1
  }
  return "done"
}
var i = 0
function incrementVariable() {
  i = i + 1;
  return i;
}

function doWhileLoop(int){
  do {
    console.log("I run once regardless")
  } while (incrementVariable() < int);
}
