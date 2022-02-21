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
const ClassData_1 = require("../data/ClassData");
class ClassBussiness {
    createClass(name, module) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name) {
                throw new Error('Nome não informado');
            }
            if (!module) {
                module = "0";
            }
            const classDataBase = new ClassData_1.ClassDatabase();
            yield classDataBase.createClass(name, module);
        });
    }
    changeModule(id, module) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!id) {
                throw new Error('Id não informado');
            }
            if (!module) {
                throw new Error('Modulo não informado');
            }
            const classDataBase = new ClassData_1.ClassDatabase();
            yield classDataBase.changeModule(id, module);
        });
    }
    getAllClasses() {
        return __awaiter(this, void 0, void 0, function* () {
            const classDataBase = new ClassData_1.ClassDatabase();
            const result = yield classDataBase.getAllClasses();
            if (!result[0]) {
                throw new Error(`Nenhuma classe encontrada`);
            }
            return result;
        });
    }
    getPeopleByClass(class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!class_id) {
                throw new Error("Checar id");
            }
            const classDataBase = new ClassData_1.ClassDatabase();
            const result = yield classDataBase.getPeopleByClass(class_id);
            return result;
        });
    }
    getStudentByHobby(hobby_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!hobby_id) {
                throw new Error("Checar id");
            }
            const classDataBase = new ClassData_1.ClassDatabase();
            const result = yield classDataBase.getStudentByHobby(hobby_id);
            if (!result.hobby[0]) {
                throw new Error("Nenhum hobby encontrado");
            }
            return result;
        });
    }
    getTeacherBySkill(skill_id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!skill_id) {
                throw new Error("Checar id");
            }
            const classDataBase = new ClassData_1.ClassDatabase();
            const result = yield classDataBase.getTeacherBySkill(skill_id);
            if (!result.skill[0]) {
                throw new Error("Nenhuma skill encontrada");
            }
            return result;
        });
    }
}
exports.default = new ClassBussiness();
