// В каждом файле с реакт-компонентом должен быть подключён React
const React = require('react');

const Layout = require('../Layout');
const Book = require('../Book');

function MainPage({ books, user }) {
  return (
    <Layout user={user} title="ГудБук">
      <div id="books-container">
        {books.map((book) => (
          <Book key={book.id} book={book} user={user} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = MainPage;
