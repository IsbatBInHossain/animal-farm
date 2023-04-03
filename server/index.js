import express from "express";
import cors from "cors";
import Chance from "chance";

const app = express();
app.use(cors());
app.use(express.json());

const chance = new Chance();

const animals = [...Array(250).keys()].map((id) => {
  return {
    id,
    type: chance.animal(),
    age: chance.age(),
    name: chance.name(),
  };
});

app.get("", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = animals.filter((animal) =>
    animal.type.toLowerCase().includes(query)
  );
  res.send(results);
});

app.listen("5000", () => console.log("Server started at PORT 5000"));
