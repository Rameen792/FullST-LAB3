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

function countBiggerThanFirst(numbers) {
    let count = 0;
    let first = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > first) {
            count++;
        }
    }

    return count;
}

console.log(getTotal(numbers));
console.log(getLargest(numbers));
console.log(countBiggerThanFirst(numbers));

document.getElementById("show").addEventListener("click", function () {
    document.getElementById("total").textContent = getTotal(numbers);
    document.getElementById("big").textContent = getLargest(numbers);
    document.getElementById("above").textContent = countBiggerThanFirst(numbers);
});