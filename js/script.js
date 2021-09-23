
"use strict";

/*

console.log(4/0);
console.log('string' * 9);


const obj = {
    name: "John",
    age: 25,
    isMarried: false
};
console.log(obj.name);

let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
console.log(arr[1]); 


const obj={
    a:50
};

obj.a=10;
console.log (obj); */




/*function youSayGoodBye(){
    alert("Good Bye");
    function andISayHello(){
        alert("Hello!");
    }
    return andISayHello;
}
let something = youSayGoodBye();
something();  -  выдаёт в том же порядке*/



/*let theBigString = "Евгений Юрьевич Биктимиркин";
function greatings (){theBigString.slice(0, 15);
let npHello = "Здравствуйте, " + greatings () + "!";}
console.log (greatings());   -  RangeError: Maximum call stack size exceeded
at String.slice  */


//alert('Hello');

/*const result = confirm("Are you here?");
console.log(result);*/

/*const answer = prompt("Вам есть 18?", "18");
console.log(typeof answer); - без скобок тоже робит */

const category = 'toys';
console.log(`https://someurl.com/${catogory}/5`);

const user = "Ivan";
alert(`Привет, ${user}`);
