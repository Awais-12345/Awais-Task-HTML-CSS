const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync("Ali", salt);
console.log("HASHED PASSWORD: ", hashedPassword);
