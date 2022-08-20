const express = require('express');
const validate = require('./validate');


const app = express();

app.use(express.json())
app.use(validate)

const data = [];

app.post('/addData',(req,res) => {
    var userInput = req.body
   try {
    data.push(userInput);
    res.send('data added')
   } catch (error) {
    res.status(500).send('internal server error')
   }
})
app.get('/getData' , (req,res) => {
    res.send(data);
})



app.listen(8080 , () => {
    console.log('server started');
})
// {
//     ID: number
//     Name: string
//     Rating: number
//     Description: string
//     Genre: string
//     Cast: string[]
// }