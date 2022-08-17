import React from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, useNavigate } from 'react-router-dom';
import mdVerseLogo from '../../assets/images/md-verse-logo.png'
import ViewCard from '../../components/Card';
import Input from '../../components/layout/form-controls/Input';
function ResetPasswordForm() {
let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<any>();
    const onHandleClick = () => {
navigate('/login')
    }
    return (
        <>
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <img src={mdVerseLogo}></img> <br />
                    <b> Reset Your Password</b> <br />
                    <ViewCard>
                        <form onSubmit={handleSubmit(onHandleClick)}>
                            <Input controller='password' type='password' label="New Password" register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1 }}></Input>
                            <Input controller='password' label="Confirm Password" type='password' register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1 }}></Input>
                            <br />
                            <button className="form-control btn btn-primary"> Save Password</button>

                        </form>
                        <br></br>
                    </ViewCard>
                    {/* <li className="btn" id="redirectToSignup" onClick={redirectToSignup}>
                        Forgot Password? Then Click here to reset Your Password.
                    </li> */}
                </div>
            </div>
        </>
    )
}

export default ResetPasswordForm