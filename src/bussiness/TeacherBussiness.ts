import { TeacherDatabase } from "../data/TeacherData";

class TeacherBussiness {

    async createTeacher(name:string, email:string, birth_date:string, class_id:number):Promise<void> {
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
        const teacherDataBase = new TeacherDatabase()
        await teacherDataBase.createTeacher(name,email,birth_date,class_id)
    }

    async getTeacherByName(search:any):Promise<any> {
        if(!search){
            throw new Error('Nome para pesquisa não informado')
        }
        
        const teacherDataBase = new TeacherDatabase()
        const result = await teacherDataBase.getTeacherByName(search)
        if (!result[0]) {
            throw new Error(`Nenhum professor encontrado`)
        }
        return result;
    }

    async changeTeacherClass(id:any, class_id:number):Promise<void> {
        if (!id || !class_id) {
            throw new Error("Check the id or class id")
           }
        
        const teacherDataBase = new TeacherDatabase()
        await teacherDataBase.changeTeacherClass(id, class_id)
    }

    async getAllTeachers():Promise<any> {
        const teacherDataBase = new TeacherDatabase()
        const result = await teacherDataBase.getAllTeachers()
        if(!result[0]){
            throw new Error(`Nenhum professor encontrado`)
        }
        return result;
    }
}

export default new TeacherBussiness()