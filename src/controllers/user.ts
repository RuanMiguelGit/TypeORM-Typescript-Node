import {Request, Response }from 'express'
import { User } from '../entity/user'
import { getRepository } from 'typeorm'

export const getUSer = async (req:Request, res:Response): Promise<Response> => {
const user  = await getRepository(User).find()
return res.status(200).json(user)
}