import Container, {Block, LogOutButton} from './style'
import Root from "@/Root";
import LineImg from './../../assets/svg/Vectors.svg'
import {useRouter} from "next/router";

const HomeComponent = () => {

    const router = useRouter()

    return(
        <Root>
            <Container className={'nocopy'}>
                <Block back={'rgba(0, 39, 105, 0.65)'}>
                    ADD DATA
                </Block>
                <Block back={'rgba(20,152,0,0.65)'}>
                    VIEW DATA
                </Block>

                <div className={'lineImg'}>
                    <LineImg />
                </div>
                <LogOutButton onClick={()=> router.push('/login')}>
                    Log Out
                </LogOutButton>
            </Container>
        </Root>
    )
}

export default HomeComponent