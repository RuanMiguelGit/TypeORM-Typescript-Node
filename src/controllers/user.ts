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

export const getUserById =  async (req:Request, res:Response) => {
    const unique = await getRepository(User).findOne(req.params.id)
    return res.status(200).json({
        message:"Usuario encontrado",
        data: unique
    })
}


export const updateUser =  async (req:Request, res:Response) => {
    const unique = await getRepository(User).findOne(req.params.id)
    if (!unique) return res.status(400).json({
        message:"Usuario não existe"
    })

    const  update = await getRepository(User).merge(unique, req.body)
    const data = await getRepository(User).save(update)
    return res.status(200).json({
        message:"Usuario Atualizado",
        data: data
    })
}

export const deleteUser =  async (req:Request, res:Response) => {
    const unique = await getRepository(User).delete(req.params.id)
    return res.status(200).json({
        message:"Usuario Deletado",
    })
}
