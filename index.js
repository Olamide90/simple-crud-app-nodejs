var express = require ('express')
var app = express()
const Router = require('./Router')

app.use(express.json())
app.use('/api/v1/', Router)


 var PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log('Server started at 5000')
})



