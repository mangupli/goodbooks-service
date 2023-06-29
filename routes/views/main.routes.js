const router = require('express').Router();
const { Book, User } = require('../../db/models');
const MainPage = require('../../components/pages/MainPage');
const ProfilePage = require('../../components/pages/ProfilePage');
const Users = require('../../components/pages/Users');
const UserPage = require('../../components/pages/UserPage');

// req - request
// res - response
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll({
      // решение проблемы с сортировкой русских букв
      // order: [[sequelize.literal('title COLLATE "C"'), 'ASC']],

      include: {
        model: User,
      },

      order: [['createdAt', 'DESC']],
    });

    const html = res.renderComponent(MainPage, { books });

    res.send(html);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

router.get('/my-profile', async (req, res) => {
  const { userId } = req.session;

  try {
    const books = await Book.findAll({
      where: { user_id: userId },
      include: {
        model: User,
      },
    });

    res.send(res.renderComponent(ProfilePage, { books }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();

    res.send(res.renderComponent(Users, { users }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/users/:userId', async (req, res) => {
  try {
    const { userId } = req.params;

    const oneUser = await User.findByPk(userId);

    const books = await Book.findAll({
      where: { user_id: userId },
      include: {
        model: User,
      },
    });

    res.send(res.renderComponent(UserPage, { oneUser, books }));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
