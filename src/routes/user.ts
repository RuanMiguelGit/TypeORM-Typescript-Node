import { Router } from 'express'
import {getUSer,  createUser} from '../controllers/user'
const router = Router()

router.get('/user', getUSer)
router.get('/user/:id')
router.post('/user', createUser)
router.put('/user/:id')
router.delete('/user/:id')



export default router