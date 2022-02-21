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
const StudentData_1 = require("../data/StudentData");
class StudentBussiness {
    createStudent(name, email, birth_date, class_id) {
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
            const studentDataBase = new StudentData_1.StudentDatabase();
            yield studentDataBase.createStudent(name, email, birth_date, class_id);
        });
    }
    getStudentByName(search) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!search) {
                throw new Error('Nome para pesquisa não informado');
            }
            const studentDataBase = new StudentData_1.StudentDatabase();
            const result = yield studentDataBase.getStudentByName(search);
            if (!result[0]) {
                throw new Error(`Nenhum estudante encontrado`);
            }
            return result;
        });
    }
    changeStudentClass(id, class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id || !class_id) {
                throw new Error("Check the id or class id");
            }
            const studentDataBase = new StudentData_1.StudentDatabase();
            yield studentDataBase.changeStudentClass(id, class_id);
        });
    }
}
exports.default = new StudentBussiness();
