import { Request, Response } from "express";
import StudentBussiness from "../bussiness/StudentBussiness";
import { BaseDatabase } from "../connection/connection";
import { LabeStudent } from '../types';

export class StudentController {
    async createStudent(req:Request, res:Response):Promise<void> {
        try{
            const{name,email,birth_date,class_id} = req.body
            await StudentBussiness.createStudent(name,email,birth_date,class_id)
            res.status(200).send("Estudante criado com sucesso!")
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async getStudentByName(req:Request, res:Response):Promise<any> {
        try{
            const search = req.query.search
            const result:Array<LabeStudent> = await StudentBussiness.getStudentByName(search)
            res.status(200).send(result)
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });   
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async changeStudentClass(req:Request, res:Response): Promise<void> {
        try{
            const id = req.params.id
            const{class_id} = req.body
            await StudentBussiness.changeStudentClass(id,class_id)
            res.status(200).send("Turma do estudante trocada com sucesso!")
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }
}
