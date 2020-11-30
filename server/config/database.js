const mongoose = require("mongoose");


//  mongodb+srv://devwebII:devwebII@gus12345.czwg8.gcp.mongodb.net/MedsOn?retryWrites=true&w=majority
//  mongodb://localhost:27017/TrabDevWeb?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false


const db = mongoose.connect("mongodb://localhost:27017/TrabDevWeb?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Conexão estabelecida com o banco de dados...");
});

mongoose.connection.on("error", (error) => {
  console.log(`Algum erro aconteceu com a conexão do banco. \n${error}`);
});

mongoose.connection.on("disconnected", () => {
  console.log("Desconectamos com o banco de dados...");
});

module.exports = db;
