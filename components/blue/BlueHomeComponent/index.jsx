import Container, {ContaerOfAlls, ExitButton, Modal} from './style'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deployFileFetch} from "@/redux/slice/deployFile";
import {registerFetch} from "@/redux/slice/register";
import {startMessage} from "@/redux/slice/message";
import CustomInput from 'react-phone-number-input/input';
import CloseImg from "@/assets/svg/close.svg";
import Loading from "@/components/LoadingCom";
import ModalImage from "react-modal-image";
import {payGetFetch} from "@/redux/slice/payGetSlice";
import {getAllDataFetch} from "@/redux/slice/getAllData";

const BlueHomeComponent = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const { fileId, by } = useSelector((store) => store.deployFile)
    const register = useSelector((store)=> store.register)
    const deployFile = useSelector((store)=> store.deployFile)
    const [payGenericDataState, setPayGenericDataState] = useState([])

    //  copy code
    const payPostSlice = useSelector((store)=> store.payPostSlice)
    const payGet = useSelector((store)=> store.payGet)
    const getAllData = useSelector((store)=> store.getAllData)

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
    const [modalHidden, setModalHidden] = useState(false)


    const changeAllDataFunc = ({ type, value }) => {
        const fakeData = data;
        fakeData[type] = value;
        setData(fakeData);
        setData({ ...data, [type]: value });
    };

    useEffect(() => changeAllDataFunc({ type: by, value: fileId }), [fileId])

    useEffect(()=> {
        if(payGet.status == 'success') setPayGenericDataState(payGet.data)
    }, [payGet])

    useEffect(()=> {
        if(deployFile.status === 'success') dispatch(startMessage({type: 'success', message: 'File yuklandi', time: 1}))
        else if(deployFile.status === 'warning') dispatch(startMessage({type: 'error', message: deployFile?.message || 'message not fount', time: 3}))
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
        if(register.status === 'error' || register.status === 'warning') dispatch(startMessage({type: 'warning', message: register.message, time: 2}))
    }, [register])

    const pushData = () => {
        if(data.firstName.length < 3) return dispatch(startMessage({type: 'warning', message: 'Isimni toldiring', time: 2}))
        if(data.lastName.length < 3) return dispatch(startMessage({type: 'warning', message: 'Familiyani toldiring', time: 2}))
        if(data.phoneNumber.length !== 13) return dispatch(startMessage({type: 'warning', message: 'Telefon raqamni toldiring', time: 2}))
        if(data.passportSeries.length !== 9) return dispatch(startMessage({type: 'warning', message: 'Passport seriyasini toldiring', time: 2}))
        if(data.attachmentPassportId.length < 3) return dispatch(startMessage({type: 'warning', message: 'Passport nusxasini yuklang', time: 2}))
        return dispatch(registerFetch(data))
    }



    // ---------------- Copy code

    // const [allData, setAllData] = useState([])
    //
    // const [payState, setPayState] = useState({
    //
    // })
    //
    // useEffect(()=> {
    //     setAllData(getAllData.data.map((value)=> ({
    //         attachment: value.attachment,
    //         attachmentDiploma: value.attachmentDiploma,
    //         attachmentDiplomaId: value.attachmentDiplomaId,
    //         attachmentId: value.attachmentId,
    //         attachmentPassportId: value.attachmentPassportId,
    //         attachmentPassport: value.attachmentPassport,
    //         extraPhoneNumber: value.extraPhoneNumber,
    //         firstName: value.firstName,
    //         id: value.id,
    //         lastName: value.lastName,
    //         passportSeries: value.passportSeries,
    //         patron: value.patron,
    //         payments: value.payments,
    //         phoneNumber: value.phoneNumber,
    //         hidden: false
    //     })).slice(0, 3) )
    // }, [getAllData])
    //
    // const paymentsFunc = (id) => {
    //     dispatch(payGetFetch({id}))
    // }
    //
    // useEffect(()=> {
    //     if(payGet.status == 'success') setPayGenericDataState(payGet.data)
    // }, [payGet])
    //
    // useEffect(()=> {
    //     if(payPostSlice.status === 'success') setPayGenericDataState(payGet.data)
    // }, [payPostSlice])
    //
    //
    // useEffect(()=> {
    //     dispatch(getAllDataFetch({page: 0, query: ''}))
    // }, [])
    //
    // console.log(getAllData, 'paystate')

    return(
        <>
            <ExitButton onClick={()=> router.push('/home')}>Ortga qaytish</ExitButton>
            <Container>

                <input type="text" placeholder={'Isim'} onChange={(e)=> changeAllDataFunc({type: 'firstName', value: e.target.value})} value={data.firstName} />
                <input type="text" placeholder={'Familiya'} onChange={(e)=> changeAllDataFunc({type: 'lastName', value: e.target.value})} value={data.lastName} />
                <input type="text" placeholder={'Otasini ismi'} onChange={(e)=> changeAllDataFunc({type: 'patron', value: e.target.value})} value={data.patron} />

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


                <input type="text" placeholder={'passport seriya'} maxLength={9} onChange={(e)=> changeAllDataFunc({type: 'passportSeries', value: e.target.value})} value={data.passportSeries} />

                <label className="custom-file-upload">
                    <input type="file" id={'avatar'} onChange={(e) => findFileFunc({ file: e, by: 'attachmentPassportId' })} />
                    Pasport <strong>FILE {data.attachmentPassportId.length ? 'YUKLANDI' : deployFile.status === 'loading' && 'LOADING ...'   } </strong>
                </label>

                <label className="custom-file-upload">
                    <input type="file" id={'avatar'} onChange={(e) => findFileFunc({ file: e, by: 'attachmentDiplomaId' })} />
                    Diplom <strong>FILE {data.attachmentDiplomaId.length ? 'YUKLANDI' : deployFile.status === 'loading' && 'LOADING ...'   } </strong>
                </label>

                <label className="custom-file-upload">
                    <input type="file" id={'avatar'} placeholder={'attachment id'} onChange={(e) => findFileFunc({ file: e, by: 'attachmentId' })} />
                    Avatar Rasim <strong>FILE {data.attachmentId.length ? 'YUKLANDI' : deployFile.status === 'loading' && 'LOADING ...'   } </strong>
                </label>

                {
                    register.status === 'loading' ?
                        <button>....</button>
                        :
                        <button onClick={()=> pushData()}>MALUMOT SAQLASH</button>
                }

            </Container>

            {/*Copy code*/}

            {/*{*/}
            {/*    modalHidden*/}
            {/*    &&*/}
            {/*    <Modal>*/}
            {/*        <div className="insetDiv">*/}
            {/*            <CloseImg className={'closeImg'} onClick={()=> setModalHidden(!modalHidden) } />*/}
            {/*            <input type="number" placeholder={'pull narxi'} onChange={(e)=> changeAllDataFunc({type: 'paidAmount', value: Number(e.target.value) })} />*/}
            {/*            <input type="text" placeholder={'ta`rif'} onChange={(e)=> changeAllDataFunc({type: 'description', value: e.target.value})} />*/}
            {/*            <input type="type" placeholder={'tolangan turi'} onChange={(e)=> changeAllDataFunc({type: 'paymentType', value: e.target.value})} />*/}

            {/*            <label className="custom-file-upload">*/}
            {/*                <input className={'fileInput'} type="file" onChange={(e) => findFileFunc({ file: e, by: 'priceFileId' })} />*/}
            {/*                Tolov Check <strong>FILE {payState.priceFileId.length ? 'YUKLANDI' : deployFile.status === 'loading' && 'LOADING ...'   } </strong>*/}
            {/*            </label>*/}

            {/*        /!*    <button onClick={()=> saqlashFunc()*!/*/}
            {/*        /!*    }>Saqlash</button>*!/*/}

            {/*        /!*    <div className={'modalSection'}>*!/*/}
            {/*        /!*        {*!/*/}
            {/*        /!*            payGet.status === 'loading' && <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}><Loading type={'bars'} color={'#000'} /></div>*!/*/}
            {/*        /!*        }*!/*/}
            {/*        /!*        {*!/*/}
            {/*        /!*            payGet.status === 'success' && payGenericDataState.length ?*!/*/}
            {/*        /!*                <div>*!/*/}
            {/*        /!*                    {*!/*/}
            {/*        /!*                        payGenericDataState.map((value)=> (*!/*/}
            {/*        /!*                            <div key={value.id} className={'mapDimPay'}>*!/*/}
            {/*        /!*                                <p><span className={'title'}>tolov</span> : {value.paidAmount}</p>*!/*/}
            {/*        /!*                                <p><span className={'title'}>tolov turi</span> : {value.paymentType}</p>*!/*/}
            {/*        /!*                                <p><span className={'title'}>description</span> : {value.description}</p>*!/*/}
            {/*        /!*                                <ModalImage*!/*/}
            {/*        /!*                                    className={'img'}*!/*/}
            {/*        /!*                                    small={`https://evrtourback.uz/api/v1/attachment/download/${value?.priceFile?.id}`}*!/*/}
            {/*        /!*                                    large={`https://evrtourback.uz/api/v1/attachment/download/${value?.priceFile?.id}`}*!/*/}
            {/*        /!*                                />*!/*/}
            {/*        /!*                            </div>*!/*/}
            {/*        /!*                        ))*!/*/}
            {/*        /!*                    }*!/*/}
            {/*        /!*                </div>*!/*/}
            {/*        /!*                :*!/*/}
            {/*        /!*                <h1>Tolov Qilinmagan</h1>*!/*/}
            {/*        /!*        }*!/*/}
            {/*        /!*    </div>*!/*/}
            {/*        </div>*/}
            {/*    </Modal>*/}
            {/*}*/}


            {/*<ContaerOfAlls>*/}
            {/*    {*/}
            {/*        getAllData?.status === 'success' && allData?.map((value)=> (*/}
            {/*            <Container.Section key={value.id}>*/}
            {/*                {*/}
            {/*                    value?.attachment?.id*/}
            {/*                        ?*/}
            {/*                        <div className={'mainImgDiv'}>*/}
            {/*                            <ModalImage*/}
            {/*                                className={'img'}*/}
            {/*                                small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachment?.id}`}*/}
            {/*                                large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachment?.id}`}*/}
            {/*                            />*/}
            {/*                            <p className={'imgDivText'}>Passport nuxsasi</p>*/}
            {/*                        </div>*/}
            {/*                        :*/}
            {/*                        <div className={'img'}>*/}
            {/*                            <p>Img Not Fount</p>*/}
            {/*                        </div>*/}
            {/*                }*/}
            {/*                {*/}
            {/*                    value?.attachmentDiploma?.id ?*/}
            {/*                        <div className={'mainImgDiv'}>*/}
            {/*                            <ModalImage*/}
            {/*                                className={'img'}*/}
            {/*                                small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}*/}
            {/*                                large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}*/}
            {/*                            />*/}
            {/*                            <p className={'imgDivText'}>Diplom nuxsasi</p>*/}
            {/*                        </div>*/}
            {/*                        :*/}
            {/*                        <div className={'img'}>*/}
            {/*                            <p>Img Not Fount</p>*/}
            {/*                        </div>*/}
            {/*                }*/}
            {/*                {*/}
            {/*                    value?.attachmentPassport?.id*/}
            {/*                        ?*/}
            {/*                        <div className={'mainImgDiv'}>*/}
            {/*                            <ModalImage*/}
            {/*                                className={'img'}*/}
            {/*                                small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`}*/}
            {/*                                large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`}*/}
            {/*                            />*/}
            {/*                            <p className={'imgDivText'}>Rasim</p>*/}
            {/*                        </div>*/}
            {/*                        :*/}
            {/*                        <div className={'img'}>*/}
            {/*                            <p>Img Not Fount</p>*/}
            {/*                        </div>*/}
            {/*                }*/}

            {/*                <Container.TextSection>*/}
            {/*                    <p className="title">Batafsil</p>*/}

            {/*                    <p className={'text'}>ISIM:*/}
            {/*                        {*/}
            {/*                            value.hidden ?*/}
            {/*                                <input type="text" value={value.firstName} onChange={(e)=> changeUniqValue({type: 'firstName', value: e.target.value, id: value.id}) } />*/}
            {/*                                :*/}
            {/*                                <span> {value.firstName}</span>*/}
            {/*                        }*/}
            {/*                    </p>*/}


            {/*                    <p className={'text'}>FAMILIYA:*/}
            {/*                        {*/}
            {/*                            value.hidden ?*/}
            {/*                                <input type="text" value={value.lastName} onChange={(e)=> changeUniqValue({type: 'lastName', value: e.target.value, id: value.id}) } />*/}
            {/*                                :*/}
            {/*                                <span> {value.lastName}</span>*/}
            {/*                        }*/}
            {/*                    </p>*/}


            {/*                    <p className={'text'}>OTCHESTVO:*/}
            {/*                        {*/}
            {/*                            value.hidden ?*/}
            {/*                                <input type="text" value={value.patron} onChange={(e)=> changeUniqValue({type: 'patron', value: e.target.value, id: value.id}) } />*/}
            {/*                                :*/}
            {/*                                <span>{value.patron}</span>*/}
            {/*                        }*/}
            {/*                    </p>*/}


            {/*                    <p className={'text'}>PASPORT .S:*/}
            {/*                        {*/}
            {/*                            value.hidden ?*/}
            {/*                                <input type="text" value={value.passportSeries} onChange={(e)=> changeUniqValue({type: 'passportSeries', value: e.target.value, id: value.id}) } />*/}
            {/*                                :*/}
            {/*                                <span> {value.passportSeries}</span>*/}
            {/*                        }*/}
            {/*                    </p>*/}


            {/*                    <p className={'text'}>T. RAQAM:*/}
            {/*                        {*/}
            {/*                            value.hidden ?*/}
            {/*                                <input type="text" value={value.phoneNumber} onChange={(e)=> changeUniqValue({type: 'phoneNumber', value: e.target.value, id: value.id}) } />*/}
            {/*                                :*/}
            {/*                                <span> +{value.phoneNumber}</span>*/}
            {/*                        }*/}
            {/*                    </p>*/}


            {/*                    <p className={'text'}>Q. RAQAM:*/}
            {/*                        {*/}
            {/*                            value.hidden ?*/}
            {/*                                <input type="text" value={value.extraPhoneNumber} onChange={(e)=> changeUniqValue({type: 'extraPhoneNumber', value: e.target.value, id: value.id}) } />*/}
            {/*                                :*/}
            {/*                                <span> +{value.extraPhoneNumber}</span>*/}
            {/*                        }*/}
            {/*                    </p>*/}

            {/*                    {*/}
            {/*                        value.hidden ?*/}
            {/*                            <button onClick={()=> saveDataFunc(value.id)} className="buttonLeft">SAVE</button>*/}
            {/*                            :*/}
            {/*                            <button onClick={()=>  changeInput(value.id)} className="buttonLeft">EDIT</button>*/}
            {/*                    }*/}

            {/*                    <button className="buttonRight" onClick={()=> {*/}
            {/*                        setModalHidden(!modalHidden)*/}
            {/*                        // changeAllDataFunc({type: 'userId', value: value.id})*/}
            {/*                        paymentsFunc(value.id)*/}
            {/*                    }} >PAYMENTS</button>*/}
            {/*                </Container.TextSection>*/}
            {/*            </Container.Section>*/}
            {/*        ))*/}
            {/*    }*/}
            {/*</ContaerOfAlls>*/}

            {/*{getAllData?.status === 'loading' && <div style={{display: 'flex', justifyContent: 'center', padding: '10px'}}><Loading type={'bars'} color={'#000'} /></div>}*/}

        </>
    )
}

export default BlueHomeComponent