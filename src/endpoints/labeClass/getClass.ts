// import connection from "../../connection/connection";
// import { Request, Response } from "express";
// import { labeClass } from "../../types";

// export const getClass = async(req: Request, res: Response)=>{
//     try{
//         const getThen: labeClass[] = await connection('labeSystem_class')
//         .where('module', '>', 0)
//         res.status(200).send(getThen)
//     }catch(error:any){
//         if(typeof error === 'string'){
//             res.send(error)
//         }else{
//             res.status(500).send({message: error.message})
//         }
//     }
// }