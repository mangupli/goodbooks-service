const React = require('react');
const Layout = require('./Layout');

function BookAddedPage({ book }) {
  return (
    <Layout title="ГудБук - книга добавлена">
      Добавлена книга: {book.title}
      <div>
        {/* условный рендеринг */}
        <div>{book.author && <span>({book.author})</span>}</div>

        <div>
          {book.author ? (
            <span>(автор: {book.author})</span>
          ) : (
            <span>(нет автора)</span>
          )}
        </div>
      </div>
    </Layout>
  );
}

module.exports = BookAddedPage;
