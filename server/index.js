import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import env from "dotenv";
import { Configuration, OpenAIApi } from "openai";

const app = express();
env.config();

app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
  organization: "org-yANoEqhc4jJqljwalYBxFTST",
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });
    res.json({
      message: response.data.choices[0].value,
    });
  } catch (err) {
    console.log(err);
    res.send(err).status(400);
  }
});

app.listen("3080", () => console.log("listening on port 3080"));
