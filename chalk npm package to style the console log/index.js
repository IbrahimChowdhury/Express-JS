let express=require("express")
let chalk=require("chalk")
let app=express()

let port=3000

// if we want to style our console log text then we use chalk npm package 
// website link : https://www.npmjs.com/package/chalk?activeTab=versions
// sometimes update version of chalk is not working so i install chalk version 4.1.2
// how to install : npm i chalk@4.1.2



app.listen(port,()=>{
    console.log(chalk.black.bgWhite(`server is running at http://localhost:${port}`))
    console.log(chalk.blue.bold("this is bold"))
    console.log(chalk.green.bold("this is green bold"))
    console.log(chalk.blue.underline.bgGreen("this is blue underline bg green"))
    console.log(chalk.red("this is redzone"))
})