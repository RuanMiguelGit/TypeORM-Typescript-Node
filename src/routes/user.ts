import { Router } from 'express'
import {getUSer,  createUser, getUserById, updateUser} from '../controllers/user'
const router = Router()

router.get('/user', getUSer)
router.get('/user/:id', getUserById)
router.post('/user', createUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id')



export default router