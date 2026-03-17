let array = [10,20,30,40,50];

function reverseArray(array){
    let reversed = [];
    let index = 0;
    for(let i=array.length-1; i>=0; i--){
        reversed[index] = array[i]; 
        index++;
    }
    return reversed;
}

let reversedArr = reverseArray(array);
console.log(reversedArr);