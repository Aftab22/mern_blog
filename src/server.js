import express, { request, response } from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import path from "path";

const application = express();
application.use(express.static(path.join(__dirname, "/build")));

application.use(bodyParser.json());

const withDB = async (dbOperations, response) => {
  try {
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("my-blog");
    await dbOperations(db);
    client.close();
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error connecting to db", error });
  }
};

application.get("/api/articles/:name", async (request, response) => {
  withDB(async (db) => {
    const articleName = request.params.name;
    const articleInfo = await db.collection("articles").findOne({
      name: articleName,
    });
    response.status(200).json(articleInfo);
  }, response);
});

//using withDB to have less repeated code
application.post("/api/articles/:name/upvote", async (request, response) => {
  try {
    const articleName = request.params.name;
    const client = await MongoClient.connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("my-blog");
    const articleInfo = await db.collection("articles").findOne({
      name: articleName,
    });
    await db.collection("articles").updateOne(
      { name: articleName },
      {
        $set: {
          upvotes: articleInfo.upvotes + 1,
        },
      }
    );
    const updatedArticleInfo = await db.collection("articles").findOne({
      name: articleName,
    });
    response.status(200).json(updatedArticleInfo);
    client.close();
  } catch (error) {
    console.log(error);
    response.status(500).json({ message: "Error Upvoting", error });
  }
});

application.post(
  "/api/articles/:name/add-comment",
  async (request, response) => {
    try {
      const articleName = request.params.name;
      const { username, text } = request.body;
      const client = await MongoClient.connect("mongodb://localhost:27017", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db("my-blog");
      const articleInfo = await db.collection("articles").findOne({
        name: articleName,
      });
      await db.collection("articles").updateOne(
        { name: articleName },
        {
          $set: {
            comments: articleInfo.comments.concat({ username, text }),
          },
        }
      );
      const updatedArticleInfo = await db.collection("articles").findOne({
        name: articleName,
      });
      response.status(200).json(updatedArticleInfo);
      client.close();
    } catch (error) {
      console.log(error);
      response.status(500).json({ message: "Error Adding comment", error });
    }
  }
);

application.get("*", (request, response) => {
  response.sendFile(path.join(__dirname + "/build/index.html"));
});

application.listen(8000, () => {
  console.log("Listening on port 8000");
});
