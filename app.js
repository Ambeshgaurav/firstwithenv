const express=require("express");
const app=express();
const routes=require('./routes/routes');
const bodyParser = require("body-parser");
const sequelize=require("./config/config");
const dotenv = require('dotenv');
const http = require('http');
dotenv.config();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
if (process.env.NODE_ENV === 'development') {
  app.use(logger('dev'));
} 
app.use("/client",routes);

const PORT = process.env.PORT || 1507;
const server = http.createServer(app);

server.listen(PORT, () => {
  sequelize.sync().then(() => console.log('Successfully connected to DB')).catch(e => console.log(e));

  console.log(`server started on the port ${PORT}`);
});




