// Strictly for development env
const { db } = require('./');
const { Player, Team } = require('./');

players = [
  {
    first_name: 'Ryan',
    last_name: 'Won',
    ign: 'handyice#XSET',
    isCaptain: true,
    team: 'Founders',
    rank: 'Radiant 2',
    email: 'iamsogood@gmail.com',
    discord: 'rwon#2503',
  },
  {
    first_name: 'Justin',
    last_name: 'Suh',
    ign: 'choob#12345',
    isCaptain: false,
    team: 'Founders',
    rank: 'Iron 4',
    email: 'ryanissobad@gmail.com',
    discord: 'jsuh#2503',
  },
  {
    first_name: 'Gloria',
    last_name: 'Choi',
    ign: 'chominnnn#CARRY',
    isCaptain: false,
    team: 'Founders',
    rank: 'Immortal 3',
    email: 'carry@gmail.com',
    discord: 'gchoi#2503',
  },
];

teams = [{}];

const seed = async () => {
  try {
    await db.sync({ force: true });

    await Promise.all();
  } catch (err) {
    console.error(err);
  }
};
