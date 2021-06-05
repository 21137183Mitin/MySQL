const mysql = require('mysql');
require('dotenv').config()

const HOST = process.env.HOST
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD
const DATABASE = process.env.DATABASE

const conn = mysql.createConnection({
    host     : HOST,
    user     : USER,
    password : PASSWORD,
    database:  DATABASE

    
  });
   

  conn.connect(err => {
      if(err) {
          console.log(err)
          return err
      } else {
          console.log('Database.......... OK')
      }
  })

  let query = "SELECT * FROM CUSTOMERS";

  conn.query(query, (err,res, f)=> {
      console.log(err);
      console.log(res);
      //console.log(f);
  });
