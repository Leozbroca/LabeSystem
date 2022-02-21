import { ClassDatabase } from "../data/ClassData";
import { labeClass } from "../types";

class ClassBussiness {
     async createClass(name:string, module:string):Promise<void> {
        if(!name){
            throw new Error('Nome não informado')
        }
        if(!module){
            module = "0"
        }
        const classDataBase = new ClassDatabase()
        await classDataBase.createClass(name,module)
    }

    async changeModule(id:string, module:string):Promise<void> {
        if(!id){
            throw new Error('Id não informado')
        }
        if(!module){
            throw new Error('Modulo não informado')
        }
        const classDataBase = new ClassDatabase()
        await classDataBase.changeModule(id,module)
    }

    async getAllClasses():Promise<any> {
        const classDataBase = new ClassDatabase()
        const result:Array<labeClass> = await classDataBase.getAllClasses()
        if(!result[0]){
            throw new Error(`Nenhuma classe encontrada`)
        }
        return result;
    }

    async getPeopleByClass(class_id:any):Promise<any> {
        if (!class_id) {
            throw new Error("Checar id")
        }
        
        const classDataBase = new ClassDatabase()
        const result = await classDataBase.getPeopleByClass(class_id)
        return result;
    }

    async getStudentByHobby(hobby_id:any):Promise<any> {
        if (!hobby_id) {
            throw new Error("Checar id")
        }
        
        const classDataBase = new ClassDatabase()
        const result = await classDataBase.getStudentByHobby(hobby_id)
       
        if(!result.hobby[0]){
            throw new Error("Nenhum hobby encontrado")
        }
        return result;
    }

    async getTeacherBySkill(skill_id:any):Promise<any> {
        if (!skill_id) {
            throw new Error("Checar id")
        }
        
        const classDataBase = new ClassDatabase()
        const result = await classDataBase.getTeacherBySkill(skill_id)

        if(!result.skill[0]){
            throw new Error("Nenhuma skill encontrada")
        }
        return result;
    }
}

export default new ClassBussiness()