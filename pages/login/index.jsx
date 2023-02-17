import React, {useEffect, useState} from 'react'
import Container from './style'
import LineImg from '../../assets/svg/Vectors.svg'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {loginFetch} from "@/redux/slice/login";
import {startMessage} from "@/redux/slice/message";
import CustomInput from 'react-phone-number-input/input';
const Login = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const [loginText, setLoginText] = useState('+998')
    const [passwordText, setPasswordText] = useState('')
    const [checkedState, setCheckedState] = useState(false)

    const login = useSelector((store)=> store.login)

    useEffect(()=> {
        if((localStorage.getItem('remember') === 'yes') && localStorage.getItem('login') && localStorage.getItem('pass')){
            setLoginText(localStorage.getItem('login'))
            setPasswordText(localStorage.getItem('pass'))
            setCheckedState(true)
        }else if(!(localStorage.getItem('remember'))){
            localStorage.removeItem('remember')
            setCheckedState(false)
        }
        if(localStorage.getItem('remember') === 'yes') setCheckedState(true)
    }, [])

    useEffect(()=> {
        if(login.status === 'warning') dispatch(startMessage({type: 'error', message: login.message, time: 3}))
        else if(login.status === 'success') if(localStorage.getItem('accessToken')) {
            router.push('/home')
            dispatch(startMessage({type: 'success', message: 'Siz muvofiyaqatli kirdingiz', time: 3}))
        }
    }, [login])

    useEffect(()=> {
        if (localStorage.getItem('accessToken')) router.push('/home')
    }, [])


    const pushFunc = () => {
        if(checkedState){
            localStorage.setItem('remember', 'yes')
            localStorage.setItem('login', loginText)
            localStorage.setItem('pass', passwordText)
        }else if(checkedState === false){
            localStorage.removeItem('remember')
            localStorage.removeItem('login')
            localStorage.removeItem('pass')
        }
        dispatch(loginFetch({userName: loginText, password: passwordText}))
    }




    return(
        <Container>
            <Container.Inset>
                <p className="title">Sign in</p>
                <p className="subTitle">Sign in and start managing your candidates!</p>

                <CustomInput
                    placeholder='Enter phone number'
                    onChange={(value) => setLoginText(value)}
                    maxLength={17}
                    value={loginText}
                    className={'customInput'}
                />

                <input type="password" className={'customInput'} placeholder={'Password'} onChange={(e)=> setPasswordText(e.target.value)} value={passwordText} />
                <div>
                    <input type="checkbox" id={'rememberMeInput'} className={'checkboxInput'} defaultChecked={checkedState} onClick={(e)=> setCheckedState(e.target.checked)} />
                    <label htmlFor="rememberMeInput">Remember me</label>
                </div>
                <div className={'submitButtonDiv'}>
                    <input type="submit" value="Submit" className={'submitButton'} onClick={()=> pushFunc()} />
                </div>
                <div className={'lineImg'}>
                    <LineImg />
                </div>
            </Container.Inset>
        </Container>
    )
}

export default Login