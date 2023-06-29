const React = require('react');
const Layout = require('../Layout');
const ProfileInfo = require('../ProfileInfo');
const Book = require('../Book');

function ProfilePage({ user, books }) {
  return (
    <Layout user={user}>
      <div className="card js-profile-card" style={{ width: '18rem' }}>
        <div className="card-header">Ваши персональные данные</div>
        <div className="card-body">
          <div className="js-profile-info">
            <ProfileInfo user={user} />
          </div>
          <button type="button" className="btn btn-primary js-change-btn">
            Изменить
          </button>
        </div>
      </div>
      <form style={{ display: 'none' }} className="js-change-profile-form">
        <div className="form-group">
          <label>
            Фото профиля
            <input
              type="text"
              className="form-control"
              name="profilePic"
              defaultValue={user.profilePic}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Логин
            <input
              type="text"
              className="form-control"
              name="login"
              defaultValue={user.login}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Сохранить изменения
        </button>
      </form>
      <form id="add-book-form" className="mb-3">
        <h3>Добавить книгу</h3>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Название
          </label>
          <input className="form-control" name="title" id="nameInput" />
        </div>
        <div className="mb-3">
          <label htmlFor="authorInput" className="form-label">
            Автор
          </label>
          <input className="form-control" name="author" id="authorInput" />
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить
        </button>
      </form>

      <div className="" id="books-container">
        {/* хочу, чтобы отображались все мои книги здесь */}
        {books.map((book) => (
          <Book book={book} user={user} />
        ))}
      </div>

      <script src="/js/profile.js" />
      <script src="/js/main.js" defer />
    </Layout>
  );
}

module.exports = ProfilePage;
