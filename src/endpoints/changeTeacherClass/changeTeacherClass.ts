// import { studant } from '../../types';
// import { Response, Request } from "express";
// import connection from '../../connection/connection';

// export const changeTeacherClass = async (req: Request, res: Response) => {
//  let errorCode: number = 404
//  try {
//   const { id, class_id } = req.body

//   if (!id || !class_id) {
//    errorCode = 404
//    throw new Error("Check the id or class id")
//   }

//   await connection.raw(`
//    UPDATE labeSystem_teacher
//    SET class_id = ${class_id}
//    WHERE id = ${id};
//   `);

//   res.send("success")

//  } catch (error: any) {
//   res.status(errorCode).send({ message: error.message })
//  }
// } 