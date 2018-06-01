/*
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

*/

// var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
//                        "Thursday", "Friday", "Saturday"];
// var now = new Date();
// var dayname = daysOfTheWeek[now.getDay()];
// alert(`Hello, world! Happy ${dayname}.`);

const sonnet = `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove.
O no, it is an ever-fixed mark
That looks on tempests and is never shaken;
It is the star to every wand'ring bark,
Whose worth's unknown, although his height be taken.
Love's not time's fool, though rosy lips and cheeks
Within his bending sickle's compass come:
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
  If this be error and upon me proved,
  I never writ, nor no man ever loved.`;

// Unique words
let uniques = {};
// All words in the text
let reg = /[\w]+/g;
let words = sonnet.match(reg);
// console.log(words.length)
// Iterate through `words` and build up an associative array of unique words.
for (let i = 0; i < words.length; i++) {
  let word = words[i];
  if (uniques[word]) {
    uniques[word] += 1;
  } else {
    uniques[word] = 1;
  }
}

console.log(uniques)

// > let uniques = new Map();
// Map {}
// > uniques.set("loved", 0);
// Map { 'loved' => 0 }
// > let currentValue = uniques.get("loved");
// > uniques.set("loved", currentValue + 1);
// Map { 'loved' => 1 }

let uniquesMap = new Map();
// let reg = /[\w]+/g;
// let words = sonnet.match(reg);
for (let i = 0; i < words.length; i++) {
	let word = words[i];
	if (uniquesMap.get(word)){
		let currentValue = uniquesMap.get(word)
		uniquesMap.set(word, currentValue + 1)
	} else {
		uniquesMap.set(word, 1)
	}
}
console.log(uniquesMap);


function sortWords(object){
	var sortable = [];
	for (var newWord in object) {
	    sortable.push([newWord, object[newWord]]);
	}

	sortable.sort(function(a, b) {
	    return a[1] - b[1];
	});

	console.log('There are now ' + sortable.length + ' unique words in that text');
	console.log(sortable.reverse());	
}

function uniqueWord(textarea){	
	let uniquesW = {};
	let regex = /[\w'-]+/g;

	let wordsNew = textarea.match(regex);
	for (let i = 0; i < wordsNew.length; i++) {
	  let word = wordsNew[i].toLowerCase();
	  if (uniquesW[word]) {
	    uniquesW[word] += 1;
	  } else {
	    uniquesW[word] = 1;
	  }
	}
	// console.log(uniquesW);	
	return uniquesW;
}

$('#btnSubmit').click(function(e){
	var wordObject = {};
	e.preventDefault();
	var textarea = $('#textarea').val();
	wordObject = uniqueWord(textarea);
	// console.log(wordObject);
	sortWords(wordObject);
});


function dayOfTheWeek(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}

let now = new Date();
// alert(`Hello, world! Happy ${dayOfTheWeek(now)}.`);

function palindrome(string) {
	var str = string.toLowerCase();
	var newStr = str.split("").reverse().join('');
	return str === newStr;
}

// alert(palindrome('test'));

function emailParts(address){
	return address.split('@');
}

// alert(emailParts('test@test.com'));

/* Chapter 6 Functional Programming */
let states = ["North Dakota", "South Dakota", "North Carolina", "South Carolina"];

function urlify(string) {
  return string.toLowerCase().split(/\s+/).join('-');
}

function imperativeMap(states) {
  let urlStates = [];
  states.forEach(function(state) {
    urlStates.push("https://example.com/" + urlify(state));
  });
  return urlStates;
}
console.log(imperativeMap(states));

function functionalFilter(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
}
console.log(functionalFilter(states));   

console.log(states.includes('South Dakota'));

// using reduce
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function functionalProduct(array) {
  return array.reduce((total, n) => { return total *= n });
}
console.log(functionalProduct(a));  