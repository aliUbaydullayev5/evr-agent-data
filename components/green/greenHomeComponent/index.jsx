import Container from './style'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getAllDataFetch} from "@/redux/slice/getAllData";


const GreenHomeComponent = () => {

    const dispatch = useDispatch()
    const getAllData = useSelector((store)=> store.getAllData)


    const [data, setData] = useState([])

    useEffect(()=> {
        dispatch(getAllDataFetch())
    }, [])

    useEffect(()=> {
        if(getAllData.status === 'success'){
            setData(getAllData.data)
        }
    }, [getAllData])

    console.log(getAllData)

    return(
        <Container>
            {
                data?.map((value)=> (
                    <Container.Setion key={value.id}>
                        
                        <div>
                            {value.firstName}
                        </div>
                        <div>
                            {value.firstName}
                        </div>
                        <div>
                            {value.firstName}
                        </div>
                        <div>
                            {value.firstName}
                        </div>   <div>
                            {value.firstName}
                        </div>
                   

                    </Container.Setion>
                ))
            }
        </Container>
    )
}

export default GreenHomeComponent