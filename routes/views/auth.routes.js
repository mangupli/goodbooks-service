const router = require('express').Router();
const RegisterForm = require('../../components/pages/RegisterForm');
const LoginForm = require('../../components/pages/LoginForm');

router.get('/register', (req, res) => {
  res.send(res.renderComponent(RegisterForm));
});

router.get('/login', (req, res) => {
  res.send(res.renderComponent(LoginForm));
});

router.get('/logout', (req, res) => {
  // удаление сессии
  req.session.destroy(() => {
    // очищаем куку (название куки лежит в config/session.js свойство cookie.name)
    res.clearCookie('user_sid');
    res.redirect('/');
  });
});

module.exports = router;
