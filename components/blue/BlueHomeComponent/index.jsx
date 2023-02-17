import Container, {ExitButton} from './style'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import deployFile, {deployFileFetch} from "@/redux/slice/deployFile";
import {registerFetch} from "@/redux/slice/register";
import {startMessage} from "@/redux/slice/message";
import CustomInput from 'react-phone-number-input/input';

const BlueHomeComponent = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const { fileId, by } = useSelector((store) => store.deployFile)
    const register = useSelector((store)=> store.register)
    const deployFile = useSelector((store)=> store.deployFile)

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        patron: '',
        phoneNumber: '+998',
        extraPhoneNumber: '+998',
        passportSeries: '',
        attachmentId: '',
        attachmentPassportId: '',
        attachmentDiplomaId: '',
    })



    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = data;
        fakeData[type] = value;
        setData(fakeData);
        setData({ ...data, [type]: value });
    };
    useEffect(() => changeAllDataFunc({ type: by, value: fileId }), [fileId]);
    useEffect(()=> {
        if(deployFile.status === 'success') dispatch(startMessage({type: 'success', message: 'File yuklandi', time: 1}))
    }, [deployFile])
    const findFileFunc = ({ file, by }) => dispatch(deployFileFetch({ file: file, by }));


    useEffect(()=> {
        if(register.status === 'success'){
            setData({
                firstName: '',
                lastName: '',
                patron: '',
                phoneNumber: '+998',
                extraPhoneNumber: '+998',
                passportSeries: '',
                attachmentId: '',
                attachmentPassportId: '',
                attachmentDiplomaId: '',
            })
            window.location.reload(true)
        }
        if(register.status === 'error' || register.status === 'warning'){

        }
    }, [register])


    return(
        <>
            <ExitButton onClick={()=> router.push('/home')}>Exit</ExitButton>
            <Container>
                <input type="text" placeholder={'first name'} onChange={(e)=> changeAllDataFunc({type: 'firstName', value: e.target.value})} value={data.firstName} />
                <input type="text" placeholder={'last name'} onChange={(e)=> changeAllDataFunc({type: 'lastName', value: e.target.value})} value={data.lastName} />
                <input type="text" placeholder={'patron'} onChange={(e)=> changeAllDataFunc({type: 'patron', value: e.target.value})} value={data.patron} />

                <CustomInput
                    placeholder='phone number'
                    onChange={(value) => changeAllDataFunc({type: 'phoneNumber', value})}
                    maxLength={17}
                    value={data.phoneNumber}
                    className={'customInput'}
                />

                <CustomInput
                    placeholder='extra phone number'
                    onChange={(value) => changeAllDataFunc({type: 'extraPhoneNumber', value})}
                    maxLength={17}
                    value={data.extraPhoneNumber}
                    className={'customInput'}
                />


                <input type="text" placeholder={'passport series'} maxLength={9} onChange={(e)=> changeAllDataFunc({type: 'passportSeries', value: e.target.value})} value={data.passportSeries} />

                <input type="file" placeholder={'attachment id'} onChange={(e) => findFileFunc({ file: e, by: 'attachmentId' })} />
                <input type="file" placeholder={'attachment'} onChange={(e) => findFileFunc({ file: e, by: 'attachmentPassportId' })} />
                <input type="file" placeholder={'attachmentDiplomaId'} onChange={(e) => findFileFunc({ file: e, by: 'attachmentDiplomaId' })} />
                <button onClick={()=> dispatch(registerFetch(data)) }>Malumot Qoshish</button>
            </Container>
        </>
    )
}

export default BlueHomeComponent