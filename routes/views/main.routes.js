const router = require('express').Router();
const { Book, User } = require('../../db/models');
const MainPage = require('../../components/pages/MainPage');
const ProfilePage = require('../../components/pages/ProfilePage');

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

module.exports = router;
