const {readFile, writeFile } = require('fs')
// const first = readFileSync('./content/first.txt','utf8');
// const second = readFileSync('./content/second.txt','utf8');
// // console.log(first, second)
// writeFileSync(
//     './content/result_sync.txt',
//     `Here is the result: ${first}, ${second}`,
//     { flag: 'a'}

// )
///asynchronus
console.log('start')
readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    // console.log(result)
    const first = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result_async.txt',
            `Here is the result: ${first}, ${second}`
            ,(err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                // console.log(result)
                console.log('done with this task')
            }
        )
    })
})
console.log('starting the next task ')