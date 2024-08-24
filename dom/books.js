function addBook() {
    const bookTitle = prompt("Enter the book title:");
    if (bookTitle) {
        const ul = document.getElementById("book-list");
        const li = document.createElement("li");
        li.textContent = bookTitle;
        ul.appendChild(li);
    }
}

function searchBook() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const ul = document.getElementById("book-list");
    const liElements = ul.getElementsByTagName("li");

    for (let li of liElements) {
        if (li.textContent.toLowerCase().includes(searchTerm)) {
            li.style.backgroundColor = "yellow";
        } else {
            li.style.backgroundColor = "";
        }
    }
}

function removeBook() {
    const ul = document.getElementById("book-list");
    if (ul.lastElementChild) {
        const confirmRemoval = confirm("Are you sure you want to remove the last book?");
        if (confirmRemoval) {
            ul.removeChild(ul.lastElementChild);
        }
    } else {
        alert("No books to remove.");
    }
}


function toggleFavorite(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("favorite");
    }
}
document.getElementById("book-list").addEventListener("click", toggleFavorite);


function clearSearchHighlights() {
    const ul = document.getElementById("book-list");
    const liElements = ul.getElementsByTagName("li");

    for (let li of liElements) {
        li.style.backgroundColor = "";
    }
}
