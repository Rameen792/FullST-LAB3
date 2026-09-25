const numbers = [2, 4, 9];

function getTotal(numbers) {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(getTotal(numbers));