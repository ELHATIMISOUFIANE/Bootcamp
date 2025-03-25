const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://example.com/hobbit.jpg",
    alreadyRead: true,
  },
  {
    title: "1984",
    author: "George Orwell",
    image: "https://example.com/1984.jpg",
    alreadyRead: false,
  },
];

const section = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const div = document.createElement("div");
  div.innerHTML = `
      <p style="color: ${book.alreadyRead ? "red" : "black"}">
        ${book.title} written by ${book.author}
      </p>
      <img src="${book.image}" width="100px">
    `;
  section.appendChild(div);
});
