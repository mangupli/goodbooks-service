const React = require('react');
const Layout = require('../Layout');

function RegisterForm({ user }) {
  return (
    <Layout user={user}>
      <form id="form-register" style={{ marginTop: '30px' }}>
        <h2>Регистрация</h2>
        <div className="mb-3">
          <label className="form-label">
            Логин
            <input type="text" className="form-control" name="login" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Пароль
            <input type="password" className="form-control" name="password" />
          </label>
        </div>
        <button type="submit" className="btn btn-outline-warning">
          Зарегистрироваться
        </button>
        <script defer src="/js/auth.js" />
      </form>
    </Layout>
  );
}

module.exports = RegisterForm;
