// функция call_back получит массив чисел из arr отсортированный по времени отработки таймера ( не по исходному порядку чисел)


function func(arr, call_back) {

    if (!Array.isArray(arr) || arr.some(it => parseInt(it) != it || it < 0))
        call_back(null, "Неверный формат входящих данных, должен быть массив положительных чисел");

    let res = [];
    const f = (val) => {
        res.push(val);
        if (res.length == arr.length)
            call_back(res);
    }

    for (let i = 0; i < arr.length; i++) {
        setTimeout(f, arr[i], arr[i]);
    }
}


func([111, 5, 24], console.log);