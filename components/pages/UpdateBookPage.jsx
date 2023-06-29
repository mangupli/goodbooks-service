const React = require('react');

function UpdateBookPage({ book }) {
  return (
    <div>
      <h2>Хотим изменить книгу:</h2>
        <form action={`/books/update/${book.id}`} method='POST'>
        <div>
          Название <input name="title" required value={book.title}/>
        </div>
        <div>
          Автор <input name="author" value={book.author} />
        </div>
        <button type="submit">Сохранить изменения</button>
      </form>
    </div>
  );
}

module.exports = UpdateBookPage;
