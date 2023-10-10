const pokemon = require('pokemon');
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
