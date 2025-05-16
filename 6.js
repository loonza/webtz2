require('dotenv').config();
const fs = require('fs');
const path = require('path');
const PATH_DIR = process.env.PATH_HTML
const teg = /<p\b[^>]*>(.*?)<\/p>/gi;
const STRING = process.env.STRING

//1


// поиск всех файлов
const findAllFiles = fs.readdirSync(PATH_DIR);


// фильтрация только .html , .htm
const filterFiles = findAllFiles.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return ext === '.html' || ext === '.htm';
});

console.log('Все файлы по фильтру .html , .htm', filterFiles);


// указываем полный путь до файла, читаем все полученные файлы после фильтрации как текст
filterFiles.forEach(file => {
    const fullPath = path.join(PATH_DIR, file);
    const content = fs.readFileSync(fullPath, 'utf-8');

    let count = 0; // кол-во совпадений тега
    let finded; // наш тег


    while ((finded = teg.exec(content)) !== null) { // если нашли <p> и paragraphText включает STRING, счетчик++
        const paragraphText = finded[1];
        if (paragraphText.includes(STRING)) {
            count++;
        }
    }

    console.log(`${file} — с подстрокой "${STRING}" найдено: ${count}`);
});




