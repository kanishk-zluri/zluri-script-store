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
  const mongoDb = await mongo("Zluri_sales");

  const docs = await mongoDb
    .collection("sales")
    .find({ status: "OPEN" })
    .toArray();

  const mongoDb2 = await mongo("sample_mflix");

  const user = await mongoDb2.collection("users").find({name : "Ned Stark"}).toArray();

  console.log("Open sales records:");
  console.log(JSON.stringify(docs, null, 2));

  console.log("User Ned Stark:");
  console.log(JSON.stringify(user, null, 2));

  return docs;
};