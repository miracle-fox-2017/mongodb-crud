const router=require("express").Router();
const libraryController=require("../controller/library");

// Retreive all books
router.get("/all",libraryController.getAllBooks);

// Add book
router.post("/add",libraryController.addBook);

// Update book
router.put("/update/:isbn",libraryController.updateBook);

// Delete book
router.delete("/delete/:isbn",libraryController.deleteBook);

module.exports=router;
