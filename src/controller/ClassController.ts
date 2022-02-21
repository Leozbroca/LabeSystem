import { Request, Response } from "express";
import ClassBussiness from "../bussiness/ClassBussiness";
import { BaseDatabase } from "../connection/connection";
import { labeClass } from "../types";

export class ClassController {
    async createClass(req:Request, res:Response){
        try{
            const{name,module} = req.body
            await ClassBussiness.createClass(name,module)
            res.status(200).send("Classe criada com sucesso!")
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async changeModule(req:Request, res:Response){
        try{
            const{module} = req.body
            const id = req.params.id
            await ClassBussiness.changeModule(id,module)
            res.status(200).send("Módulo alterado com sucesso!")
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async getAllClasses(req:Request, res:Response){
        try{
            const result:Array<labeClass> = await ClassBussiness.getAllClasses()
            res.status(200).send(result)
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async getPeopleByClass(req:Request, res:Response): Promise<any> {
        try{
            const class_id:any = req.params.class_id
            const result = await ClassBussiness.getPeopleByClass(class_id)
            res.status(200).send(result)
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async getStudentByHobby(req:Request, res:Response):Promise<any> {
        try{
            const hobby_id:any = req.params.hobby_id
            const result = await ClassBussiness.getStudentByHobby(hobby_id)
            res.status(200).send(result)
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }

    async getTeacherBySkill(req:Request, res:Response):Promise<any> {
        try{
            const skill_id:any = req.params.skill_id
            const result = await ClassBussiness.getTeacherBySkill(skill_id)
            res.status(200).send(result)
        }
        catch(error:any){
            res.status(error.statusCode || 400).send({ error: error.message });
        } finally {
            await BaseDatabase.destroyConnection();
        }
    }
}