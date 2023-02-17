import Container, {ExitButton} from './style'


const BlueHomeComponent = () => {

    return(
        <Container>
            <input type="text" placeholder={'id'} />
            <input type="text" placeholder={'firstName'} />
            <input type="text" placeholder={'lastName'} />
            <input type="text" placeholder={'patron'} />
            <input type="text" placeholder={'phoneNumber'} />
            <input type="text" placeholder={'extraPhoneNumber'} />
            <input type="text" placeholder={'passportSeries'} />
            <input type="text" placeholder={'attachmentId'} />
            <input type="text" placeholder={'attachmentUser'} />
            <input type="text" placeholder={'attachment'} />
            <input type="text" placeholder={'payments'} />
            <button>Malumot Qoshish</button>

            <ExitButton>Exit</ExitButton>
        </Container>
    )
}

export default BlueHomeComponent