import Container, {ExitButton} from './style'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getAllDataFetch} from "@/redux/slice/getAllData";
import {useRouter} from "next/router";
import { Button, Image as CustomImage, InputNumber } from 'antd';
import ModalImage from "react-modal-image";
const GreenHomeComponent = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const getAllData = useSelector((store)=> store.getAllData)

    const [data, setData] = useState([])

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


    const [singleValue, setSingleValue] = useState()
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


    return(
        <>
            <ExitButton onClick={()=> router.push('/home')}>Exit</ExitButton>

            <Container>
                {
                    data?.map((value)=> (
                        <Container.Section key={value.id}>
                            <table>

                                <tbody>
                                <tr>
                                    <td>Attachment: </td>
                                    <td>
                                        {
                                            value?.attachment?.id
                                                ?
                                                <ModalImage
                                                    className={'img'}
                                                    small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachment?.id}`}
                                                    large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachment?.id}`}
                                                />
                                                :
                                                <div>
                                                    <p>Img Not Fount</p>
                                                </div>
                                        }

                                    </td>
                                </tr>
                                <tr>
                                    <td>Attachment Diploma: </td>
                                    <td>
                                        {
                                            value?.attachmentDiploma?.id ?
                                                <ModalImage
                                                    className={'img'}
                                                    small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}
                                                    large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}
                                                />
                                                :
                                                <div>
                                                    <p>Img Not Fount</p>
                                                </div>
                                        }

                                    </td>
                                </tr>

                                <tr>
                                    <td>Attachment Passport: </td>
                                    <td>
                                        {
                                            value?.attachmentPassport?.id
                                                ?
                                                <ModalImage
                                                    className={'img'}
                                                    small={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`}
                                                    large={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`}
                                                />
                                                :
                                                <div>
                                                    <p>Img Not Fount</p>
                                                </div>

                                        }

                                    </td>
                                </tr>
                                <tr>
                                    <td>First Name: </td>
                                    <>
                                        {
                                            value.hidden ?
                                                <input type="text" value={value.firstName} onChange={(e)=> changeUniqValue({type: 'firstName', value: e.target.value, id: value.id}) } />
                                                :
                                                <td>{value.firstName}</td>
                                        }
                                    </>
                                </tr>
                                <tr>
                                    <td>Last Name: </td>
                                    <>
                                        {
                                            value.hidden ?
                                                <input type="text" value={value.lastName} onChange={(e)=> changeUniqValue({type: 'lastName', value: e.target.value, id: value.id}) } />
                                                :
                                                <td>{value.lastName}</td>
                                        }
                                    </>
                                </tr>
                                <tr>
                                    <td>Patron: </td>
                                    <>
                                        {
                                            value.hidden ?
                                                <input type="text" value={value.patron} onChange={(e)=> changeUniqValue({type: 'patron', value: e.target.value, id: value.id}) } />
                                                :
                                                <td>{value.patron}</td>
                                        }
                                    </>
                                </tr>
                                <tr>
                                    <td>Passport: </td>
                                    <>
                                        {
                                            value.hidden ?
                                                <input type="text" value={value.passportSeries} onChange={(e)=> changeUniqValue({type: 'passportSeries', value: e.target.value, id: value.id}) } />
                                                :
                                                <td>{value.passportSeries}</td>
                                        }
                                    </>
                                </tr>
                                <tr>
                                    <>
                                        <td>Phone Number: </td>
                                        {
                                            value.hidden ?
                                                <input type="text" value={value.phoneNumber} onChange={(e)=> changeUniqValue({type: 'phoneNumber', value: e.target.value, id: value.id}) } />
                                                :
                                                <td>{value.phoneNumber}</td>
                                        }

                                    </>
                                </tr>
                                <tr>

                                    <>
                                        <td>Phone Number: </td>
                                        {
                                            value.hidden ?
                                                <input type="text" value={value.extraPhoneNumber} onChange={(e)=> changeUniqValue({type: 'extraPhoneNumber', value: e.target.value, id: value.id}) } />
                                                :
                                                <td>{value.extraPhoneNumber}</td>
                                        }

                                    </>

                                </tr>
                                </tbody>

                                {
                                    value.hidden ?
                                        <button>OK</button>
                                        :
                                        <button onClick={()=> changeInput(value.id) }>Edit</button>
                                }
                            </table>
                        </Container.Section>
                    ))
                }
            </Container>
        </>
    )
}

export default GreenHomeComponent