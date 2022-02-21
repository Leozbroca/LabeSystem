// import connection from "../../connection/connection";
// import { Request, Response } from "express";


// export const changeClass = async(req: Request, res: Response)=>{
//     try{
//         const{id, module} = req.body
//         if(!id || !module){
//             res.statusCode = 422
//             throw new Error('Preencha todos os dados.')
//         }

//         const changeTheClass = await connection('labeSystem_class')
//         .update({module})
//         .where({id})
//         res.status(201).send({message:"Módulo alterado", changeTheClass})

//     }catch(error:any){
//         if(typeof error === 'string'){
//             res.send(error)
//         }else{
//             res.status(500).send({message: error.message})
//         }
        
//     }
// }