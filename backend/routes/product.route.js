import express from 'express';

import {create, deleteProduct, getProducts, updateProduct} from 
"../controllers/product.controller.js";

const router = express.router();

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/', updateProduct);
router.delete('/:id', deleteProduct);

export default router;