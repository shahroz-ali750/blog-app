const app = require("./app");
require("dotenv").config();

const sequelize = require("./database/config");
let port = process.env.PORT;

//connected database using sequelize
sequelize
  .sync({ force: false })

  .then(() => {
    console.log("Database is connected successfully");
  })
  .catch((err) => {
    console.log("sequelize error =>", {
      error: err.message + "Error while connecting Database",
    });
  });

// server created using express

app.listen(port, (err) => {
  if (err) {
    console.log({ error: err.message + "error while starting server" });
  }
  return console.log(`Server Started Successfully at port ${port}`);
});
