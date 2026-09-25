const numbers = [2, 4, 9];

function getTotal(numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

function getLargest(numbers) {
    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log(getTotal(numbers));
console.log(getLargest(numbers));