import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Initialisasi database baru dengan nama code_blog dan usernya root tanpa ada password
// const db = new Sequelize(`code_blog`, 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });


// Initialisasi mysql railway
const db = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.envMYSQLPASSWORD, {
    host: process.env.MYSQLHOST,
    port: process.env.MYSQLPORT,
    dialect: "mysql"
});

export default db;
