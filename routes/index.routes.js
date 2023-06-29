const router = require('express').Router();

const mainRouter = require('./views/main.routes');
const booksRouter = require('./views/books.routes');
const booksApiRouter = require('./api/books.routes');
const authApiRouter = require('./api/auth.routes');
const authRouter = require('./views/auth.routes');

router.use('/', mainRouter);
router.use('/books', booksRouter);
router.use('/api/books', booksApiRouter);
router.use('/auth/', authRouter);
router.use('/api/auth', authApiRouter);

module.exports = router;
