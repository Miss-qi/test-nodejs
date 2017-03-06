const {Router} = require('express');
const CategoryController = require('../../controller/category-controller');

const router = Router();
const categoryCtrl = new CategoryController();

router.get('/', categoryCtrl.getAll);
router.get('/:categoryId', categoryCtrl.getOne);
router.post('/', categoryCtrl.create);
router.put('/:categoryId', categoryCtrl.update);
router.delete('/:categoryId', categoryCtrl.delete);

module.exports = router;