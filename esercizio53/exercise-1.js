// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }


function sum(...numbers) {
    let tot = 0;

    for (number of numbers) {
        tot += number;
    }

    return tot;
}

console.log(sum(1, 2, 3, 4, 5));