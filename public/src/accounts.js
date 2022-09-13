
//uses the find method to search for the account id.
function findAccountById(accounts, id) {
  return accounts.find((account)=> account.id ===id);
}

//uses the sort method to sort the last names in alphabetical order.
function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB)=> nameA.name.last.toLowerCase() > nameB.name.last.toLowerCase() ? 1 : -1);
}

//uses the filter method to find how many times a book has been borrowed. 
function getTotalNumberOfBorrows(account, books) {
  let sum = 0;
  books.forEach(book => book.borrows.forEach(borrower => account.id ===borrower.id ? sum++ : sum))
  return sum;
}


//should return all of the books taken out by an account with the author embedded:
// look in account object to return books by certain author
//the book array has links to the account and authors array by ids
//returns an array of book objects with an author object for each book checked out
function getBooksPossessedByAccount(account, books, authors) {
  const idNum = account.id;
  let possessedBooks = [];
  const findAuthor = (authors, id) => authors.find(author => author.id === id);
  possessedBooks = books.filter(book => book.borrows[0].id === idNum && !book.borrows[0].returned);
  possessedBooks = possessedBooks.map(book => {
    const authorInfo = findAuthor(authors, book.authorId);
    const possessedBook = {...book, author: authorInfo};
    return possessedBook;
  });
  return possessedBooks;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
