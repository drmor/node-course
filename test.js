const fs = require('fs')

const readStream = fs.createReadStream('./text.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./new_text.txt');

// readStream.on('data', (chunk)=>{
//     console.log('new chunk')
//     console.log(chunk)
//     writeStream.write('\nNew chunk\n')
//     writeStream.write(chunk)
// })

//piping (the same as above just shorter)
readStream.pipe(writeStream)