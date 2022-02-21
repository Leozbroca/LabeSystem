// import { findEstudants } from '../../service/findEstudants';
// import { findIdClass } from '../../service/findIdClass';
// import { studant } from '../../types';
// import { Response, Request } from "express";

// export const getStudant = async (req: Request, res: Response) => {
//  let errorCode:number = 404
//  try {
//   const labeClass = req.params.class
//   let idClass
//   let studants: studant[] | null

//   if (!labeClass) {
//    errorCode = 402
//    throw new Error("Check the class")
//   }
//   idClass = await findIdClass(labeClass)
//   if (idClass == null) {
//    errorCode = 404
//    throw new Error("class not found")
//   }

//   studants = await findEstudants(idClass)

//   if (studants == null) {
//    errorCode = 404
//    throw new Error("Studant not found")
//   }

//   res.send({ result: studants })

//  } catch (error: any) {
//   res.status(errorCode).send({ message: error.message })
//  }
// } 