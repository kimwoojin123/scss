const pokemon = require('pokemon');
const http = require('http');
const fs = require('fs');

const data = pokemon.all('ko');

fs.writeFile('pokemon.html', '', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
for (let i = 0; i < data.length; i++) {
    fs.appendFile('pokemon.html', `<li>${data[i]}</li>`, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

http.createServer(function (request, response) {
    console.log(request.method);
    console.log(request.url);

    let writeHeadObject = {
        'Content-Type': 'text/html;charset=utf-8',
    };
    response.writeHead(200, writeHeadObject);

    fs.readFile('pokemon.html', function (err, data) {
        if (err) {
            console.error('파일을 읽지 못했습니다.');
        } else {
            response.end(data);
        }
    });
}).listen(8080);
