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
exports.StudentDatabase = void 0;
const connection_1 = require("../connection/connection");
class StudentDatabase extends connection_1.BaseDatabase {
    createStudent(name, email, birth_date, class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    name: name,
                    email: email,
                    birth_date: birth_date,
                    class_id: class_id
                })
                    .into(StudentDatabase.TABLE_NAME);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    getStudentByName(search) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.getConnection()
                    .select('id', 'name')
                    .from(StudentDatabase.TABLE_NAME)
                    .whereILike('name', `%${search}%`);
                return result;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
    changeStudentClass(id, class_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .update({ class_id: class_id })
                    .from(StudentDatabase.TABLE_NAME)
                    .where({ id: id });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.StudentDatabase = StudentDatabase;
StudentDatabase.TABLE_NAME = "labeSystem_estudants";
