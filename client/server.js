const express =  require('express');
const cors =  require('cors');
const dotenv =  require('dotenv');

// Rest Objects
const app = express()
 
// dotenv configraution 
dotenv.config()
// middleWares 
app.use(cors()) 
app.use(express.json())
// routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'))
// Ports
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT, ()=>{
    console.log( `Server Running on Port ${PORT} `)
})


