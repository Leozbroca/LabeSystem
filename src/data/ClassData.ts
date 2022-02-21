import { BaseDatabase } from "../connection/connection";
import { labeClass } from "../types";

export class ClassDatabase extends BaseDatabase {
    private static TABLE_NAME = "labeSystem_class"
    
    public async createClass(name:string, module:string):Promise<void> {
        try{
            await this.getConnection()
            .insert({
                name: name,
                module: module
            })
            .into(ClassDatabase.TABLE_NAME)
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async changeModule(id:string, module:string):Promise<void> {
        try{
            await this.getConnection()
            .update({module: module})
            .where({id: id})
            .into(ClassDatabase.TABLE_NAME)
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAllClasses():Promise<any> {
        try{
            const result:Array<labeClass> = await this.getConnection()
            .select()
            .from(ClassDatabase.TABLE_NAME)

            return result;
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getPeopleByClass(class_id:number):Promise<any> {
        try{
            const result = await this.getConnection()
            .select("name", "email")
            .from("labeSystem_estudants")
            .where({class_id: class_id});

            const result2 = await this.getConnection()
            .select("name", "email")
            .from("labeSystem_teacher")
            .where({class_id: class_id});

            
            const newResult = {teachers:result2, students:result}
            return newResult;
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getStudentByHobby(hobby_id:number):Promise<any> {
        try{
            const result = await this.getConnection().raw(
                `SELECT name, email FROM labeSystem_estudants INNER JOIN 
                labeSystem_estudant_hobby ON 
                labeSystem_estudants.id = labeSystem_estudant_hobby.estudant_id 
                WHERE labeSystem_estudant_hobby.hobby_id = ${hobby_id} ;`
                )

            const name = await this.getConnection()
            .select("name")
            .from("labeSystem_hobby")
            .where({id: hobby_id});

            const newResult = {hobby:name, students:result[0]}
            return newResult;
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getTeacherBySkill(skill_id:number):Promise<any> {
        try{
            const result = await this.getConnection().raw(
                `SELECT name, email FROM labeSystem_teacher INNER JOIN 
                labeSystem_teacher_skill ON 
                labeSystem_teacher.id = labeSystem_teacher_skill.teacher_id 
                WHERE labeSystem_teacher_skill.skill_id = ${skill_id} ;`
                )

            const name = await this.getConnection()
            .select("name")
            .from("labeSystem_skill")
            .where({id: skill_id});

            const newResult = {skill:name, teachers:result[0]}
            return newResult;
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
