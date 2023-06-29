const React = require('react');

function Book({ book, user }) {
  // data- - это кастомные атрибуты

  let btn = '';

  if (user && book.user_id === user.id) {
    btn = (
      <a href="#" className="btn btn-primary remove-book">
        удалить
      </a>
    );
  }

  return (
    <div className="card book mb-3" data-id={book.id}>
      <div className="card-body">
        <h5 className="card-title">
          <a href={`/books/${book.id}`}>{book.title}</a>
        </h5>
        <p className="card-text">{book.author}</p>
      </div>
      <div className="card-footer">
        <p className="card-text">{`Добавлена пользователем:${book.User.login} `}</p>
        {btn}
      </div>
    </div>
  );
}

module.exports = Book;
