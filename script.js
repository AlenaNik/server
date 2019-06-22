const fs = require('fs');

fs.readFile('./hello.txt', (err, data) => {
    if (err) {
        console.log('error')
    }
    console.log('Async', data.toString('utf8')) ;
});

const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString())
// APPEND
// fs.appendFile('./hello.txt', 'This is awesome!', err => {
// if(err) {
//     console.log(err)
// }
// });
// WRITE
// fs.writeFile('bye.txt', 'Bye friend', err => {
//     if (err) {
//         console.log(err)
//     }
// })

// DELETE
fs.unlink('./bye.txt', err => {
    if (err) {
        console.log(err)
    }
    console.log('Bye to bye text')
})