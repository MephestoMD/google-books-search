const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// /api/books GET route to display all saved books and post to save a book
router.route("/").get(booksController.findAll).post(booksController.save);

// /api/books/:id to find a book by specific book or delete a specific book from a collection
router
  .route("/:id")
  .get(booksController.findById)
  .delete(booksController.remove);

module.exports = router;
