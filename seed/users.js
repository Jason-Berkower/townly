const db = require("../db/index");
const User = require("../models/user");
const faker = require("faker");

db.on("error", console.error.bind(console, "Mongo Connection Error:"));

const main = async () => {
  await User.deleteMany({});

  const users = [
    {
      username: "Manditea",
      email: "amanda@tea.com",
      password_digest: "",
      is_tourGuide: true,
    },
    {
      username: "Paco",
      email: "paco@hotmail.com",
      password_digest: "",
      is_tourGuide: false,
    },
    {
      username: "Jason_the_Viking",
      email: "jason@longship.nor",
      password_digest: "",
      is_tourGuide: false,
    },
    {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password_digest: "",
      is_tourGuide: false,
    },
    {
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password_digest: "",
      is_tourGuide: false,
    },
  ];

  await User.insertMany(users);

  // Remove before push to production
  console.log("Users Created!");
};

const run = async () => {
  await main();
  db.close();
};

run();
