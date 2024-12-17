require('dotenv').config();

function getEnvVar(variable, fallback) {
  const value = process.env[variable] || fallback;
  if (!process.env[variable]) {
    console.warn(`Warning: Missing environment variable: ${variable}. Using fallback: ${value}`);
  }
  return value;
}

const port = getEnvVar('PORT', 5000); 
const dbHost = getEnvVar('DB_HOST', 'localhost'); 
const dbUser = getEnvVar('DB_USER', 'root'); 
const dbPassword = getEnvVar('DB_PASSWORD', 'bootcamp'); 

console.log(`Server is running on port: ${port}`);
console.log(`Connecting to DB at ${dbHost} with user ${dbUser}`);
