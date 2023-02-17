import Container from './style'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {getAllDataFetch} from "@/redux/slice/getAllData";
import Image from "next/image";
import {ExitButton} from "@/components/blue/BlueHomeComponent/style";
import {useRouter} from "next/router";
import { Image as CustomImage } from 'antd';

const GreenHomeComponent = () => {

    const router = useRouter()
    const dispatch = useDispatch()
    const getAllData = useSelector((store)=> store.getAllData)
    const getImg = useSelector((store)=> store.getImg)

    const [data, setData] = useState([])

    useEffect(()=> {dispatch(getAllDataFetch())}, [])
    useEffect(()=> {
        if(getAllData.status === 'success') setData(getAllData.data)
    }, [getAllData])


    console.log(getImg)

    const [visible, setVisible] = useState(false);

    return(
        <>
            <ExitButton onClick={()=> router.push('/home')}>Exit</ExitButton>

            <Container>
                {
                    data?.map((value)=> (
                        <Container.Section key={value.id}>
                            <div>
                                <>
                                    <CustomImage
                                        preview={{
                                            visible: false,
                                        }}
                                        width={200}
                                        height={200}
                                        src={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`}
                                        onClick={() => setVisible(true)}
                                    />
                                    <div
                                        style={{
                                            display: 'none',
                                        }}
                                    >
                                        <CustomImage.PreviewGroup
                                            preview={{
                                                visible,
                                                onVisibleChange: (vis) => setVisible(vis),
                                            }}
                                        >
                                            <CustomImage src={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`} />
                                            {/*<CustomImage src={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentDiploma?.id}`} />*/}
                                            {/*<CustomImage src={`https://evrtourback.uz/api/v1/attachment/download/${value?.attachmentPassport?.id}`} />*/}
                                        </CustomImage.PreviewGroup>
                                    </div>
                                </>

                            </div>
                            <table>
                                <tr>
                                    <td>First Name: </td>
                                    <td>{value.firstName}</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td>Last Name: </td>
                                    <td>{value.lastName}</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td>Patron: </td>
                                    <td>{value.patron}</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td>Passport: </td>
                                    <td>{value.passportSeries}</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td>Phone Number: </td>
                                    <td>{value.phoneNumber}</td>
                                </tr>
                                <hr/>
                                <tr>
                                    <td>Phone Number: </td>
                                    <td>{value.extraPhoneNumber}</td>
                                </tr>
                                <button>Edit</button>
                            </table>
                        </Container.Section>
                    ))
                }
            </Container>
        </>
    )
}

export default GreenHomeComponent