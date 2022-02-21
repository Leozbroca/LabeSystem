import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { StudentController } from "./controller/StudentController";
import { ClassController } from "./controller/ClassController";
import { TeacherController } from "./controller/TeacherController";

const app: Express = express();
app.use(express.json());
app.use(cors());

const studentController = new StudentController()
const classController = new ClassController()
const teacherController = new TeacherController()
app.post('/class', classController.createClass)
app.post('/student', studentController.createStudent)
app.post('/teacher', teacherController.createTeacher)
app.get('/student', studentController.getStudentByName)
app.get('/teacher', teacherController.getTeacherByName)
app.put('/student/:id/edit', studentController.changeStudentClass)
app.put('/teacher/:id/edit', teacherController.changeTeacherClass)
app.get('/class/:class_id', classController.getPeopleByClass)
app.put('/class/:id/edit', classController.changeModule)
app.get('/classes', classController.getAllClasses)
app.get('/teachers', teacherController.getAllTeachers)
app.get('/hobby/:hobby_id', classController.getStudentByHobby)
app.get('/skill/:skill_id', classController.getTeacherBySkill)

const server = app.listen(process.env.PORT || 3003, () => {
 if (server) {
  const address = server.address() as AddressInfo;
  console.log(`Server is running in http://localhost: ${address.port}`);
 } else {
  console.error(`Failure upon starting server.`);
 }
});
