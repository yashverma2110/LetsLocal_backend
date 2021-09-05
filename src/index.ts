import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./schema";
import cors from "cors";
import { createConnection } from "typeorm";

// Entities
import { Users } from "./entities/Users";

const main = async () => {
  const app = express();

  await createConnection({
    type: "mysql",
    database: "LetsLocalGQL",
    username: "root",
    password: "password",
    logging: true,
    synchronize: false, // checks for entities in the array and creates the schema
    //! to create new table, remove already created entities from array and set synchronize as true, aftre creation turn back to false
    entities: [Users],
  });

  // connecting middlewares
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
};

main().catch((err) => {
  console.log("An error occured", err);
});
