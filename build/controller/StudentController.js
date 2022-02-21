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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const StudentBussiness_1 = __importDefault(require("../bussiness/StudentBussiness"));
const connection_1 = require("../connection/connection");
class StudentController {
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, birth_date, class_id } = req.body;
                yield StudentBussiness_1.default.createStudent(name, email, birth_date, class_id);
                res.status(200).send("Estudante criado com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send({ error: error.message });
            }
            finally {
                yield connection_1.BaseDatabase.destroyConnection();
            }
        });
    }
    getStudentByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const search = req.query.search;
                const result = yield StudentBussiness_1.default.getStudentByName(search);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(error.statusCode || 400).send({ error: error.message });
            }
            finally {
                yield connection_1.BaseDatabase.destroyConnection();
            }
        });
    }
    changeStudentClass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { class_id } = req.body;
                yield StudentBussiness_1.default.changeStudentClass(id, class_id);
                res.status(200).send("Turma do estudante trocada com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send({ error: error.message });
            }
            finally {
                yield connection_1.BaseDatabase.destroyConnection();
            }
        });
    }
}
exports.StudentController = StudentController;
