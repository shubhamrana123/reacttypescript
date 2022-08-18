import React from 'react'
import Input from '../../components/layout/form-controls/Input';
import { useForm } from 'react-hook-form'
import mdVerseLogo from '../../assets/images/md-verse-logo.png'
import ViewCard from '../../components/Card';
import { useNavigate } from 'react-router-dom';
import loginbg from '../../assets/images/login-bg.png'
import Images from '../../constant/images';
import { IInputProps } from '../../types/common.types';
function Login() {
    // const fields = props.fields;
    // console.log(props);
    
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

            {/* <div className='row'>
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
            </div> */}

            <div className="login-page">
                <div className="login-body">
                    <div className="login-body-inner">
                        <div className="login-logo"><img src={Images.logo} /></div>
                        <div className="login-title">Login to your account</div>
                        <form onSubmit={handleSubmit(onLogin)}>
                        <div className="login-form-control">
                            {/* <label>Username</label> */}
                        
                            <Input controller='email' type='email' label="Email" register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1,pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" }}></Input>
             
                        </div>

                        <div className="login-form-control">
                            {/* <label>Password</label> */}
                            <Input controller='password' label="Password" type='password' register={register} errors={errors} fields={{ required: true, maxLength: 10, minLength: 1 ,pattern:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/}}></Input>
                        </div>

                        <div className="login-form-btn">
                            <button>Login</button>
                        </div>
                        </form>
                    </div>
                    <div className="login-hints-wrapper">
                        <div className="login-hints ">
                            <span className="login-hints-icons">{errors.password && <b>X</b>}</span>
                            <span className="login-hints-text">{errors.password && <p className="text-danger">Should contain: </p>}</span>
                        </div>
                        <div className="login-hints red">
                            <span className="login-hints-icons">{errors.password && <b>X</b>}</span>
                            <span className="login-hints-text">{errors.password && <p className="text-danger">Atleast 8 characters </p>}</span>
                        </div>
                        <div className="login-hints green">
                            <span className="login-hints-icons">{errors.password && <b>X</b>}</span>
                            <span className="login-hints-text">  {errors.password && <p className="text-danger"> Lower case letters (a-z)</p>} </span>
                        </div>
                        <div className="login-hints red">
                            <span className="login-hints-icons">{errors.password && <b>X</b>}</span>
                            <span className="login-hints-text">    {errors.password && <p className="text-danger"> Upper case letters (A-Z)</p>}</span>
                        </div>
                        <div className="login-hints red">
                            <span className="login-hints-icons">{errors.password && <b>X</b>}</span>
                            <span className="login-hints-text"> {errors.password && <p className="text-danger"> Numbers (0-9)</p>}</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login