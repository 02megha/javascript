// for loop is a special kind of for loop which is used specially
//in case of array or similar data type
// this for loop is used to acess array element one by one 
// for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);

//}
const arr = [
    "element 1",
    "element 2",
    "element 3",
    "element 4",
    "element 5",
    "element 6",
    "element 7",

];
// a similar kind of short for a loop can be achived to do the same
//task
for (let candidate of arr) {
    if (candidate === "element 3") {
        continue;
    }
    console.log(candidate);
}

// the variable a starts from first element of array and goes
// to last element 
// by updating its value to next element one by one
