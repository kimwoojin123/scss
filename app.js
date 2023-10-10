const pokemon = require('pokemon');
const fs = require('fs');

const data = pokemon.all('ko');

const HTMLLi = data.join('<li>');

fs.writeFile('pokemon.html', HTMLLi, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
