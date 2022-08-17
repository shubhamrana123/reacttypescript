import React, { useState } from 'react'
import InitiateAppointment from '../components/appointment/InitiateAppointment'
import TemporaryDrawer from '../components/Drawer'
import Button from '../components/layout/form-controls/Button'

function AppointmentList() {
  const [appointment,setAppointment] = useState(false)
  const [invite,setInvite] = useState(false)
  const InitiatesAppointment = () =>{

setAppointment(true)


  }
  const onClickSendInvitationButton = () =>{
    setAppointment(false)
setInvite(true)
  }
  return (
<>

<h2>Appointments</h2>
<Button onClick={InitiatesAppointment} text="Initiate Appointment" ></Button>
<TemporaryDrawer></TemporaryDrawer>
{/* <div className="row">
    <div className="col-md-4"></div>
    <div className="col-md-4">
      <Button onClick={InitiatesAppointment} text="Initiate Appointment" ></Button>

      <div className='row'>
        
      
        <div className="col-md-4">
        {(appointment?(<><InitiateAppointment></InitiateAppointment></>):null)}
        {(invite?(<><p><b>Invitation has been sent. Would you like to start the meeting now</b></p>
       <Button text="Start Meeting" ></Button></>):null)}
        </div>
      </div>
     <br/>
     <Button  text="Send Invite" onClick={onClickSendInvitationButton} ></Button>
    <button className='form-control btn btn-primary'>Initiate</button>
    </div>
</div> */}

</>
  )
}

export default AppointmentList