import Container, {Block, LogOutButton} from './style'
import Root from "@/root";
import LineImg from './../../assets/svg/Vectors.svg'
import {useRouter} from "next/router";

const HomeComponent = () => {

    const router = useRouter()

    const clearTokenLogout = () => {
        localStorage.removeItem('accessToken')
        router.push('/login')
    }

    return(
        <Root>
            <Container className={'nocopy'}>
                <Block back={'rgba(0, 39, 105, 0.65)'} onClick={()=> router.push('/home/blue')} >
                    MA`LUMOT QO`SHISH
                </Block>
                <Block back={'rgba(20,152,0,0.65)'} onClick={()=> router.push('/home/green')} >
                    MA`LUMOT KO`RISH
                </Block>

                <div className={'lineImg'}>
                    <LineImg />
                </div>
                <LogOutButton onClick={()=> clearTokenLogout()}>
                    CHIQISH
                </LogOutButton>
            </Container>
        </Root>
    )
}

export default HomeComponent