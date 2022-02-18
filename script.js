// global variables
const loginBtn = document.querySelector('.login-btn');
const mainBody = document.querySelector('.main-body');
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('form');
const closeBtn = document.querySelector('.close-btn');
const newBook = document.querySelector('.next-book');
const addBookBtn = document.querySelector('.add-book-button');
const submitBtn = document.querySelector('button[class = "submit"]');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const formCheckbox = document.querySelector('#status');
let title;
let author;
let pages ;
let reStatus;
let bookObj;

let myLibrary = [];

function Book(title, author, pages, reStatus){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.reStatus = reStatus;
}

function addBookToLibrary(){  
    bookObj = new Book(title, author, pages , reStatus);
    myLibrary.push(bookObj);
    createBookCard(bookObj);
    console.log(myLibrary);
}
createBookCard({ title: "Think like a programmer", author: "V anton spraul", pages: "260", reStatus: true })

function createBookCard(obj){
    const bookBody = document.createElement('div');
    const bookDetails = document.createElement('div');
    const deleteBtn = document.createElement('button');
    const bookTitle = document.createElement('div');
    const bookAuthor = document.createElement('div');
    const bookPages = document.createElement('div');
    const readStatus =document.createElement('div');
    const readStatusCheckbox = document.createElement('input');
    const readStatusLabel = document.createElement('label');

    //Append Child
    mainBody.insertBefore(bookBody, newBook);
    bookBody.appendChild(bookDetails);
    bookBody.appendChild(deleteBtn);
    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookPages);
    bookDetails.appendChild(readStatus);
    readStatus.appendChild(readStatusCheckbox);
    readStatus.appendChild(readStatusLabel);

    //Text contents
    deleteBtn.textContent ='X';
    bookTitle.textContent = obj.title;
    bookAuthor.textContent = obj.author;
    bookPages.textContent = obj.pages+' pages';
    if(obj.reStatus == true){
        readStatus.classList.add('read');
        readStatusCheckbox.setAttribute('checked', 'checked');
        readStatus.classList.remove('not-read')
        readStatusLabel.textContent = 'Read';
    }else{
        readStatus.classList.remove('read')
        readStatus.classList.add('not-read');
        readStatusLabel.textContent = 'Not Read';
    }

    //Add class for styling
    bookBody.classList.add('book-cover');
    bookDetails.classList.add('book-details');
    deleteBtn.classList.add('delete-btn');
    bookTitle.classList.add('book-title');
    bookAuthor.classList.add('book-author');
    bookPages.classList.add('book-pages-count');
    readStatus.classList.add('read-status');

    //other attributes
    readStatusCheckbox.type = 'checkbox';
    readStatusCheckbox.setAttribute('id', 'status');
    readStatusCheckbox.setAttribute('name', 'status');
    readStatusLabel.setAttribute('for', 'status');
    
    //Toggle Read status checkbox
    readStatusCheckbox.addEventListener('click',()=>{
        if(readStatusCheckbox.checked){
            readStatus.classList.add('read');
            readStatus.classList.remove('not-read')
            readStatusLabel.textContent = 'Read';
        }else{
            readStatus.classList.remove('read')
            readStatus.classList.add('not-read');
            readStatusLabel.textContent = 'Not Read';
        }
    });
    
    //Delete book card
    deleteBtn.addEventListener('click',(e)=>{
        bookBody.remove(e.parentNode);
    });
    
}

loginBtn.addEventListener('click', ()=>{
    alert('Sorry, This service is not available at this moment.');
});

addBookBtn.addEventListener('click',()=>{
    formContainer.style.cssText= 'visibility: visible';
});
closeBtn.addEventListener('click', ()=>{
    formContainer.style.cssText = 'visibility: hidden';
    form.reset();
});

submitBtn.addEventListener('click',()=>{
    title =titleInput.value;
    author = authorInput.value;
    pages = pagesInput.value;
    reStatus = formCheckbox.checked;
    if(title !=''&& author!= ''){
        addBookToLibrary();
        form.reset();
        formContainer.style.cssText = 'visibility: hidden';
    }else{
        alert("Fill the form completely!");
    }
     
    
});

