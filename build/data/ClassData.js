"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassDatabase = void 0;
const connection_1 = require("../connection/connection");
class ClassDatabase extends connection_1.BaseDatabase {
    createClass(name, module) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    name: name,
                    module: module
                })
                    .into(ClassDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    changeModule(id, module) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .update({ module: module })
                    .where({ id: id })
                    .into(ClassDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getAllClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select()
                    .from(ClassDatabase.TABLE_NAME);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getPeopleByClass(class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select("name", "email")
                    .from("labeSystem_estudants")
                    .where({ class_id: class_id });
                const result2 = yield this.getConnection()
                    .select("name", "email")
                    .from("labeSystem_teacher")
                    .where({ class_id: class_id });
                const newResult = { teachers: result2, students: result };
                return newResult;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getStudentByHobby(hobby_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().raw(`SELECT name, email FROM labeSystem_estudants INNER JOIN 
                labeSystem_estudant_hobby ON 
                labeSystem_estudants.id = labeSystem_estudant_hobby.estudant_id 
                WHERE labeSystem_estudant_hobby.hobby_id = ${hobby_id} ;`);
                const name = yield this.getConnection()
                    .select("name")
                    .from("labeSystem_hobby")
                    .where({ id: hobby_id });
                const newResult = { hobby: name, students: result[0] };
                return newResult;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getTeacherBySkill(skill_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection().raw(`SELECT name, email FROM labeSystem_teacher INNER JOIN 
                labeSystem_teacher_skill ON 
                labeSystem_teacher.id = labeSystem_teacher_skill.teacher_id 
                WHERE labeSystem_teacher_skill.skill_id = ${skill_id} ;`);
                const name = yield this.getConnection()
                    .select("name")
                    .from("labeSystem_skill")
                    .where({ id: skill_id });
                const newResult = { skill: name, teachers: result[0] };
                return newResult;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ClassDatabase = ClassDatabase;
ClassDatabase.TABLE_NAME = "labeSystem_class";
