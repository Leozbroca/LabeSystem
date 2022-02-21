import { BaseDatabase } from '../connection/connection';
import { LabeStudent } from '../types';

export class StudentDatabase extends BaseDatabase {
    private static TABLE_NAME = "labeSystem_estudants"
    
    public async createStudent(name:string, email:string, birth_date:string, class_id:number):Promise<void> {
        try{
            await this.getConnection()
            .insert({
                name: name,
                email: email,
                birth_date: birth_date,
                class_id: class_id
            })
            .into(StudentDatabase.TABLE_NAME)
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getStudentByName(search:any):Promise<any> {
        try{
            const result:Array<LabeStudent> = await this.getConnection()
            .select('id','name')
            .from(StudentDatabase.TABLE_NAME)
            .whereILike('name', `%${search}%`)
            return result;
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async changeStudentClass(id:number, class_id:number):Promise<void> {
        try{
            await this.getConnection()
            .update({class_id: class_id})
            .from(StudentDatabase.TABLE_NAME)
            .where({id: id})
        }
        catch(error:any){
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
