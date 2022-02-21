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
exports.TeacherController = void 0;
const TeacherBussiness_1 = __importDefault(require("../bussiness/TeacherBussiness"));
const connection_1 = require("../connection/connection");
class TeacherController {
    createTeacher(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, birth_date, class_id } = req.body;
                yield TeacherBussiness_1.default.createTeacher(name, email, birth_date, class_id);
                res.status(200).send("Professor criado com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send({ error: error.message });
            }
            finally {
                yield connection_1.BaseDatabase.destroyConnection();
            }
        });
    }
    getTeacherByName(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const search = req.query.search;
                const result = yield TeacherBussiness_1.default.getTeacherByName(search);
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
    changeTeacherClass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const { class_id } = req.body;
                yield TeacherBussiness_1.default.changeTeacherClass(id, class_id);
                res.status(200).send("Turma do professor trocada com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send({ error: error.message });
            }
            finally {
                yield connection_1.BaseDatabase.destroyConnection();
            }
        });
    }
    getAllTeachers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield TeacherBussiness_1.default.getAllTeachers();
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
}
exports.TeacherController = TeacherController;
