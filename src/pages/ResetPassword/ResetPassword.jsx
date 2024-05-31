import { sendPasswordResetEmail, updatePassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import MsgBox from '../../components/MsgBox/MsgBox';
import Spinner from '../../components/Spinner/Spinner';
import { auth, confirmThePasswordReset } from '../../firebase/firebaseConfig';
import Visible from '../../assets/visible.png';
import Hidden from '../../assets/hidden.png';


const ResetPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [isMailSent, setMailSent] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [searchParams] = useSearchParams();
    let oobCode:string | null = searchParams.get('oobCode');

    const handleSubmit = async(e) => {
        setLoading(true);
        e.preventDefault();
        if ((password == confirmPassword) && (password.length > 6)) {
            if(oobCode){
                await confirmThePasswordReset(oobCode,password).then(()=>{
                    setSuccessMsg("Password Reset Successfully!");
                    setLoading(false);
                    setTimeout(() => {
                        navigate('/login');
                    }, 1000);
                })
            }else{
                setErrorMsg("Something went wrong");
                setLoading(false);
            }
        } else {
            setErrorMsg("Passwords must match");
            setLoading(false);
        }

    }



    return (
        <div className='contact-us flex items-center justify-center h-screen bg-whitesmoke'>
            <div className="flex sm:flex-row-reverse lg:flex-row-reverse flex-col-reverse lg:w-8/12 h-5/6 bg-white shadow-md sm:w-10/12 w-full lg:scale-1 sm:scale-1 scale-90 ">
                <div className=" w-full lg:w-1/2 sm:w-1/2 h-full flex flex-col items-center justify-center ">
                    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-8/12'>
                        {
                            errorMsg && <MsgBox color={'red'} text={errorMsg} />

                        }  {
                            successMsg && <MsgBox color={'green'} text={successMsg} />
                        }
                        <br />
                        <span className='relative  w-full h-12 flex items-center mb-4 shadow'>
                            <input onChange={(e) => { setPassword(e.target.value) }} value={password} className='h-full w-full bg-blue rounded-md bg-input pl-4' type={showPassword?"text":"password"} placeholder='Password' />
                            <button type='button' onClick={() => {
                                setShowPassword(!showPassword);
                            }} className='absolute right-4'>{showPassword ? <img src={Visible} className='w-5'></img> : <img className='w-5' src={Hidden}></img>}</button>
                        </span>
                        <span className='relative  w-full h-12 flex items-center mb-4 shadow'>
                            <input onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} className='h-full w-full bg-blue rounded-md bg-input pl-4' type={showPassword?"text":"password"} placeholder='Confirm Password' />
                            <button type='button' onClick={() => {
                                setShowConfirmPassword(!showConfirmPassword);
                            }} className='absolute right-4'>{showConfirmPassword ? <img src={Visible} className='w-5'></img> : <img className='w-5' src={Hidden}></img>}</button>
                        </span>
                        <button type='submit' className='w-full h-12 flex items-center justify-center bg-button text-white rounded-md mt-3'>
                            {loading ? <Spinner /> : "Reset Password"}
                        </button>
                    </form>
                    {errorMsg &&
                        <div><Link to={'/login'}>Go Back To Login</Link></div>
                    }
                </div>
                <div className="text-left w-full sm:w-1/2 lg:w-1/2 bg-pink flex flex-col justify-center items-center sm:h-full lg:h-full h-20">
                    <p className='text-4xl font-bold'>Reset Password</p>
                    <span className='text-xl mt-5 ml-3 sm:flex  hidden'>Enter your new credentials</span>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword