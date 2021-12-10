import { NextApiRequest, NextApiResponse } from 'next';
import { sqlExecuter } from '../../modules/database';



export default async (req: NextApiRequest, res:NextApiResponse) => {
    const token=req.body.params.cookie
    console.log(token, "token")
    const resData={data:[]}

    try{
        const data= await sqlExecuter.any('select id, user_name, icon, p_token from users where p_token='+`'${token}'`+';');
        console.log(data, "userdata")
        resData.data=data;
        }catch(err){
            console.log(err)
            }
   

    res.status(200).json(resData);
  };