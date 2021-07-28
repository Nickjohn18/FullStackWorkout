const seedPushups = require('./pushup-seeds');
const seedPullups = require('./pullup-seeds');
const seedRunning = require('./running-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('-------SYNC STARTED-------');
  await seedPushups();
  console.log('--------PUSHUPS SEEDED------');

  await seedPullups();
  console.log('------PULLUPS SEEDED--------');

  await seedRunning();
  console.log('------RUNNING SEEDED--------');

  process.exit(0);
};

seedAll();