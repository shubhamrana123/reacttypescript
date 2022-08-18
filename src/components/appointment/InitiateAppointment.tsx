import React,{useState} from 'react'
import Input from '../layout/form-controls/Input'
import { useForm } from 'react-hook-form'
import TextArea from '../layout/form-controls/TextArea';
import Button from '../layout/form-controls/Button';
function InitiateAppointment() {
    const [invite,setInvite] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<any>();
    const onClickSendInviteButton = () =>{

    }
  return (
 <>
 <h1 > Initiate Appointment</h1>
  <Input controller='email' type='email' label="Patient" register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1,pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"}}></Input>
  <Input controller='email' type='email' label="Subject" register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1,pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" }}></Input>
  <TextArea cols='30' rows='10' label='Invite'></TextArea>
  <button className='form-control btn btn-primary' onClick= {onClickSendInviteButton}>Send Invite</button>
 </>
  )
}

export default InitiateAppointment