//challenge 1

//Is this considered chaeting?

console.log (`   \#
  \#\#\#
 \#\#\#\#\#
\#\#\#\#\#\#\#`);



//challenge 2

// let drinkTime = 1.2;
// let holdingPhone = false;
// let isAlone = false;

// if (holdingPhone == true) {
//   drinkTime = drinkTime * 0.8;
// }

// if (isAlone == true) {
//   drinkTime = drinkTime * 0.8;
// }

// console.log ("Estimated drink time:", drinkTime, "minutes");


//Actually I'm not sure how I'm supposed to use the two booleans here,
//becuase if there's no input then the output in console would stick to one value,
//which is why I wrote this program below that allows you to decide whether you're alone and whether you're holding your phone,
//and the estimated time will change accordingly.


let drinkTime = 1.2;
let holdingPhone = prompt ("Hi! Are you holding your cellphone? Answer with \"yes\" or \"no\"");
let isAlone = prompt ("Okay... then did you come here on your own? Answer with \"yes\" or \"no\"");

if (holdingPhone == "yes") {
  drinkTime = drinkTime * 0.8;
}

if (isAlone == "yes") {
  drinkTime = drinkTime * 0.8;
}

console.log ("Estimated drink time:", drinkTime, "minutes");