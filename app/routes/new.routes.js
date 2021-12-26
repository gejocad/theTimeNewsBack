module.exports = app => {
  const news = require("../controllers/new.controller.js");

  var router = require("express").Router();

  // Create a new 
  router.post("/", news.create);

  // Retrieve all News
  router.get("/", news.findAll);

  // Retrieve all published News
  router.get("/published", news.findAllPublished);

  // Retrieve a single New with id
  router.get("/:id", news.findOne);

  // Update a New with id
  router.put("/:id", news.update);

  // Delete a New with id
  router.delete("/:id", news.delete);

  // Delete all News
  router.delete("/", news.deleteAll);

  app.use('/api/news', router);
};
