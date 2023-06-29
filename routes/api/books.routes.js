const booksApiRouter = require('express').Router();
const BookView = require('../../components/Book');

const { Book, User } = require('../../db/models');

// POST /api/books, сюда придёт фетч-запрос на добавление книги
booksApiRouter.post('/', async (req, res) => {
  try {
    const { title, author } = req.body;

    const { userId } = req.session;

    /* создаём запись в базе данных с новой книгой */
    const book = await Book.create({
      title,
      author: author === '' ? 'без автора' : author,
      user_id: userId,
    });

    const newBook = await Book.findOne({
      include: {
        model: User,
      },

    });

    const renderedHTML = res.renderComponent(
      BookView,
      { book: newBook },
      { doctype: false }
    );

    res.json({ success: true, html: renderedHTML });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

// DELETE /api/books/:id
booksApiRouter.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const {userId} = req.session;

    if(!userId){
      res.status(404).json({message: 'Сначала зарегистрируйся, а потом удаляй'})
      return;
    }

    const book = await Book.findByPk(id);

    if(book.user_id !== userId){
      res.status(404).json({message: 'Сори ты не можешь удалять чужие книги'})
      return;
    }

    await Book.destroy({ where: { id, user_id: userId } }); // проверка на IDOR

    res.json({ success: true });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = booksApiRouter;
