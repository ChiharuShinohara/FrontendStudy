import {useContext} from "react";
import {UserContext} from "../components/userprovider/AuthUser";
 import { parseCookies, destroyCookie } from 'nookies';
import {useRouter} from "next/router";
import { useEffect } from "react";

const Logout=(ctx)=>{
    console.log(ctx, "ctx.cookie")
    const  {userInfo, setUserInfo } = useContext(UserContext);
    setUserInfo(null);
    destroyCookie(null,'cookie', {path: "/"});
    const cookie= parseCookies(ctx);
    console.log(cookie, "getcookie")
    const router=useRouter()
    useEffect( ()=>{router.push("/"); })

    return null
}

export default Logout;