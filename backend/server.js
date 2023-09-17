const express=require('express'); // importing module express
const app=express();// your are creating an express application and storing it in app
require('./connection');
const userRoutes=require('./routes/userRoutes');

const rooms=['general','tech','finance','crypto'];// array of rooms
const cors=require('cors');// importing cors module

// we set up middleware using app.use
app.use(express.urlencoded({extended:true}));// this middleware parses incoming request with url encoded payloads
app.use(express.json());//this middleware parses incoming request with json payloads
app.use(cors());// cross origin resourse sharing 
app.use('/users',userRoutes);

//creating a server
const server=require('http').createServer(app);
const PORT=5000;

const io=require('socket.io')(server,{ //importing module socket.io

    cors: { //the configuration specifies CORS setting to allow connection  from https://localhost:3000 and allow methods get and post
        origin:'https://localhost:3000',
        methods:['GET','POST'],
    }
})

//listeing to the server
server.listen(PORT,()=>{
    console.log("listening to port ",PORT);
})