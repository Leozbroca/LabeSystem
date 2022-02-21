"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const StudentController_1 = require("./controller/StudentController");
const ClassController_1 = require("./controller/ClassController");
const TeacherController_1 = require("./controller/TeacherController");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const studentController = new StudentController_1.StudentController();
const classController = new ClassController_1.ClassController();
const teacherController = new TeacherController_1.TeacherController();
app.post('/class', classController.createClass);
app.post('/student', studentController.createStudent);
app.post('/teacher', teacherController.createTeacher);
app.get('/student', studentController.getStudentByName);
app.get('/teacher', teacherController.getTeacherByName);
app.put('/student/:id/edit', studentController.changeStudentClass);
app.put('/teacher/:id/edit', teacherController.changeTeacherClass);
app.get('/class/:class_id', classController.getPeopleByClass);
app.put('/class/:id/edit', classController.changeModule);
app.get('/classes', classController.getAllClasses);
app.get('/teachers', teacherController.getAllTeachers);
app.get('/hobby/:hobby_id', classController.getStudentByHobby);
app.get('/skill/:skill_id', classController.getTeacherBySkill);
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
