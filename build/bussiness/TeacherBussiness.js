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
const TeacherData_1 = require("../data/TeacherData");
class TeacherBussiness {
    createTeacher(name, email, birth_date, class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name) {
                throw new Error('Nome não informado');
            }
            if (!email) {
                throw new Error('Email não informado');
            }
            if (!birth_date) {
                throw new Error('Data de nascimento não informado');
            }
            if (!class_id) {
                throw new Error('Classe não informada');
            }
            const teacherDataBase = new TeacherData_1.TeacherDatabase();
            yield teacherDataBase.createTeacher(name, email, birth_date, class_id);
        });
    }
    getTeacherByName(search) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!search) {
                throw new Error('Nome para pesquisa não informado');
            }
            const teacherDataBase = new TeacherData_1.TeacherDatabase();
            const result = yield teacherDataBase.getTeacherByName(search);
            if (!result[0]) {
                throw new Error(`Nenhum professor encontrado`);
            }
            return result;
        });
    }
    changeTeacherClass(id, class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id || !class_id) {
                throw new Error("Check the id or class id");
            }
            const teacherDataBase = new TeacherData_1.TeacherDatabase();
            yield teacherDataBase.changeTeacherClass(id, class_id);
        });
    }
    getAllTeachers() {
        return __awaiter(this, void 0, void 0, function* () {
            const teacherDataBase = new TeacherData_1.TeacherDatabase();
            const result = yield teacherDataBase.getAllTeachers();
            if (!result[0]) {
                throw new Error(`Nenhum professor encontrado`);
            }
            return result;
        });
    }
}
exports.default = new TeacherBussiness();
