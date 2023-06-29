const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const { User } = require('../../db/models');

router.post('/', async (req, res) => {
  const { login, password } = req.body;

  try {
    if (login && password) {
      /* Ищёт пользователя с таким логином в базе */
      let user = await User.findOne({ where: { login } });
      /* Если не нашёл — регистрирует */
      if (!user) {
        user = await User.create({
          login,
          /* хэшируем пароль */
          password: await bcrypt.hash(password, 10),
        });

        // авторизация - запоминаем пользователя
        // req.session - хранилище сессии, которое уникально для каждого браузера
        req.session.userId = user.id;
        res.locals.user = user;

        res.status(201).json({ message: 'ok' });
      } else {
        res.status(400).json({ message: 'Такой пользователь уже существует' });
      }
    } else {
      res.status(400).json({ message: 'Заполните все поля' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/login', async (req, res) => {
  const { login, password } = req.body;

  try {
    /*  проверяем, если есть пользователь с таким паролем */
    const user = await User.findOne({
      where: {
        login,
      },
    });

    /* если пользователь не найден */
    if (!user) {
      res.status(401).json({ message: 'User not found' });
      return;
    }

    // вот тут проверяем пароли
    if (!(await bcrypt.compare(password, user.password))) {
      res.status(401).json({ message: 'Password not correct' });
      return;
    }

    /*  вот так мы инициализируем сессию и кладём в объект req.session новый ключ userID */
    req.session.userId = user.id;

    /* чтобы появляся user в пропсах компоненты — мы будем locals передевать res.renderConponent */
    res.locals.user = user;
    res.json({ message: 'User logged in' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
