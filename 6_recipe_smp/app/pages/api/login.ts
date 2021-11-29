import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../modules/database';
import crypto from 'crypto-js'


export default async (req: NextApiRequest, res:NextApiResponse) => {
    // console.log(req.body.params,"reqreqreq")
    const key= process.env.LOGIN_ENCRYPT
    const email=req.body.params.email
    const password=req.body.params.password
    const token =crypto.AES.encrypt(email, key)

    // console.log(email, "password")
    // console.log(key)
    // console.log(encrypted.toString(), "EEEEEEEEEEE")
    const resData={data:[], errmessage:""}
    try{
        const data= await sqlExecuter.any('update users set p_token='+`'${token}'`+' where mail=' + `'${email}'` + 'and login_password=' + `'${password}'` + 'RETURNING id, user_name, icon, p_token ;');
        resData.data= data
      


        if(resData.data.length==0){
        resData.errmessage="ユーザー情報に誤りがあります"
        console.log(resData, "err")
       }
        }catch(err){
            console.log(err)
            }
    // const GetToken= await sqlExecuter.any('select * from users where id=2');
   

    res.status(200).json(resData);
  };