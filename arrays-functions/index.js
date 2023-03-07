
//question 1//
//Mutatting array methods are the ones that change the object after the method has been used.
//Examples are 
//1.push
//2 .pop 
//3.unshift 
//4.splice 
//5.reverse
//Non-Mutating methods do not change the object after the method has been used.
//Examples are 
//1.slice
//2.concat 
//3.map 
//4.filter
//5 .


// question 2//
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Phyton']

//question 2a//
//Adding_Kotlin_to_the_end_of_the_array
//languages.splice(5, 0,  'Kotlin')
//console.log(languages);

//question 2b//
//Adding_Java_after_Ruby
//languages.splice(3, 0, 'Java')
//console.log(languages);

//question 2c//
//Removing_the_first_item_in_an_array
//languages.splice(0, 1)
//console.log(languages);

//question 2d//
//Adding_Scala_and_swift
//languages.splice(0, 0, 'Scala', 'Swift')
//console.log(languages);

//question 2e//
//Replacing_PHP_with_Go_and-Rust
//languages.splice(3, 1, 'Go', 'Rust');
//console.log(languages);


//question 3//
//let fruit = ['apple', 'mango','banana'];
//function changefruit(fruit){
  //  fruit[2] = "orange";
  //  return fruit;
//}
//console.log(fruit);

//question 4
function findMaximumValue(numbers) {
  return Math.max(...numbers); 
};
let showResult = findMaximumValue([2, 3, 18, 21, -6, -9]); 
//console.log(showResult); //logs out 21 as the maximum value

//question 5

        //question 5
		//Write a function called valTimesIndex which accepts an array of numbers and returns 
		//a new array with each value multiplied by the index it is at in the array:
		function valTimesIndex(arr) {
		 	let newArr = [];
			for (let i = 0; i < arr.length; i++) {
			  newArr.push(arr[i] * i);
			}
		 	return newArr;
		  }
		//  console.log(newArr(1,2,3,4))