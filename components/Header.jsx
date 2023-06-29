const React = require('react');

function Header({ user }) {
  let contentNavBar;

  if (user) {
    contentNavBar = (
      <>
        <div className="nav-item nav-link">{`Привет, ${user.login}!`}</div>
        <a href="/users" className="btn btn-info">
          Все пользователи
        </a>
        <a href="/my-profile" className="btn btn-info">
          Мой профиль
        </a>
        <a className="btn btn-outline-secondary" href="/auth/logout">
          Выйти
        </a>
      </>
    );
  } else {
    contentNavBar = (
      <>
        <div className="nav-item nav-link">Привет, незнакомец!</div>
        <a className="btn btn-sm btn-outline-primary" href="/auth/register">
          Регистрация
        </a>
        <a className="btn btn-sm btn-outline-primary" href="/auth/login">
          Авторизация
        </a>
      </>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-white justify-content-between">
        <div className="container">
          <img className="logo" src="/images/logo.jpg" alt="cute whale" />
          <div>
            <a className="navbar-brand" href="/">Goodbooks</a>
            <span className="big-desc"> — рекомендуем хорошие книги</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav">{contentNavBar}</div>
          </div>
        </div>
      </nav>
    </header>
  );
}

module.exports = Header;
