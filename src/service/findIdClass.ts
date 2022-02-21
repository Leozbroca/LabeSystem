// import connection from "../connection/connection";

// export const findIdClass = async (className: string) => {
//  try {
//   if (!className) {
//    throw new Error("Check name")
//   }
//   const info = await connection.raw(`
//   SELECT id FROM labeSystem_class WHERE name = "${className}";
//   `);
//   if (info[0][0]) {
//    let response = info[0].map((id:any) => {
//     return id.id
//    })
//    return response[0]
//   } else {
//    return null
//   }

//  } catch (error: any) {
//   console.log("erro no sistema", error)
//   return null
//  }
// }
