const fs = require('fs')

const readStream = fs.createReadStream('./text.txt', {encoding: 'utf8'});

readStream.on('data', (chunk)=>{
    console.log('new chunk')
    console.log(chunk)
})