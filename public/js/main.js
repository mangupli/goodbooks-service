const addBookForm = document.getElementById('add-book-form');
const booksContainer = document.getElementById('books-container');

addBookForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const { title, author } = addBookForm;

  // отправляем запрос на сервер, URL - /books
  const response = await fetch('/api/books', {
    method: 'POST',
    body: JSON.stringify({
      title: title.value,
      author: author.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // получаем ответ в формате json
  const result = await response.json();

  // вставляем html в начало контейнера
  booksContainer.insertAdjacentHTML('afterbegin', result.html);
});

// делегирование событий
booksContainer.addEventListener('click', async (event) => {
  if (event.target.classList.contains('remove-book')) {
    event.preventDefault();

    const link = event.target;
    const bookEl = link.closest('.book');

    const id = bookEl.dataset.id; // eslint-disable-line prefer-destructuring

    await fetch(`/api/books/${id}`, { method: 'DELETE' });

    bookEl.remove();
  }
});
