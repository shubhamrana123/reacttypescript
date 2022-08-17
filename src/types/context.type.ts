import { UserInfo } from "os"
import { IUserInfo } from "./user.type"

export type UserContextType={
    isLoggedIn:boolean,
    userInfo: IUserInfo,
    logout:()=>void,
    updateUserInfo:(UserInfo:IUserInfo)=>void
}