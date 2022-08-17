import React from 'react'
import Input from '../../components/layout/form-controls/Input';
import { useForm } from 'react-hook-form'
import mdVerseLogo from '../../assets/images/md-verse-logo.png'
import ViewCard from '../../components/Card';
import { useNavigate } from 'react-router-dom';
function Login() {
    let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<any>();
    const onLogin = () => {

    }
    const redirectToResetPasswordForm = () => {
navigate('/reset')
    }
    return (
        <>

            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <img src={mdVerseLogo}></img> <br />
                    <b> Login To Your Account</b> <br />
                    <ViewCard>
                        <form onSubmit={handleSubmit(onLogin)}>
                            <Input controller='email' type='email' label="Email" register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1 }}></Input>
                            <Input controller='password' label="Password" type='password' register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1 }}></Input>
                            <br />
                            <button className="form-control btn btn-primary"> Login</button>

                        </form>
                        <br></br>
                    </ViewCard>
                    <li className="btn" id="redirectToSignup" onClick={redirectToResetPasswordForm}>
                        Forgot Password? Then Click here to reset Your Password.
                    </li>
                </div>
            </div>

        </>
    )
}

export default Login