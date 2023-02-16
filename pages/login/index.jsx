import React, {useEffect, useState} from 'react'
import Container from './style'
import lineImg from '../../assets/img/lineImg.svg'
import Image from "next/image";

const Login = () => {

    const [loginText, setLoginText] = useState('')
    const [passwordText, setPasswordText] = useState('')
    const [checkedState, setCheckedState] = useState(null)


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

    const checkFunc = (e) => {
        if(e.target.checked === true) return localStorage.setItem('remember', 'yes')
        localStorage.removeItem('remember')
        localStorage.removeItem('login')
        localStorage.removeItem('pass')
    }

    const pushFunc = () => {

    }

    return(
        <Container>
            <Container.Inset>
                <p className="title">Sign in</p>
                <p className="subTitle">Sign in and start managing your candidates!</p>
                <input type="text" className={'customInput'} placeholder={'Login'} onChange={(e)=> setLoginText(e.target.value)} value={loginText} />
                <input type="password" className={'customInput'} placeholder={'Password'} onChange={(e)=> setPasswordText(e.target.value)} value={passwordText} />
                <div>
                    <input type="checkbox" id={'rememberMeInput'} className={'checkboxInput'} defaultChecked={checkedState} onClick={(e)=> checkFunc(e)} />
                    <label htmlFor="rememberMeInput">Remember me</label>
                </div>
                <div className={'submitButtonDiv'}>
                    <input type="submit" value="Submit" className={'submitButton'} onClick={()=> pushFunc()} />
                </div>
                <Image src={lineImg} alt={'lineImgDoNotImportant'} className={'lineImg'} />
            </Container.Inset>
        </Container>
    )
}

export default Login