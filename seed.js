const faker = require("faker/locale/ru");
const geocoder = require("./config/geocoder");
const mongoose = require("mongoose");
const data=require("./config/dat.js")
const db = require("./config/keys_dev").prodMongoUrl;
// mongoose.pluralize(null);
const User = require("./models/User");

const Event = require("./models/Event");

async function createBase() {
  await mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
  
for (i=0;i<data.lenght; i++)


  // placemarkColors = [
  //   '#DB425A', '#4C4DA2', '#00DEAD', '#D73AD2',
  //   '#F8CC4D', '#F88D00', '#AC646C', '#548FB7',
  // ];
//   const admin = await User.create({
//     name: "admin",
//     email: "ellpm@ya.ru",
//     password: "$2a$10$Z0vwTnEBfuNGkZywi2M2auih.eC4Mpx5OKrxOokzjkTiQ4YIko816",
//     date: "2020-09-01T19:49:28.306+00:00",
//   });

//   for (let eventIndex = 0; eventIndex < 10; eventIndex++) {
//     let latitude = (55.83 - 55.64) * Math.random() + 55.64;
//     let longitude = (37.81 - 37.43) * Math.random() + 37.43;

//     //console.log(latitude, longitude);
//     // eslint-disable-next-line no-await-in-loop
//     let standType = Math.floor(Math.random() * 7);
//     // const randomNames = [];

//     // for (let index = 0; index < 5; index++) {
//     //   randomNames.push(await faker.name.findName());
//     // }
// const data = await geocoder.geocode("Moscow")
//     await Event.create({
//       user: await admin._id,
//       partisipantName: await faker.hacker.verb(),
//       standType: "Tennis",
//       logoUrl: await faker.image.avatar(),
//       youTubeCode: "QQZmDWnV618",
//       galeryUrl: [
//         await faker.image.business(),
//         await faker.image.business(),
//         await faker.image.business(),
//       ],
//       numberofplayer: 5,
//       listofplayer: [],
//       location: "Ekaterinburg",
//       address: {
//         type: "Point",
//         coordinates: [data[0].longitude, data[0].latitude],
//       },
//       description: await faker.hacker.phrase(),
//       imageURL: await faker.image.people(),
//       comments: [],
//       date: Date.now(),
//       start: await faker.date.future(),
//     });
  }

  await mongoose.disconnect();
}

createBase();


