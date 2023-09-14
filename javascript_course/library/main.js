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

const shelf = document.getElementById("shelf");

let idCount = 0;

function addNewBook(book){
    let newBook = document.createElement("div");
    let borderColor = "";
    if (book.read == "Already read!"){
        borderColor = `border-l-lime-600`;
    }
    else {
        borderColor = `border-l-amber-400`;
    }
    let bookCode = `<div class="shadow-md w-96 h-48 rounded-lg bg-white ${borderColor} p-4  border-l-8 relative">
    <p class="font-semibold">Title</p>
    <p class='text-slate-500'>${book.info()}</p>
    <div class="flex gap-4 absolute right-4 bottom-4">
    <button id="delete-${idCount}"><svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22"><title>trash</title><path d="M10 7V16H8V7H10M12 7H14V16H12V7M8 2H14V3H19V5H18V19H17V20H5V19H4V5H3V3H8V2M6 5V18H16V5H6Z" /></svg></button>
    </div>
</div>`;
    newBook.innerHTML = bookCode;
    shelf.appendChild(newBook);
    const deletebutton = document.getElementById(`delete-${idCount}`);
    deletebutton.addEventListener('click', () => {
        const trash = deletebutton.parentElement.parentElement;
        trash.remove();
    })
    idCount++;
}

const form = document.getElementById("form");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.querySelector('input[name="read"]:checked').value;
    const booleanValue = read === "true" ? true : false;
    const book = new Book(title,author,pages,booleanValue);
    addNewBook(book);
})