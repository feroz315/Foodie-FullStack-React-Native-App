// import { Client } from "pg";
const { Client } = require("pg");


const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'shopify',
    password: 'software',
    port: 5432,

});

async function check(){
    await client.connect()
    console.log("connect to database") 
    // const res = await client.query('SELECT * from blogs')
        
}

check();


module.exports = client;



