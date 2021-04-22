const db = require("../db");
const Tour = require("../models/tour.js");
const User = require("../models/user.js");
const faker = require("faker");

db.on("error", console.error.bind(console, "Mongo Connection Error"));

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
    street: faker.address.streetAddress(),
    city: "Buenos Aires",
    country: "Argentina",
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
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    country: faker.address.country(),
  },
  {
    name: faker.lorem.words(),
    tour_operator: "Manditea",
    date: "2021-09-30",
    time: "1 pm",
    type: "animals",
    description: faker.lorem.paragraph(),
    price: 30,
    popularity: 9,
    imgURL: faker.image.food(),
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    country: faker.address.country(),
  },
  {
    name: faker.lorem.words(),
    tour_operator: "Jason_the_Viking",
    date: "2021-7-11",
    time: "9 am",
    type: "personalized",
    description: faker.lorem.paragraph(),
    price: 70,
    popularity: 10,
    imgURL: faker.image.abstract(),
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    country: faker.address.country(),
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
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    country: faker.address.country(),
  },
  {
    name: faker.lorem.words(),
    tour_operator: "Jason_the_Viking",
    date: "2021-04-01",
    time: "1 pm",
    type: "historical",
    description: faker.lorem.paragraph(),
    price: 30,
    popularity: 9,
    imgURL: faker.image.city(),
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    country: faker.address.country(),
  },
];

const addTours = async () => {
  await Tour.deleteMany();
  await Promise.all(
    tours.map(async (tourToAdd) => {
      let user = await User.findOne({
        username: tourToAdd.tour_operator,
      });

      //update object with tour ID
      tourToAdd.tour_operator = user.username;

      const tour = await Tour.create(tourToAdd);

      await user.tours.push(tour._id);
      await user.save();
    })
  );
  db.close();
};

addTours();
