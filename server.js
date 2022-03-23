const dotenv = require('dotenv');

// express app
const { app } = require('./app');

dotenv.config({ path: './.config.env' });

// Utils
const { db } = require('./utils/database');
const { initModel } = require('./utils/initModels')

//Model relations
initModel();

db
  .authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

db
  .sync()
  .then(() => console.log('Database synced'))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Movie api runing on port: ${PORT}!!!!!!!!`);
});





