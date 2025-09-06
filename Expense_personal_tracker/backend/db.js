const { Pool } = require('pg');

const pool = new ¨Pool({
    user : 'postgres',
    host : 'localhost',
    database : 'ExpenseTracker',
    password : 'meilleur',
    port : 5432,
});

module.exports = pool;