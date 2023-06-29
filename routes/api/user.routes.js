const router = require('express').Router();
const { User } = require('../../db/models');
const ProfileInfo = require('../../components/ProfileInfo');

router.put('/', async (req, res) => {
  const { login, profilePic } = req.body;

  /* достаём userId из сессии, потому что логин может изменится */
  const { userId } = req.session;
  try {
    /* по Primary Key(Pk или первичный ключ) ищу этого юзера */
    const user = await User.findByPk(userId);

    /* меняю у этого объекта поля */
    user.login = login;
    user.profilePic = profilePic;

    /* сохраняю эти изменения в бд */
    await user.save();

    const html = res.renderComponent(ProfileInfo, { user }, { doctype: false });

    res.json({ message: 'success', html });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
