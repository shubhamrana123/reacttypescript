import React from 'react'
import Input from './form-controls/Input'
import { useForm } from 'react-hook-form'
import InitiateAppointment from '../appointment/InitiateAppointment';
function Sidebar() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<any>();
  return (
    <>rtt
    {/* <InitiateAppointment></InitiateAppointment> */}
    <Input controller='patientName' label='Patient' type='text' register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1 ,pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"}}  />
    </>
  )
}

export default Sidebar