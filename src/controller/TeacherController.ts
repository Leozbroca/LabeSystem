import { Request, Response } from "express";
import  TeacherBussiness  from "../bussiness/TeacherBussiness";
import { BaseDatabase } from "../connection/connection";

export class TeacherController {
    async createTeacher(req:Request, res:Response){
        try{
            const{name,email,birth_date,class_id} = req.body
            await TeacherBussiness.createTeacher(name,email,birth_date,class_id)
            res.status(200).send("Professor criado com sucesso!")
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async getTeacherByName(req:Request, res:Response):Promise<any> {
        try{
            const search = req.query.search
            const result = await TeacherBussiness.getTeacherByName(search)
            res.status(200).send(result)
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });   
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async changeTeacherClass(req:Request, res:Response): Promise<void> {
        try{
            const id = req.params.id
            const{class_id} = req.body
            await TeacherBussiness.changeTeacherClass(id,class_id)
            res.status(200).send("Turma do professor trocada com sucesso!")
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async getAllTeachers(req:Request, res:Response){
        try{
            const result = await TeacherBussiness.getAllTeachers()
            res.status(200).send(result)
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }
}