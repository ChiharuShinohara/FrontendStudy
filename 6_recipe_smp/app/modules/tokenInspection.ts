import { parseCookies } from 'nookies';
import { NextPageContext } from 'next';
import { AxiosClient } from './request';
import {useContext} from "react";
import {UserContext} from "../components/userprovider/AuthUser";
//import {LoginedUserData} from '../＠types/basicdata'

//type Props= LoginedUserData|null


export const tokenInspection= async(ctx? :NextPageContext) => {
        const cookie= parseCookies(ctx);
        if(cookie.cookie==undefined){
            return null 
            }
        const axios = AxiosClient();
        const res = await axios.post('token', {params: cookie});
        const userinfo=res.data.data[0]
        
        return userinfo;
}