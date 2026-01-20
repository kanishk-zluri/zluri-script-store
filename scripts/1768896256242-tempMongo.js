// const mongo = require("platform/mongo");

// async function pingMongo(mongoDb) {
//   const result = await mongoDb.command({ ping: 1 });
//   return result;
// }

// module.exports = async function main() {
//   const mongoDb = await mongo( "zluri_sales");

//   const result = await pingMongo(mongoDb);

//   console.log(result);
// };

const mongo = require("platform/mongo");

module.exports = async function main() {
  const mongoDb = await mongo("zluri_sales");

  const docs = await mongoDb
    .collection("sales")
    .find({ status: "OPEN" })
    .limit(10)
    .toArray();

  console.log("Open sales records:");
  console.log(docs);

  return docs;
};