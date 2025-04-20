// @ts-types="npm:@types/express@4.17.21"
import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Hello world",
    size: 10,
  });
});

app.post("/:id", (req, res) => {
  //
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(418).send({ message: "We need a logo!" });
  }

  res.send({
    bottle: `bottle with your ${logo} and ID of ${id}`,
  });
});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
