document.addEventListener('DOMContentLoaded', () => {
    const bookList = document.getElementById('book-list');
    const addBookBtn = document.getElementById('add-book-btn');
    const removeBookBtn = document.getElementById('remove-book-btn');
    const searchBar = document.getElementById('search-bar');
    let books = [];

    function displayBooks(filter = '') {
        bookList.innerHTML = '';
        books.filter(book => book.title.toLowerCase().includes(filter.toLowerCase())).forEach((book, index) => {
            const bookItem = document.createElement('li');
            bookItem.classList.add('book');
            bookItem.innerHTML = `
                <span class="${book.favorite ? 'favorite' : ''}">${book.title}</span>
                <button class="favorite-btn">${book.favorite ? '★' : '☆'}</button>
            `;
            bookItem.querySelector('span').addEventListener('click', () => {
                if (book.favorite) {
                    const removeFromFavorites = confirm('This book is already in your favorites. Do you want to remove it from your favorites?');
                    if (removeFromFavorites) {
                        books[index].favorite = false;
                        displayBooks(searchBar.value);
                    }
                } else {
                    const addToFavorites = confirm('Do you want to add this book to your favorites?');
                    if (addToFavorites) {
                        books[index].favorite = true;
                        displayBooks(searchBar.value);
                    }
                }
            });
            bookItem.querySelector('.favorite-btn').addEventListener('click', () => {
                books[index].favorite = !books[index].favorite;
                displayBooks(searchBar.value);
            });
            bookList.appendChild(bookItem);
        });
    }

    addBookBtn.addEventListener('click', () => {
        const title = prompt('Enter book title:');
        if (title && !books.some(book => book.title.toLowerCase() === title.toLowerCase())) {
            books.push({ title, favorite: false });
            displayBooks(searchBar.value);
        } else if (title) {
            alert('This book is already in the list.');
        }
    });

    removeBookBtn.addEventListener('click', () => {
        const title = prompt('Enter book title to remove:');
        if (title) {
            books = books.filter(book => book.title.toLowerCase() !== title.toLowerCase());
            displayBooks(searchBar.value);
        }
    });

    searchBar.addEventListener('input', () => {
        displayBooks(searchBar.value);
    });

    // Initial display of books (if any)
    displayBooks();
});
