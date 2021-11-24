import {Request, Response }from 'express'
import { User } from '../entity/user'
import { getRepository } from 'typeorm'

export const getUSer = async (req:Request, res:Response): Promise<Response> => {
const user  = await getRepository(User).find()
return res.status(200).json(user)
}

export const createUser = async (req:Request, res:Response): Promise<Response>  => {
    const newUser = await getRepository(User).create(req.body)
    const data =  await getRepository(User).save(newUser)
    return res.status(201).json({
        message:'Usuario criado com sucesso',
        data
    })
}