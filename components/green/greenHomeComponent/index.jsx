import Container from './style'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllDataFetch} from "@/redux/slice/getAllData";


const GreenHomeComponent = () => {

    const dispatch = useDispatch()
    const getAllData = useSelector((store)=> store.getAllData)



    useEffect(()=> {
        dispatch(getAllDataFetch())
    }, [])

    // return await fetch(`https://evrtourback.uz/api/v1/user/get`, {
    //     method: 'GET',
    //     headers: {
    //         Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    //         'Content-Type': 'application/json',
    //         // Authorization: `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTk4OTkzODkwOTI3IiwiaWF0IjoxNjc2NTU5ODA0LCJleHAiOjE2NzcxNjQ2MDR9.Hbdv81cFgoepVE3Lw9VKcHxLZpAdVzsYZfAwgkKi-X15zBXcwPgrLBwd1A07j0FZ7ZSnc4grNF8D1Epm6vYmIw`
    //     }
    // }).then((res)=> res.json())


    return(
        <Container>

        </Container>
    )
}

export default GreenHomeComponent