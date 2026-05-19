const fs = require('fs')

// reading files
// fs.readFile('./README.md', (error, data) => {
//     if (error) {
//         console.log(error)
//     }
//     console.log(data.toString())
// })

// writing files
// fs.writeFile('./README2.md', 'hello world', () => {
//     console.log('file written')
// })

// directories
// if (!fs.existsSync('./assets')){
//     fs.mkdir('./assets', (error) =>{
//         if (error) {
//             console.log(error)
//         }
//         console.log("folder created")
//     })
// } else {
//     fs.rmdir('./assets', (error) =>{
//         if (error) {
//             console.log(error)
//         }
//         console.log('folder deleted')
//     })
// }


// deleting files
// if(fs.existsSync('./README2.md')){
//     fs.unlink('./README2.md', (error)=>{
//         if (error) {
//             console.log(error)
//         }
//         console.log('file deleted')
//     })
// }