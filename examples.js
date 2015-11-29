for (var i = 0; i<10; i++){
  var x;
  x = i * 9;
  console.log(i + " * 9 = " + x)
}

studentsAD = ["Lucille", "Michael", "George Michael"]
for (var i = 0; i < studentsAD.length; i++){
  console.log(studentsAD[i] + " is in the class.")
}

var k = 0;

for (k=0; k<101; k++){
  if (k%15 == 0){
    console.log("Fizz-buzz")
  }
  else if (k%5 == 0){
    console.log("Buzz")
  }
  else if (k%3 == 0){
    console.log("Fizz")
  }
  else{
    console.log(k);
  }
}
