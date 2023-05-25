 let books = [];

function Book(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = false;
    this.info = function() {
        let readStatus;
        if(this.read == false) {
            readStatus = 'You did not read this book yet.';
        }
        else {
            readStatus = 'You read this book already.'
        }
      return title + ", " + author + ", " + pages + ' ' + readStatus;
    }
    this.isRead = function() {
        return this.read;
    }
    this.updateRead = function(read) {
        this.read = read;
    }
}
function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages)
    books.push(book);
}
function removeBookFromLibrary(id) {
    books.splice(books[id], 1); // 2nd parameter means remove one item only
    
}

const bookContainer = document.querySelector('.book-container'); 

function displayBooks() {
    for (let i = 0; i < books.length; i++) {
        const div = document.createElement('div');
        div.id = i;
        div.textContent = books[i].info();
        bookContainer.appendChild(div);
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'Delete'; 
        deleteBtn.addEventListener('click', () => {
            let b = document.getElementById(i);   
            bookContainer.removeChild(b);
            removeBookFromLibrary(i);
            updateBookDisplay();
        }); 
        bookContainer.appendChild(deleteBtn); 

        const readBtn = document.createElement('button');
        readBtn.classList.add('readBtn');
        readBtn.textContent = 'Read'; 
        readBtn.addEventListener('click', () => {
            books[i].updateRead(true);
            updateBookDisplay();
        }); 
        bookContainer.appendChild(readBtn); 
    }
}
function removeBookDisplay() {
    bookContainer.innerHTML = '';
}
function updateBookDisplay() {
    removeBookDisplay();
    displayBooks();
}

const btnAddBook = document.getElementById('btn-add-book');

btnAddBook.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
});

var clickSubmit = function(event) {
    event.preventDefault();
    const title = document.getElementById('book_title').value
    const author = document.getElementById('book_author').value
    const pages = document.getElementById('book_pages').value
  
    let bookID = books.length
    const book = new Book(title, author, pages)
    /* const div = document.createElement('div');
    div.id = bookID;
    div.textContent = book.info();
    bookContainer.appendChild(div);  
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.textContent = 'delete'; 

    btn.addEventListener('click', () => {
        let b = document.getElementById(bookID);   
        bookContainer.removeChild(b);
        removeBookFromLibrary(bookID);
        updateBookDisplay();
        

    }); 
    bookContainer.appendChild(btn);*/
    addBookToLibrary(title, author, pages)
    updateBookDisplay();
};

// your form
var form = document.getElementById("form");

// attach event listener
form.addEventListener("submit", clickSubmit, true);

