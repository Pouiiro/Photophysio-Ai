const express = require("express");
const TeachableMachine = require("@sashido/teachablemachine-node");
const cors = require("cors");

const model = new TeachableMachine({
  modelUrl: "https://teachablemachine.withgoogle.com/models/Xg5gSBJaf/",
});

const app = express();
const port = 3000;

// app.use(cors());

// app.use(express.json());

app.get("/image/classify", async (req, res) => {
  const { url } = req.body;
  console.log("awo");
  return model
    .classify({})
    .then((predictions) => {
      console.log(predictions);
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send("Something went wrong!");
    });
});

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
