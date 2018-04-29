var str = 'Lorem ipsum dolor sit amet. consectetur adipisicing' +
 					'elit. Atque dolor, culpa natus, deleniti, tempora' +	
 					'architecto vel ex. quaerat in soluta sit velit autem.';
var N = str.length; 					
for (var i = 0; i < N; i++){
	console.log(str.charAt(i));
	console.log(str[i]); // or using literal bracket notation
} 						

console.log(str.split('. '));
var a = 'A man, a plan, a canal, Panama';
console.log(a.split(", ").reverse());

var honey = 'honey badger';
var honeySplit = honey.split(' ');
for (var i = 0; i<honey.length; i++){
	console.log(honeySplit[i]);
}

var myArr = [1,2,3,4,5,6,7,8,9,10];
console.log(myArr.slice(2, myArr.length-3));
console.log(myArr.slice(-8,-3));

var test = 'ant bat cat';
console.log(test.slice(4,7));

var newArr = ["ant", "bat", "cat", 42];
var newArrJ = newArr.join(" ");
var newArrS = newArrJ.split(" ");
console.log(newArrJ === newArrS);

for (var i = 0; i<6;i++){
	console.log(i);
}

var total = '';
for (var i = 0; i < newArr.length; i++){
	total += newArr[i];
}
console.log(total);
var totalArr = newArr.join('');
console.log(totalArr);
console.log(totalArr === total);