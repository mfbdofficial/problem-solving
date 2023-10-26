let array = [1, 1, 3, 4, 4];
let minValue = Math.min(...array);
console.log(minValue);
const indexMin = array.indexOf(minValue);
console.log(indexMin);
let maxValue = Math.max(...array);
console.log(maxValue);
const indexMax = array.indexOf(maxValue);
console.log(indexMax);

function squareSum(numbers){
    return numbers.reduce((accumulator, currentValue) => accumulator + (currentValue ** 2), 0);
}
let angka = [5, 5, 6, 1];
console.log(squareSum(angka));
const squareSum2 = numbers => numbers.reduce((a, b)=> a + b ** 2, 0);
console.log(squareSum2(angka));
