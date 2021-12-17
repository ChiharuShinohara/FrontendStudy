import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';
import { AxiosClient } from './request';
import Error from 'next/error';


export const tokenInspection= async(ctx? :NextPageContext) => {
        const cookie= parseCookies(ctx);
        console.log(cookie, "cookie")
        if(typeof(cookie.cookie)=="undefined"){
            return null 
            }
        try{ const axios = AxiosClient();
            const res = await axios.post('token', {params: cookie});
            const userinfo=res.data.data[0]
            return userinfo;
        }catch(err){
           console.log(err)}
       
}