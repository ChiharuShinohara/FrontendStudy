import { createContext, useState } from "react";
import {LoginedUserData} from '../../＠types/basicdata'

//typescriptは必ず初期値を設定する必要がある
export const UserContext= createContext({} as {
    userInfo: LoginedUserData;
    setUserInfo: React.Dispatch<React.SetStateAction<LoginedUserData>>;
});

const AuthUser:React.FC=(props)=>{
     const [userInfo, setUserInfo]= useState<LoginedUserData | null | undefined>(undefined);
       
return(
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
        {props.children}
    </UserContext.Provider>
)

}


export default AuthUser;