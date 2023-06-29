const React = require('react');
const Layout = require('../Layout');
const ProfileInfo = require('../ProfileInfo');
const Book = require('../Book');

function UserPage({ user, books, oneUser }) {
  if (!oneUser) {
    return (
      <Layout user={user}>
        <h3>Такого пользователя нет!</h3>
      </Layout>
    );
  }
  return (
    <Layout user={user}>
      <h3>{`Книги, которые советует ${oneUser.login}:`}</h3>
      {books.map((book) => (
        <Book book={book} user={user} />
      ))}
    </Layout>
  );
}

module.exports = UserPage;
