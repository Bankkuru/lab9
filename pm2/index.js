let express = require('express');
let app = express();

app.get('/',
 (req, res) => {
     console.log('hello world') 
     res.send('Hello world')
})

app.get('/crash',
 (req,res)=>{
 console.log('Crash!!')
 res.send('Crash Crash')
 process.exit(1)
 })
app.listen(process.env.PORT,()=>console.log('Sever is running',process.env.PORT));
