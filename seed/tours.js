const db = require("../db");
const Tour = require("../models/tour.js");
const User = require("../models/user.js");
const faker = require("faker");

db.on("error", console.error.bind(console, "Mongo Connection Error"));

const addTours = async () => {
  await Tour.deleteMany();

  const tours = [
    {
      name: faker.lorem.words(),
      tour_operator: "Manditea",
      date: "2021-06-03",
      time: "12 pm",
      type: "adventure",
      description: faker.lorem.paragraph(),
      price: 25,
      popularity: 10,
      imgURL: faker.image.nature(),
      location: [
        faker.address.streetAddress(),
        faker.address.cityName(),
        faker.address.zipCode(),
      ],
    },
    {
      name: faker.lorem.words(),
      tour_operator: "Manditea",
      date: "2021-08-12",
      time: "7 pm",
      type: "cooking",
      description: faker.lorem.paragraph(),
      price: 50,
      popularity: 8,
      imgURL: faker.image.food(),
      location: [
        faker.address.streetAddress(),
        faker.address.cityName(),
        faker.address.zipCode(),
      ],
    },
    {
      name: faker.lorem.words(),
      tour_operator: "Jason_the_Viking",
      date: "2021-12-19",
      time: "3 am",
      type: "ghost",
      description: faker.lorem.paragraph(),
      price: 15,
      popularity: 4,
      imgURL: faker.image.abstract(),
      location: [
        faker.address.streetAddress(),
        faker.address.cityName(),
        faker.address.zipCode(),
      ],
    },
    {
      name: faker.lorem.words(),
      tour_operator: "Jason_the_Viking",
      date: "2021-04-01",
      time: "1 pm",
      type: "historical",
      description: faker.lorem.paragraph(),
      price: 30,
      popularity: 6,
      imgURL: faker.image.city(),
      location: [
        faker.address.streetAddress(),
        faker.address.cityName(),
        faker.address.zipCode(),
      ],
    },
  ];

  // await Promise.all(
  //   tours.map(async (tourToAdd) => {
  //     let user = await User.findOne({
  //       username: tourToAdd.tour_operator,
  //     });
  //     let what = (tourToAdd.tour_operator = user._id);
  //     //   console.log(what);

  //     const tour = await Tour.create(what);
  //     console.log(what);

  //     await user.tours.push(tour._id);
  //     await user.save();
  //   })
  // );

  await Tour.insertMany(tours);

  //take out before production
  console.log("Tours created");

  db.close();

  //
};

// async function run() {
//   await main();
//   db.close();
// }

// run();
addTours();
