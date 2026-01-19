const mongo = require("platform/mongo");

async function pingMongo(mongoDb) {
  const result = await mongoDb.command({ ping: 1 });
  return result;
}

module.exports = async function main() {
  const mongoDb = await mongo( "zluri_sales");

  const result = await pingMongo(mongoDb);

  console.log(result);
};
