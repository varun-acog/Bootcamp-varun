require('dotenv').config();

const port = process.env.PORT ; 
const dbHost = process.env.DB_HOST ;
const dbUser = process.env.DB_USER ;
const dbPassword = process.env.DB_PASSWORD ;

console.log(`Server is running on port: ${port}`);
console.log(`Connecting to DB at ${dbHost} with user ${dbUser}`);
