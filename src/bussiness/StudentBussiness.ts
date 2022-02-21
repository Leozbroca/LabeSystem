import { StudentDatabase } from "../data/StudentData";
import { LabeStudent } from '../types';

class StudentBussiness {

    async createStudent(name:string, email:string, birth_date:string, class_id:number):Promise<void> {
        if(!name){
            throw new Error('Nome não informado')
        }
        if(!email){
            throw new Error('Email não informado')
        }
        if(!birth_date){
            throw new Error('Data de nascimento não informado')
        }
        if(!class_id){
            throw new Error('Classe não informada')
        }
        const studentDataBase = new StudentDatabase()
        await studentDataBase.createStudent(name,email,birth_date,class_id)
    }

    async getStudentByName(search:any):Promise<any> {
        if(!search){
            throw new Error('Nome para pesquisa não informado')
        }
        
        const studentDataBase = new StudentDatabase()
        const result:Array<LabeStudent> = await studentDataBase.getStudentByName(search)
        if (!result[0]) {
            throw new Error(`Nenhum estudante encontrado`)
        }
        return result;
    }

    async changeStudentClass(id:any, class_id:number):Promise<void> {
        if (!id || !class_id) {
            throw new Error("Check the id or class id")
        }
        
        const studentDataBase = new StudentDatabase()
        await studentDataBase.changeStudentClass(id, class_id)
    }
}

export default new StudentBussiness()