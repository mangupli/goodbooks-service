// В каждом файле с реакт-компонентом должен быть подключён React
const React = require('react');

const Layout = require('../Layout');
const Book = require('../Book');

function MainPage({ books, user }) {
  return (
    <Layout user={user} title="ГудБук">
    <h4 className='small-desc'>Здесь мы рекомендуем хорошие книги:</h4>
      <div id="books-container">
        {books.map((book) => (
          <Book key={book.id} book={book} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
