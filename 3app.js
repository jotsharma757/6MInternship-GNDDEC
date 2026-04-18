const express = require('express');
const {Sub,query} = require("./subqueries");

const app = express();  
async function start() {
    await Sub();        // wait for table creation
    const data = await query();  // then run query
    console.log(data);
}

start();
