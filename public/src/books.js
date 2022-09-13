function findAuthorById(authors, id) {
return authors.find((author)=> author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {

  //all books that have not been returned, returned =false
  const outBooks = books.filter((book) => book.borrows.some(trans => !trans.returned));
  //all books that have returned as true.
  const inBooks = books.filter((book)=> book.borrows.every(trans => trans.returned));
  //putting my arrays together into one array
  const allBooksStatus = [outBooks, inBooks];
  //returning the array
  return allBooksStatus;
}


//this function will look inside of the borrows array and look through its transactions for the account ids of the users who borrowed that book.
function getBorrowersForBook(book, accounts) {
  return book.borrows.map(trans => {
    const account = accounts.find(account => account.id == trans.id);
    return {...trans, ...account};
  }).slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
