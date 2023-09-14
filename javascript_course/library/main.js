function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    if (read == true){
        this.read = "Already read!"
    }
    else {
        this.read = "Not read yet."
    }
}

Book.prototype = {
    info (){
        return `${this.title}, by ${this.author}, has ${this.pages} pages. ${this.read}`;
    }
}

const theHobbit = new Book("The Hobbit","J.R.R. Tolkien",310,true);

const shelf = document.getElementById("shelf");

function addNewBook(book){
    let newBook = document.createElement("div");
    let borderColor = "";
    if (book.read == "Already read!"){
        borderColor = `border-l-lime-600`;
    }
    else {
        borderColor = `border-l-amber-400`;
    }
    let bookCode = `<div class="shadow-md w-96 h-48 rounded-lg bg-white ${borderColor} p-4  border-l-8">
    <p class="font-semibold">Title</p>
    <p class='text-slate-500'>${book.info()}</p>
</div>`;
    newBook.innerHTML = bookCode;
    shelf.appendChild(newBook);
}

addNewBook(theHobbit);