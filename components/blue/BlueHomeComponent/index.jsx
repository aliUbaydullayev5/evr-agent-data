import Container, {ExitButton} from './style'
import {useRouter} from "next/router";


const BlueHomeComponent = () => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        patron: '',
        phoneNumber: '',
        extraPhoneNumber: '',
        passportSeries: '',
        attachmentId: '',
        attachmentPassportId: '',
        attachmentDiplomaId: '',
    })

    // firstName
    // lastName
    // patron
    // phoneNumber
    // extraPhoneNumber
    // passportSeries
    // attachmentId
    // attachmentPassportId
    // attachmentDiplomaId

    const router = useRouter()


    return(
        <Container>
            <input type="text" placeholder={'id'} />
            <input type="text" placeholder={'first name'} />
            <input type="text" placeholder={'last name'} />
            <input type="text" placeholder={'patron'} />
            <input type="text" placeholder={'phone number'} />
            <input type="text" placeholder={'extra phone number'} />
            <input type="text" placeholder={'passport series'} />
            <input type="text" placeholder={'attachment id'} />
            <input type="text" placeholder={'attachment user'} />
            <input type="text" placeholder={'attachment'} />
            <input type="text" placeholder={'payments'} />
            <button>Malumot Qoshish</button>
            <ExitButton onClick={()=> router.push('/home')}>Exit</ExitButton>
        </Container>
    )
}

export default BlueHomeComponent