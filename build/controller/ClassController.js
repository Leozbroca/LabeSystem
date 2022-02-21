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
exports.ClassController = void 0;
const ClassBussiness_1 = __importDefault(require("../bussiness/ClassBussiness"));
const connection_1 = require("../connection/connection");
class ClassController {
    createClass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, module } = req.body;
                yield ClassBussiness_1.default.createClass(name, module);
                res.status(200).send("Classe criada com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send({ error: error.message });
            }
            finally {
                yield connection_1.BaseDatabase.destroyConnection();
            }
        });
    }
    changeModule(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { module } = req.body;
                const id = req.params.id;
                yield ClassBussiness_1.default.changeModule(id, module);
                res.status(200).send("Módulo alterado com sucesso!");
            }
            catch (error) {
                res.status(error.statusCode || 400).send({ error: error.message });
            }
            finally {
                yield connection_1.BaseDatabase.destroyConnection();
            }
        });
    }
    getAllClasses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield ClassBussiness_1.default.getAllClasses();
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
    getPeopleByClass(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const class_id = req.params.class_id;
                const result = yield ClassBussiness_1.default.getPeopleByClass(class_id);
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
    getStudentByHobby(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hobby_id = req.params.hobby_id;
                const result = yield ClassBussiness_1.default.getStudentByHobby(hobby_id);
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
    getTeacherBySkill(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skill_id = req.params.skill_id;
                const result = yield ClassBussiness_1.default.getTeacherBySkill(skill_id);
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
exports.ClassController = ClassController;
