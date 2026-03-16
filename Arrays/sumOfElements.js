let array = [10, 20, 30, 40, 50]; 

function sumOfElements(array){
    let sum = 0; 
    for(let i=0; i<array.length; i++){
        sum = sum + array[i];
    }
    return sum;
}

let sumation = sumOfElements(array);
console.log(sumation);