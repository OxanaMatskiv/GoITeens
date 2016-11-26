var num = 20;
console.log(num);

var strGreet = "Hello ";
var strName = "World";
console.log(strGreet + strName);

var booll = true;
console.log(typeof(booll));

console.log(typeof(null));

var arr = [1,3,9,6,8];
console.log(arr[0]);

var arr2 = ["one", "two", "three"];
console.log(arr2);

arr.push(10, 13, 17); //додає елемент в кінець масивву
//console.log(arr.push(10));

console.log(arr);

arr.sort(); //сортує по алфавіному порядку
console.log(arr);

arr.sort(function(a,b){return a - b;}); //порівнюються два сусідні елементи
console.log(arr);

console.log("2" + 5); //плюс перетворює все на текст

console.log("2" * 5); //множення перетворює все на число (якщо це можливо)

console.log("h    2" * 5);  //перетворює все на текст

var i = 0;
var j = null;

/* for (j = 10; i >= j; j--) {
	console.log(j);
} */

var landscape = function(){
	var result = "";
	var flat = function(size){
		for (var count = 0; count<size; count++)
			result += "_";
	};

	var mountain = function(size){
		result += "/";
		for (var count = 0; count<size; count++)
			result += "'";
		result += "\\";

	}

	flat(3);
	mountain(4);
	flat(6);
	mountain(1);
	flat(1);
	return result;
};

console.log(landscape());