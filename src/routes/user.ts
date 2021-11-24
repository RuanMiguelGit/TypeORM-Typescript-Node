import { Router } from 'express'
import {getUSer} from '../controllers/user'
const router = Router()

router.get('/user', getUSer)
router.get('/user/:id')
router.post('/user')
router.put('/user/:id')
router.delete('/user/:id')



export default router