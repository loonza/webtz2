// обычный перебор

function isSquareFirst(n) {
    if (n < 0) return false;
    let i = 0;
    while (i * i <= n) {
        if (i * i === n) return true;
        i++;
    }
    return false;
}

// по формуле вычитания нечетных чисел ( 1 + 3 + 5 ... + (2n-1) = n**2 )
function isSquareSecond(n) {
    if (n < 0) return false;

    let odd = 1;
    while (n > 0) {
        n -= odd;
        odd += 2;
    }

    return n === 0;
}


module.exports = {
    isSquareFirst,
    isSquareSecond
};