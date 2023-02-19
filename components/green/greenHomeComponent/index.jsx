import Container, {ExitButton, Modal} from './style'
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from "react"
import {addPageCount, getAllDataFetch} from "@/redux/slice/getAllData"
import { useRouter } from "next/router"
import ModalImage from "react-modal-image"
import { registerFetch } from "@/redux/slice/register"
import CloseImg from '../../../assets/svg/close.svg'
import Loading from "@/components/LoadingCom"
import { InView } from "react-intersection-observer"
import { payGetFetch } from "../../../redux/slice/payGetSlice"
import { deployFileFetch } from "@/redux/slice/deployFile"
import { startMessage } from "@/redux/slice/message"
import { paySlicePostFetch } from '../../../redux/slice/getPaySlice'

const GreenHomeComponent = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const getAllData = useSelector((store)=> store.getAllData)
    const register = useSelector((store)=> store.register)
    const { fileId, by } = useSelector((store) => store.deployFile)
    const deployFile = useSelector((store)=> store.deployFile)
    const payPostSlice = useSelector((store)=> store.payPostSlice)
    const payGet = useSelector((store)=> store.payGet)

    const [data, setData] = useState([])
    const [modalHidden, setModalHidden] = useState(false)

    useEffect(()=> {
        if(getAllData.status === 'success') setData(getAllData.data.map((value)=> ({
            attachment: value.attachment,
            attachmentDiploma: value.attachmentDiploma,
            attachmentDiplomaId: value.attachmentDiplomaId,
            attachmentId: value.attachmentId,
            attachmentPassportId: value.attachmentPassportId,
            attachmentPassport: value.attachmentPassport,
            extraPhoneNumber: value.extraPhoneNumber,
            firstName: value.firstName,
            id: value.id,
            lastName: value.lastName,
            passportSeries: value.passportSeries,
            patron: value.patron,
            payments: value.payments,
            phoneNumber: value.phoneNumber,
            hidden: false
        })))
    }, [getAllData])

    useEffect(()=> {
        setData(getAllData.data.map((value)=> ({
            attachment: value.attachment,
            attachmentDiploma: value.attachmentDiploma,
            attachmentDiplomaId: value.attachmentDiplomaId,
            attachmentId: value.attachmentId,
            attachmentPassportId: value.attachmentPassportId,
            attachmentPassport: value.attachmentPassport,
            extraPhoneNumber: value.extraPhoneNumber,
            firstName: value.firstName,
            id: value.id,
            lastName: value.lastName,
            passportSeries: value.passportSeries,
            patron: value.patron,
            payments: value.payments,
            phoneNumber: value.phoneNumber,
            hidden: false
        })))
    }, [getAllData])

    const [inView, setInView] = useState(false);

    useEffect(()=> {
        if (inView){
            if(getAllData.data.length == 20 || getAllData.data.length == 0){
                dispatch(addPageCount())
                dispatch(getAllDataFetch({page: getAllData?.pageCount, query: ''}))
            }
        }
    }, [inView])

    const changeInput = (id) => {
        setData(getAllData.data.map((value)=> ({
            attachment: value.attachment,
            attachmentDiploma: value.attachmentDiploma,
            attachmentDiplomaId: value.attachmentDiplomaId,
            attachmentId: value.attachmentId,
            attachmentPassportId: value.attachmentPassportId,
            attachmentPassport: value.attachmentPassport,
            extraPhoneNumber: value.extraPhoneNumber,
            firstName: value.firstName,
            id: value.id,
            lastName: value.lastName,
            passportSeries: value.passportSeries,
            patron: value.patron,
            payments: value.payments,
            phoneNumber: value.phoneNumber,
            hidden: value.id === id && true
        })))
    }

    const changeUniqValue = ({type, value, id}) => {
        setData(data.map((v)=> ({
            ...v,
            [type]: v.id === id ? value : v[type]
        })))
    }

    useEffect(() => changeAllDataFunc({ type: by, value: fileId }), [fileId])

    useEffect(()=> {
        if(deployFile.status === 'success') dispatch(startMessage({type: 'success', message: 'File yuklandi', time: 1}))
        else if(deployFile.status === 'warning') dispatch(startMessage({type: 'error', message: deployFile?.message || 'message not fount', time: 3}))
    }, [deployFile])

    useEffect(()=> {
        if(register.status === 'success') dispatch(getAllDataFetch({payload: 0, query: ''}))
    }, [register])

    const saveDataFunc = (id) => {
        let oneData = data.filter((value)=> value.id === id)
        dispatch(registerFetch(oneData[0]))
    }

    const [payState, setPayState] = useState({
        id: "",
        userId: "",
        paidAmount: 0,
        description: "",
        paymentType: "",
        priceFileId: ""
    })

    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = payState
        fakeData[type] = value
        setPayState(fakeData)
        setPayState({ ...payState, [type]: value })
    }

    const searchFunc = (eventValue) => {
        setTimeout(()=> {
            dispatch(getAllDataFetch({payload: 0, query: eventValue, search: true}))
        }, 1000)
    }

    const [payGenericDataState, setPayGenericDataState] = useState([])
    const findFileFunc = ({ file, by }) => dispatch(deployFileFetch({ file: file, by }));

    useEffect(()=> {
        if(payPostSlice.status === 'success') window.location.reload(true)
    }, [payPostSlice])

    useEffect(()=> {}, [])

    const paymentsFunc = (id) => {
        dispatch(payGetFetch({id}))

    }

    useEffect(()=> {
        if(payGet.status == 'success') setPayGenericDataState(payGet.data)
    }, [payGet])

    useEffect(()=> {
        if(payPostSlice.status === 'success') setPayGenericDataState(payGet.data)
    }, [payPostSlice])

    // dispatch(payGetFetch({id: value.id}))


    return(
        <>
            <Container.SearchSection>
                <input type={'text'} placeholder={'Search name, phone, passport'} onChange={(e)=> searchFunc(e.target.value)} />
            </Container.SearchSection>
            <ExitButton onClick={()=> router.push('/home')}>Exit</ExitButton>
            {
                modalHidden
                &&
                <Modal>
                    <div className="insetDiv">
                        <CloseImg className={'closeImg'} onClick={()=> setModalHidden(!modalHidden) } />
                        <input type="number" placeholder={'pull narxi'} onChange={(e)=> changeAllDataFunc({type: 'paidAmount', value: Number(e.target.value) })} />
                        <input type="text" placeholder={'ta`rif'} onChange={(e)=> changeAllDataFunc({type: 'description', value: e.target.value})} />
                        <input type="type" placeholder={'tolangan turi'} onChange={(e)=> changeAllDataFunc({type: 'paymentType', value: e.target.value})} />
                        <input type="file" onChange={(e) => findFileFunc({ file: e, by: 'priceFileId' })} />
                        <button onClick={()=> {
                            dispatch(paySlicePostFetch({data: payState}))
                        }}>Saqlash</button>

                        <div className={'modalSection'}>
                            {
                                payGet.status === 'success' &&
                                <div>
                                    {
                                        payGenericDataState.map((value)=> (
                                            <div key={value.id}>
                                                <p><span className={'title'}>tolov</span> : {value.paidAmount}</p>
                                                <p><span className={'title'}>tolov turi</span> : {value.paymentType}</p>
                                                <p><span className={'title'}>description</span> : {value.description}</p>
                                                <ModalImage
                                                    className={'img'}
                                                    small={`https://evrtourback.uz/api/v1/attachment/download/${value?.priceFile?.updatedById}`}
                                                    large={`https://evrtourback.uz/api/v1/attachment/download/${value?.priceFile?.updatedById}`}
                                                />
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    </div>
                </Modal>
            }

            <Container>
                {
                    data?.map((value)=> (
                        <Container.Section key={value.id}>
                            {
                                value?.attachment?.id
                                    ?
                                    <div className={'mainImgDiv'}>
                                        <ModalImage
                                            className={'img'}
                                            small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachment?.id}`}
                                            large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachment?.id}`}
                                        />
                                        <p className={'imgDivText'}>Passport nuxsasi</p>
                                    </div>
                                    :
                                    <div className={'img'}>
                                        <p>Img Not Fount</p>
                                    </div>
                            }
                            {
                                value?.attachmentDiploma?.id ?
                                    <div className={'mainImgDiv'}>
                                        <ModalImage
                                            className={'img'}
                                            small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}
                                            large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}
                                        />
                                        <p className={'imgDivText'}>Diplom nuxsasi</p>
                                    </div>
                                    :
                                    <div className={'img'}>
                                        <p>Img Not Fount</p>
                                    </div>
                            }
                            {
                                value?.attachmentPassport?.id
                                    ?
                                    <div className={'mainImgDiv'}>
                                        <ModalImage
                                            className={'img'}
                                            small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`}
                                            large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`}
                                        />
                                        <p className={'imgDivText'}>Rasim</p>
                                    </div>
                                    :
                                    <div className={'img'}>
                                        <p>Img Not Fount</p>
                                    </div>
                            }

                            <Container.TextSection>
                                <p className="title">Batafsil</p>

                                <p className={'text'}>ISIM:
                                    {
                                        value.hidden ?
                                            <input type="text" value={value.firstName} onChange={(e)=> changeUniqValue({type: 'firstName', value: e.target.value, id: value.id}) } />
                                            :
                                            <span> {value.firstName}</span>
                                    }
                                </p>


                                <p className={'text'}>FAMILIYA:
                                    {
                                        value.hidden ?
                                            <input type="text" value={value.lastName} onChange={(e)=> changeUniqValue({type: 'lastName', value: e.target.value, id: value.id}) } />
                                            :
                                            <span> {value.lastName}</span>
                                    }
                                </p>


                                <p className={'text'}>OTCHESTVO:
                                    {
                                        value.hidden ?
                                            <input type="text" value={value.patron} onChange={(e)=> changeUniqValue({type: 'patron', value: e.target.value, id: value.id}) } />
                                            :
                                            <span>{value.patron}</span>
                                    }
                                </p>


                                <p className={'text'}>PASPORT .S:
                                    {
                                        value.hidden ?
                                            <input type="text" value={value.passportSeries} onChange={(e)=> changeUniqValue({type: 'passportSeries', value: e.target.value, id: value.id}) } />
                                            :
                                            <span> {value.passportSeries}</span>
                                    }
                                </p>


                                <p className={'text'}>T. RAQAM:
                                    {
                                        value.hidden ?
                                            <input type="text" value={value.phoneNumber} onChange={(e)=> changeUniqValue({type: 'phoneNumber', value: e.target.value, id: value.id}) } />
                                            :
                                            <span> +{value.phoneNumber}</span>
                                    }
                                </p>


                                <p className={'text'}>Q. RAQAM:
                                    {
                                        value.hidden ?
                                            <input type="text" value={value.extraPhoneNumber} onChange={(e)=> changeUniqValue({type: 'extraPhoneNumber', value: e.target.value, id: value.id}) } />
                                            :
                                            <span> +{value.extraPhoneNumber}</span>
                                    }
                                </p>

                                {
                                    value.hidden ?
                                        <button onClick={()=> saveDataFunc(value.id)} className="buttonLeft">SAVE</button>
                                        :
                                        <button onClick={()=>  changeInput(value.id)} className="buttonLeft">EDIT</button>
                                }

                                <button className="buttonRight" onClick={()=> {
                                    setModalHidden(!modalHidden)
                                    changeAllDataFunc({type: 'userId', value: value.id})
                                    paymentsFunc(value.id)
                                }} >PAYMENTS</button>
                            </Container.TextSection>
                        </Container.Section>
                    ))
                }
            </Container>
            <InView onChange={setInView} />
            {getAllData?.status === 'loading' && <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}><Loading type={'bars'} color={'#000'} /></div>}
        </>
    )
}


export default GreenHomeComponent