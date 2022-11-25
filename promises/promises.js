const fs = require('fs/promises')

// fs.readFile('files/1.txt')
//   .then(content => {
//     console.log(1, content.toString())

//     return fs.readFile('files/2.txt')
//   })
//   .then(content => {
//     console.log(2, content.toString())

//     console.log('FIN')
//   })
const fn = async () => {
  const content = await fs.readFile('files/1.txt')
  console.log(1, content.toString())

  const content2 = await fs.readFile('files/2.txt')
  console.log(2, content2.toString())

  console.log('FIN')
}
fn()