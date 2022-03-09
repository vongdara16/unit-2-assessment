import { Router } from 'express'
const router = Router()

/* GET users listing. */
router.get('/', booksCtrl.index)

export {
  router
}
