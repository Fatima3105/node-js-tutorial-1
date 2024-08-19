// GLOBALS - NO WINDOW !!!
// _dirname - path to current directory
// __filename - file name
// require - functions to use modules (common js)
// module - info about current module(file)
// process - info about env where program iss being executed 
// console.log(__dirname)
// setInterval(() => {
//     console.log('hello world')
// }, 1000)
// modules
// const john = "john"
// const peter = "peter"
// const smith = "smith"
// const sayHi = (name) => {
//     console.log(`hello there ${name}`)
// }
const names = require ('./4_name')
const sayHi = require('./5_utils')
// console.log(names)
const data = require('./6_alternativeflavor')
require('./7_mind_grenade')
// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)
// sayHi(names.smith)