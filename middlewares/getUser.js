const { User } = require('../db/models');

// middleware - запускается при каждом запросе
async function getUser(req, res, next) {
  //  проверяем, если пользователь авторизован
  const { userId } = req.session;
  // res.locals - хранилище запроса (существует только во время исполнения одного запроса)
  // если пользователь авторизован, достаём его из базы данных
  res.locals.user = userId && (await User.findByPk(userId));
  next();
}

module.exports = getUser;
