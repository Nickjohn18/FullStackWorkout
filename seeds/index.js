const seedPushups = require("./pushup-seeds");
const seedPullups = require("./pullup-seeds");
const seedRunning = require("./running-seeds");
const seedUsers = require("./users-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("-------SYNC STARTED-------");

  await seedUsers();
  console.log('------USERS SEEDED----------');

  await seedPullups();
  console.log('------PULLUPS SEEDED--------');

  await seedPushups();
  console.log("--------PUSHUPS SEEDED------");

  await seedRunning();
  console.log('------RUNNING SEEDED--------');


  process.exit(0);
};

seedAll();
