// time O(n**2) , memory O(1)
// Проходимся по массиву и для каждого элемента делаем вложенный проход по всем следующим значениям, чтобы проверить образуют ли эти два числа пару targetSum

function findPairsFirst(array, targetSum) {
    for (let i = 0; i < array.length; i++) {
        const num1 = array[i];

        for (let j = i + 1; j < array.length; j++) {
            const num2 = array[j];

            if (num1 + num2 === targetSum) {
                return [num1, num2];
            }
        }
    }

    return [];
}


// time O(n) , memory O(n)
// Проходим по массиву один раз, сохраняя targetSum-val в nums ( недостающее число до пары ) , если число уже есть в nums - нашли пару, если нет - сохраняем значение val в nums

function findPairsSecond(array, targetSum) {
    const nums = {};

    for (let i = 0; i < array.length; i++) {
        const val = array[i];
        const diff = targetSum - val;

        if (diff in nums) {
            return [val, diff];
        }

        nums[val] = true;
    }

    return [];
}

module.exports = { findPairsFirst, findPairsSecond };