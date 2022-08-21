const fs = require('fs');

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data)
// })

// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

// fs.writeFile('file2.txt', 'This is New India', () => {
//     console.log("Written to File")
// });

a1 = fs.writeFileSync('file2.txt', "This was an Old India")
console.log(a1)