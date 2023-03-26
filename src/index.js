const express= require("express")
const route= require("./routes/route.js")
const {default:mongoose}= require("mongoose")
const multer=require("multer")
const cors= require('cors')

const app= express()

app.use(express.json())
app.use(multer().any())

app.use(
    function(req,res,next){
        res.setHeader('Access-Control-Allow-Origin','*')
        next()
        
    })

 app.use(cors({origin: true, credentials: true}));


mongoose.connect("mongodb+srv://aliabbasbackendcohort:AMMIabbu321@cluster67.6fp98uh.mongodb.net/group5Databse?retryWrites=true&w=majority",{
    useNewUrlParser: true
})
.then(()=> console.log("mongoDB is connected"))
.catch((err=> console.log(err)))


app.use("/",route)

app.listen(process.env.PORT || 3001, function(){
    console.log("express app is running on port" +(process.env.PORT || 3001))
})