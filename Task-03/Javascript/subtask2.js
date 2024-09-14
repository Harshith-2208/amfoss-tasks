const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {
 
fs.writeFile('output.txt', data, (err) => {
   
    console.log('String has been read from input.txt and written to output.txt.');
  });
});

