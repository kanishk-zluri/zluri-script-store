const pg = require("platform/postgres");

async function pingPostgres(db) {
  const result = await db.query("SELECT name FROM users;");
  return result.rows;
}

module.exports = async function main() {
  const db = await pg("customer_db");

  const result = await pingPostgres(db);

  console.log(result);

  db.release();
};
