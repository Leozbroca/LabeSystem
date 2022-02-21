// import { studant } from './../types';
// import connection from "../connection/connection";

// export const findEstudants = async (classId: number): Promise<studant[] | null> => {
//  try {
//   if (!classId) {
//    throw new Error("Checar id")
//   }
//   const info = await connection.raw(`
//   SELECT * FROM labeSystem_estudants WHERE class_id = ${classId};
//   `);
//   if (info[0][0]) {
//    let response: studant[] = info[0].map((estudant: any) => {
//     return {
//      id: estudant.id,
//      name: estudant.name,
//      email: estudant.email,
//      birth_date: estudant.birth_date,
//      class_id: estudant.class_id
//     }
//    })
//    return response
//   } else {
//    return null
//   }

//  } catch (error: any) {
//   console.log("erro no sistema", error)
//   return null
//  }
// }
