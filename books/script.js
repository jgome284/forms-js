// Click handler for search button
const captureSearchValue = () => {
    const searchValue = document.getElementById("search-bar");
    return searchValue.value;
  };
  
  // Filter books based on search input
  const filterBooks = (searchString, booksList) => {
      let matchingBooks = []
      let flattenedBooks = flattenObjectValuesIntoArray(books);
      
      for (let i = 0; i < flattenedBooks.length; i++){
          if (flattenedBooks[i].includes(searchString)) {
              matchingBooks.push(books[i]);
          }
      }
      return matchingBooks;
  };
  
  // Empty the book list container, iterate over list of filtered books, return list of books formatted as HTML using the function in `helper.js` 
  const structureBooksAsHtml = (matches) => {
      matchesAsHTML = [];
      let i = 0;
      while (i < matches.length) {
          matchAsHTML = structureBookAsHtml(matches[i]);
          matchesAsHTML.push(matchAsHTML)
          i++;
      }
      return matchesAsHTML;
  };
  
  // Handler triggered when a user clickers the "Search" button. Chains previously defined functions together to filter books based on the search value, formats the books as HTML and renders them to the DOM
  const searchBtnClickHandler = (books) => {
    const query = captureSearchValue();
    console.log(query);
    const filteredBooks = filterBooks(query, books);
    console.log(filteredBooks);
    const booksAsHTML = structureBooksAsHtml(filteredBooks);
    console.log(booksAsHTML)
    renderBooksToDom(booksAsHTML);
  }
  
  // Grab search button from the DOM
  const searchBtn = document.getElementById('search-btn');
  
  // Attach an event listener to the search button
  searchBtn.addEventListener("click", () => { searchBtnClickHandler(books) });