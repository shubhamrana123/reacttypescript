
import { FC } from "react"
import AppointmentList from "../screens/AppointmentList"
import Login from "../screens/auth/Login"
import ResetPasswordForm from "../screens/auth/ResetPasswordForm"
interface Route{
    key:string,
    title:string,
    path:string,
    component:FC<{}>
}
export const routes:Array<Route> = [

    {
        key:'app-Login',
        title:'Login',
        path:'login',
        component:Login
    },
    {
        key:'app-ResetForm',
        title:'resetFormPassword',
        path:'reset',
        component:ResetPasswordForm
    },
    {
        key:'app-Appointments',
        title:'appointmentList',
        path:'appointments',
        component:AppointmentList
    },
  
]