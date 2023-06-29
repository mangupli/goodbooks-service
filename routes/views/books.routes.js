const router = require('express').Router();
const UpdateBookPage = require('../../components/pages/UpdateBookPage');

const { Book } = require('../../db/models');

router.get('/:id', async (req, res) => {
  /*   console.log('req.params: ', req.params); */

  /*  
  когда в запросе есть двоеточие — это параметризированный запрос.
  эти параметры попадают в объект req.params,
  где ключи — то, что после двоеточия
  значения — то, что в запросе
 */
  const { id } = req.params;

  const book = await Book.findOne({
    where: {
      id,
    },
  });

  const html = res.renderComponent(UpdateBookPage, { book });
  res.send(html);
});

router.post('/update/:bookId', async (req, res) => {
  try {
    /*   достаём данные из формы */
    const { title, author } = req.body;

    /* достать bookId из запроса */
    const { bookId } = req.params;
    const { userId } = req.session;

    if (!userId) {
      res
        .status(404)
        .json({ message: 'Сначала зарегистрируйся, а потом изменяй книги' });
      return;
    }

    const book = await Book.findByPk(bookId);

    if (book.user_id !== userId) {
      res
        .status(404)
        .json({ message: 'Сори ты не можешь изменять чужие книги' });
      return;
    }

    /* обновляем запись в базе данных */
    await Book.update(
      { title, author },
      {
        where: {
          id: bookId,
          user_id: userId, // проверка на юзера!
        },
      }
    );

    /* если всё успешно, то перенаправит на главную страницу */
    res.redirect('/');
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
});

module.exports = router;
