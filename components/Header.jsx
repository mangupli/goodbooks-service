const React = require('react');

function Header({ user }) {
  let contentNavBar;

  if (user) {
    contentNavBar = (
      <>
        <div className="nav-item nav-link">{`Привет, ${user.login}!`}</div>
        <a href="/my-profile" className="btn btn-info">
          Профиль
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
        <img className="logo" src="/images/logo.jpg" alt="cute whale" />
        <div className="container">
          <a className="navbar-brand" href="/">
            Goodbooks — рекомендуем хорошие книги
          </a>
          <div className="navbar-nav">{contentNavBar}</div>
        </div>
      </nav>
    </header>
  );
}

module.exports = Header;
