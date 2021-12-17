import {useContext} from "react";
import { AuthDispatchContext} from "../components/userprovider/AuthUser";
 import { parseCookies, destroyCookie } from 'nookies';
import {useRouter} from "next/router";
import { useEffect } from "react";

const Logout=(ctx)=>{
    console.log(ctx, "ctx.cookie")
    const setUserInfo= useContext(AuthDispatchContext)

    setUserInfo(null);
    destroyCookie(null,'cookie', {path: "/"});
    const cookie= parseCookies(ctx);
    console.log(cookie, "getcookie")
    const router=useRouter()
    useEffect( ()=>{router.push("/"); })

    return null
}

export default Logout;