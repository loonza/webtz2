// создаем массив промисов и ждем их завершения

async function funcAsync(arr) {
    if (!Array.isArray(arr) || arr.some(it => parseInt(it) != it || it < 0)) {
        throw new Error("Неверный формат входящих данных, должен быть массив положительных чисел");
    }

    function setDelay(value, timeout) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(value), timeout);
        });
    }


    const promises = arr.map((num) => setDelay(num, num));

    const result = await Promise.all(promises);

    return result;
}

(async () => {
    try {
        const res = await funcAsync([111, 5, 24]);
        console.log("Результат", res);
    } catch (error) {
        console.error("Ошибка", error.message);
    }
})();
