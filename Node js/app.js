const express= require('express');
const cookieParser= require('cookie-parser');
const port =8000;
const path= require('path');
const app= express();
app.use(express.urlencoded());
app.use(cookieParser());
const cors = require('cors');
app.use(cors())
app.use(express.urlencoded());
const db = require('./config/mongoose')
const session= require('express-session');
const passport=require('passport');
const passportLocal= require('./config/passport-local-strategy');
app.use(express.json());
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))

const MongoStore=require('connect-mongo')(session);

app.use(express.static('./assets'));


app.use(session({
    name:'helpme',    
    secret:'wow',
    saveUninitialized:'false',
    resave:'false',
    cookie:{
         
        maxAge:(1000 * 60 * 100)
    },
    store:new MongoStore(
        {
             mongooseConnection:db,
             autoRemove: 'disabled'

        },
        function(err){
            console.log(err || 'connect-mongoose setup OK')
        }
    
    )
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticateduser);

// app.get('/', (req,res)=>{
//     res.end("Hello kunal welcome back")
// })
app.use('/', require('./routes/index.js'));


app.listen(port,function(err){
    if(err){
        console.log(`Server will not run on this port:${err}`);
    }
    console.log(`server is running on port:${port}`);
})