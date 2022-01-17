import React, { useEffect }  from 'react';
import Error from 'next/error';
import Layout from '../../components/layout/Layout'
import Conteiner from '../../components/main/conteiner';
import { AxiosClient } from '../../modules/request';
import  { RecipeApiResponse } from "../../＠types/basicdata"
import {useContext} from "react";
import {AuthUserContext} from "../../components/userprovider/AuthUser";
import { useRouter } from "next/router";
import {useState } from 'react';
import favoInspection from '../../modules/favoInspection'


interface Props {
  recipeDatas: RecipeApiResponse;
  errorCode:number;

}

type favoProps = {
  recipeid: number;
  isFlag: boolean;
}[] | null 


const MyPage :React.FC<Props>=({recipeDatas, errorCode})=>{
  const authUser = useContext(AuthUserContext);
  const router =useRouter();
  const [favoriteFlag, setFavoriteFlag]= useState<favoProps>(null); 
  
  
    useEffect(()=>{ 
      if(authUser.userInfo){
        const recipeid= router.query.recipeid;
        const userid = authUser.userInfo.id;
        favoInspection(userid, recipeid).then(datas=>{
          setFavoriteFlag(datas)
        }).catch((err)=>{
          console.log(err);
        })
        }
    },[authUser.userInfo])


    if (errorCode) {
        return <Error statusCode={errorCode} />;
      } 
  
    
    return(
     <div> 
        <Layout>
        <Conteiner recipeDatas={recipeDatas} favoriteFlag={favoriteFlag} setFavoriteFlag={setFavoriteFlag}></Conteiner>
        </Layout> 
   </div>
        
      
      
    )
}


export const getServerSideProps = async (ctx: any) => {
 
  try {
    const id = ctx.params.recipeid;
    const axios = AxiosClient();
    const res = await axios.get(`recipe/${id}`);
    if(res.data.recipeDatas.length==0){
      return { props: { errorCode: 500 } };
    }
    return { props: { recipeDatas: res.data.recipeDatas} };
    
   
    //このpropsは上のPageコンポーネントに渡される
  } catch (err) {
    console.log(err)
    const errorCode = typeof err.response === "undefined"?  500: err.response.status;
    return { props: { errorCode } };
  } 
};

export default MyPage;
