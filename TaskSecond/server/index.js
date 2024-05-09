const express = require("express");
require("dotenv").config();
const cors = require("cors")
const routes = require("./routes/routes")

const server = express();

// cross origin resource policy
server.use(cors());


// middlewers
 server.use(express.json())

// routes 
server.use('/api',routes);

server.listen(process.env.PORT,()=>{
    console.log(`server is runing on port ${process.env.PORT}`)
});

