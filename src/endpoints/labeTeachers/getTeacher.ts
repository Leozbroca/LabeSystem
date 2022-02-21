// import connection from "../../connection/connection";
// import { Request, Response } from "express";
// import { Teacher } from "../../types";

// export const getTeachers = async (req: Request, res: Response) => {
//  try {
//   const getThen: Teacher[] = await connection('labeSystem_teacher')
//    .select()
//   res.status(200).send(getThen)

//  } catch (error: any) {
//   if (typeof error === 'string') {
//    res.send(error)
//   } else {
//    res.status(500).send({ message: error.message })
//   }
//  }
// }