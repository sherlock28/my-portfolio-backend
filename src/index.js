const app = require("./app");

app.listen(app.get("port"), () => {
  console.log(`http://localhost:${app.get("port")}`);
  console.log(`Server listening on port ${app.get("port")}`);
});
