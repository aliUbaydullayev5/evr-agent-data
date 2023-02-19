import Container, {ExitButton, Modal} from './style'
import {useDispatch, useSelector} from "react-redux"
import React, {useEffect, useState} from "react"
import {getAllDataFetch} from "@/redux/slice/getAllData"
import {useRouter} from "next/router"
import ModalImage from "react-modal-image"
import {registerFetch} from "@/redux/slice/register"
import CloseImg from '../../../assets/svg/close.svg'
const GreenHomeComponent = () => {

    const router = useRouter()
    const dispatch = useDispatch()

    const getAllData = useSelector((store)=> store.getAllData)
    const register = useSelector((store)=> store.register)

    const [data, setData] = useState([])
    const [modalHidden, setModalHidden] = useState(false)

    useEffect(()=> {dispatch(getAllDataFetch())}, [])

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

    useEffect(()=> {
        if(register.status === 'success') dispatch(getAllDataFetch())
    }, [register])


    const saveDataFunc = (id) => {
        let oneData = data.filter((value)=> value.id === id)
        dispatch(registerFetch(oneData[0]))
    }

    return(
        <>
            <ExitButton onClick={()=> router.push('/home')}>Exit</ExitButton>
            {
                modalHidden
                &&
                <Modal>
                    <div className="insetDiv">
                        <CloseImg className={'closeImg'} onClick={()=> setModalHidden(!modalHidden) } />

                        <div>
                            <input type="number" placeholder={'tolov summasi'} id={'sum'} />
                            <label htmlFor="sum">SUM</label>
                        </div>

                        {/*<input type="text" placeholder={'batavsil'} />*/}
                        <textarea cols="34" rows="5" placeholder={'batavsil'}>

                        </textarea>

                        <input type="text" placeholder={'tolov turi'} />

                        <div>
                            <input type="file" id={'file'}/>
                            <label htmlFor="file">Tolov Checki</label>
                        </div>
                        <button>Saqlash</button>
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
                                        // <button onClick={()=> saveDataFunc(value.id)} >SAVE</button>
                                        <button onClick={()=> saveDataFunc(value.id)} className="buttonLeft">SAVE</button>
                                        :
                                        <button onClick={()=>  changeInput(value.id)} className="buttonLeft">EDIT</button>
                                }

                                <button className="buttonRight">PAYMENTS</button>
                            </Container.TextSection>
                        </Container.Section>
                    ))
                }
            </Container>
        </>
    )
}


//         <td>
//             {
//                 value.hidden ?
//                     <button onClick={()=> saveDataFunc(value.id)} >OK</button>
//                     :
//                     <button onClick={()=>  changeInput(value.id) }>Edit</button>
//             }
//         </td>
//         <td>
//             <button onClick={()=> setModalHidden(!modalHidden) }>Payments</button>
//         </td>

// <table>
//     <tbody>
//     <tr>
//         <td>Attachment: </td>
//         <td>
//             {
//                 value?.attachment?.id
//                     ?
//                     <ModalImage
//                         className={'img'}
//                         small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachment?.id}`}
//                         large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachment?.id}`}
//                     />
//                     :
//                     <div>
//                         <p>Img Not Fount</p>
//                     </div>
//             }
//         </td>
//     </tr>
//     <tr>
//         <td>Attachment Diploma: </td>
//         <td>
//             {
//                 value?.attachmentDiploma?.id ?
//                     <ModalImage
//                         className={'img'}
//                         small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}
//                         large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}
//                     />
//                     :
//                     <div>
//                         <p>Img Not Fount</p>
//                     </div>
//             }
//         </td>
//     </tr>
//
//     <tr>
//         <td>Attachment Passport: </td>
//         <td>
//             {
//                 value?.attachmentPassport?.id
//                     ?
//                     <ModalImage
//                         className={'img'}
//                         small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`}
//                         large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`}
//                     />
//                     :
//                     <div>
//                         <p>Img Not Fount</p>
//                     </div>
//             }
//         </td>
//     </tr>
//
//     <tr>
//         <td>First Name: </td>
//         <>
//             {
//                 value.hidden ?
//                     <input type="text" value={value.firstName} onChange={(e)=> changeUniqValue({type: 'firstName', value: e.target.value, id: value.id}) } />
//                     :
//                     <td>{value.firstName}</td>
//             }
//         </>
//     </tr>
//
//     <tr>
//         <td>Last Name: </td>
//         <>
//             {
//                 value.hidden ?
//                     <input type="text" value={value.lastName} onChange={(e)=> changeUniqValue({type: 'lastName', value: e.target.value, id: value.id}) } />
//                     :
//                     <td>{value.lastName}</td>
//             }
//         </>
//     </tr>
//
//     <tr>
//         <td>Patron: </td>
//         <>
//             {
//                 value.hidden ?
//                     <input type="text" value={value.patron} onChange={(e)=> changeUniqValue({type: 'patron', value: e.target.value, id: value.id}) } />
//                     :
//                     <td>{value.patron}</td>
//             }
//         </>
//     </tr>
//
//     <tr>
//         <td>Passport: </td>
//         <>
//             {
//                 value.hidden ?
//                     <input type="text" value={value.passportSeries} onChange={(e)=> changeUniqValue({type: 'passportSeries', value: e.target.value, id: value.id}) } />
//                     :
//                     <td>{value.passportSeries}</td>
//             }
//         </>
//     </tr>
//
//     <tr>
//         <>
//             <td>Phone Number: </td>
//             {
//                 value.hidden ?
//                     <input type="text" value={value.phoneNumber} onChange={(e)=> changeUniqValue({type: 'phoneNumber', value: e.target.value, id: value.id}) } />
//                     :
//                     <td>{value.phoneNumber}</td>
//             }
//         </>
//     </tr>
//
//     <tr>
//         <>
//             <td>Phone Number: </td>
//             {
//                 value.hidden ?
//                     <input type="text" value={value.extraPhoneNumber} onChange={(e)=> changeUniqValue({type: 'extraPhoneNumber', value: e.target.value, id: value.id}) } />
//                     :
//                     <td>{value.extraPhoneNumber}</td>
//             }
//         </>
//     </tr>
//
//     <tr>
//         <td>
//             {
//                 value.hidden ?
//                     <button onClick={()=> saveDataFunc(value.id)} >OK</button>
//                     :
//                     <button onClick={()=>  changeInput(value.id) }>Edit</button>
//             }
//         </td>
//         <td>
//             <button onClick={()=> setModalHidden(!modalHidden) }>Payments</button>
//         </td>
//     </tr>
//
//     </tbody>
// </table>

export default GreenHomeComponent