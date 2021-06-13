const exprees=require ('express')
const app=exprees()
const bodyParser=require('body-parser')
app.use(bodyParser.json())
const dotenv=require('dotenv')
dotenv.config()
const mongoose=require ('mongoose')
const router=require ('./router')
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    };
mongoose.connect(process.env.DB_CONNECT, options)
.then(()=> console.log('connected'))
.catch((error)=>{console.log(`cannot connect ${error}`)})
app.use(router)
app.listen(3010,()=>{console.log('port 3010')});
