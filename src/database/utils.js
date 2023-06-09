// Leer del fichero del JSON
const fs = require("fs");

const saveToDatabase = (DB) => {
  console.log(DB);
  fs.writeFileSync("./src/database/db.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

module.exports = { saveToDatabase };
